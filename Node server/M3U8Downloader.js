const fs = require('fs');
const {join} = require('path');
const m3u8stream = require('m3u8stream');
const {exec} = require('child_process');
const uploadFile = require("./utils.js");
const util = require('util');
const execPromise = util.promisify(exec);

class M3U8Downloader {
  #url;
  #destinationPath;
  #baseFileName;
  #stream;
  #writeStream;
  #fileIndex;
  #totalDuration;

  constructor() {
    this.#url = 'https://isgpopen.ezvizlife.com/v3/openlive/BA2447764_1_2.m3u8?expire=1781800663&id=726959553021255680&c=e083c700b2&t=09d8794f2107e1f0ff085b1b7366fa3b4ac972b890f5f546276e185aada60a8f&ev=100';
    this.#destinationPath = join(__dirname, 'output');
    this.#baseFileName = 'video';
    this.#fileIndex = 0;
    this.#totalDuration = 0;
    if (!fs.existsSync(this.#destinationPath)) {
      fs.mkdirSync(this.#destinationPath);
    }
  }

  start() {
    this.#stream = m3u8stream(this.#url);
    this.#openNewWriteStream();

    this.#stream.on('progress', (progress) => {
      this.#totalDuration += (progress.duration / 1000) || 0;
      console.log(`Total duration: ${this.#totalDuration.toFixed(2)}s`);
      if (this.#totalDuration >= 10) {
        this.#switchWriteStream();
        this.#totalDuration = 0;
      }
    });

    this.#stream.pipe(this.#writeStream);
  }

  stop() {
    if (this.#stream && this.#writeStream) {
      this.#stream.unpipe(this.#writeStream);
      this.#stream.end();
      this.#writeStream.end();
      console.log('Download stopped and streams closed');
      fs.unlinkSync(join(this.#destinationPath, `${this.#baseFileName}_${this.#fileIndex}.mp4`));
      process.exit(0);
    }
  }

  #openNewWriteStream() {
    const fileName = `${this.#baseFileName}_${this.#fileIndex}.mp4`;
    this.#writeStream = fs.createWriteStream(join(this.#destinationPath, fileName));
    console.log(`Started writing to ${fileName}`);
  }

  #switchWriteStream() {
    if (this.#writeStream) {
      this.#stream.unpipe(this.#writeStream);
      this.#writeStream.end(() => {
        console.log(`Finished writing to ${this.#baseFileName}_${this.#fileIndex}.mp4`);
        this.#convertToWav(join(this.#destinationPath, `${this.#baseFileName}_${this.#fileIndex}.mp4`))
        .then(async (value) => {
          console.log(`Finished converting to WAV at`, value);
          if (value === undefined) 
            return;
          const result = await uploadFile(value);
          console.log(result.result);
          fs.unlinkSync(value.replace('.wav', '.mp4'));
        }).catch((error) => {
          console.log(`Error converting to WAV`, error.message);
        });
        this.#fileIndex++;
        this.#openNewWriteStream();
        this.#stream.pipe(this.#writeStream);
      });
    }
  }

  async #convertToWav(videoFilePath) {
    const wavFilePath = videoFilePath.replace('.mp4', '.wav');
    return new Promise((resolve, reject) => {
      exec(`ffmpeg -i "${videoFilePath}" "${wavFilePath}"`, (error, stdout, stderr) => {
        if (error) {
          return reject(error);
        }
        resolve(wavFilePath);
      });
    });
  }

  // async #convertToWav(videoFilePath) {
  //   const wavFilePath = videoFilePath.replace('.mp4', '.wav');
  //   try {
  //     await execPromise(`ffmpeg -i "${videoFilePath}" "${wavFilePath}"`);
  //     await uploadFile(wavFilePath);
  //     return wavFilePath;
  //   } catch (error) {
  //     throw new Error(`Failed to convert ${videoFilePath} to WAV: ${error.message}`);
  //   }
  // }


}

module.exports = {M3U8Downloader};