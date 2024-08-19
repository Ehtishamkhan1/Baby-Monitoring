import tensorflow as tf
import tensorflow_hub as hub
import numpy as np
import csv
import matplotlib.pyplot as plt
from IPython.display import Audio
from scipy.io import wavfile
import scipy.signal
import os

class AIService:
    def __init__(self):
        self.model = hub.load('https://tfhub.dev/google/yamnet/1')
        self.class_names = self._load_class_names()
    
    def _load_class_names(self):
        class_map_path = self.model.class_map_path().numpy()
        class_names = []
        with tf.io.gfile.GFile(class_map_path) as csvfile:
            reader = csv.DictReader(csvfile)
            for row in reader:
                class_names.append(row['display_name'])
        return class_names

    def _ensure_sample_rate(self, original_sample_rate, waveform, desired_sample_rate=16000):
        if original_sample_rate != desired_sample_rate:
            desired_length = int(round(float(len(waveform)) /
                                       original_sample_rate * desired_sample_rate))
            waveform = scipy.signal.resample(waveform, desired_length)
        return desired_sample_rate, waveform

    def analyze_audio(self, file_path):
        sample_rate, wav_data = wavfile.read(file_path, 'rb')
        sample_rate, wav_data = self._ensure_sample_rate(sample_rate, wav_data)

        duration = len(wav_data) / sample_rate
        print(f'Sample rate: {sample_rate} Hz')
        print(f'Total duration: {duration:.2f}s')
        print(f'Size of the input: {len(wav_data)}')

        Audio(wav_data, rate=sample_rate)

        waveform = wav_data / tf.int16.max

        scores, embeddings, spectrogram = self.model(waveform)

        scores_np = scores.numpy()
        spectrogram_np = spectrogram.numpy()
        inferred_class = self.class_names[scores_np.mean(axis=0).argmax()]
        if inferred_class in ["Crying, sobbing", "Baby cry, infant cry"]:
            return True
        else:
            return False

# Example usage:
# ai_service = AIService()
# result = ai_service.analyze_audio('baby.wav')
# print(result)
