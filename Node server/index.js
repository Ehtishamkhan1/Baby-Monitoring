const { M3U8Downloader } = require('./M3U8Downloader');
const downloader = new M3U8Downloader();
downloader.start();

process.on('SIGINT', () => {
  console.log('Stopping download...Please wait!');
  downloader.stop();
});

