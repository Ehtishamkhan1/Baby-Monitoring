Baby Monitoring App
Table of Contents
Overview
Features
Technologies Used
Installation
FFmpeg Setup
Usage
Contributing
License
Contact
Overview
The Baby Monitoring App is a mobile application developed in React Native that allows parents to monitor their baby remotely. The app connects to an HLS stream camera placed near the baby, detects when the baby cries using the camera’s microphone, and sends a notification to the mother. The app also offers a live video stream for real-time monitoring, providing peace of mind for parents.

Features
Live Video Streaming: View a real-time HLS video feed from the camera near the baby.
Cry Detection: The app detects when the baby cries and sends instant notifications to the user.
User Authentication: Secure user registration and login system to ensure privacy.
Push Notifications: Receive real-time alerts on your device when the baby cries.
Intuitive User Interface: Simple and user-friendly design for easy navigation and use.
Technologies Used
React Native: A JavaScript framework for building native mobile apps.
HLS Streaming: For live video streaming from the baby’s room.
Camera Integration: Utilizes an IP camera for video and audio capture.
Firebase: Used for user authentication and push notifications.
Expo: Managed workflow for building the app.
Installation
Follow these steps to set up and run the Baby Monitoring App on your local machine:

Clone the repository:

bash
Copy code
git clone https://github.com/your-username/baby-monitoring-app.git
Navigate to the project directory:

bash
Copy code
cd baby-monitoring-app
Install the dependencies:

bash
Copy code
npm install
Set up FFmpeg:
The app requires FFmpeg to handle HLS streaming. You need to install FFmpeg on your personal computer.

Windows:
Download FFmpeg from FFmpeg.org. Extract the downloaded files and add the bin directory to your system's PATH environment variable.

macOS:
You can install FFmpeg using Homebrew:

bash
Copy code
brew install ffmpeg
Linux:
Install FFmpeg using your distribution's package manager:

bash
Copy code
sudo apt-get install ffmpeg
Start the Expo server:

bash
Copy code
npm start
Run the app on your device or emulator:

For iOS: Press i in the terminal to run on an iOS simulator.
For Android: Press a in the terminal to run on an Android emulator or device.
FFmpeg Setup
FFmpeg is a powerful multimedia framework that is required for handling HLS streaming in the Baby Monitoring App. Ensure that FFmpeg is correctly installed and configured on your machine:

Check FFmpeg Installation:
After installation, you can verify that FFmpeg is installed correctly by running:
bash
Copy code
ffmpeg -version
This should display the installed version of FFmpeg and confirm that it’s properly set up.
Usage
Sign Up / Log In:

Register for a new account or log in with your existing credentials.
Connect to the Camera:

Ensure your IP camera is set up and streaming. Connect the app to the camera by entering the camera's stream URL.
Monitor the Baby:

View the live video feed from the camera. The app will automatically detect if the baby is crying and send you a notification.
Notifications:

Keep the app running in the background to receive notifications when your baby cries.
Contributing
Contributions to the Baby Monitoring App are welcome! Here’s how you can help:

Fork the repository.
Create a new branch (git checkout -b feature/YourFeature).
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature/YourFeature).
Open a pull request to discuss and merge your changes.
Please make sure your code adheres to the project's coding standards and passes all tests before submitting a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for details.

