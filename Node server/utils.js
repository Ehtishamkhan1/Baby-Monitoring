const fs = require('fs');
const axios = require('axios');
const FormData = require('form-data');
const { getFirestore, addDoc, collection} =  require('firebase/firestore/lite');
const { app } = require('./config.js');

async function uploadFile(filePath) {
    if (filePath === undefined) {
      return;
    }
    const uploadUrl = 'http://127.0.0.1:8000/';

    try {
      const formData = new FormData();
      formData.append('file', fs.createReadStream(filePath));

      const response = await axios.post(uploadUrl, formData, {
        headers: {
          ...formData.getHeaders()
        }
      });

      if (response.data.result == true) {
        await sendNotification();
        await storeNotificationInDB();
      }
      

      return response.data;
    } catch (error) {
      throw new Error(`Failed to upload file to ${uploadUrl}: ${error.message}`);
    }
  }

  

async function sendNotification() {
  console.log("notification sent!");
const url = 'https://app.nativenotify.com/api/notification';

const data = {
  appId: 22244,
  appToken: "aIEEK5gRNUTdV1dvt0to7f",
  title: "BABY ALARM",
  body: "BABY IS CRYING",
  dateSent: new Date().toLocaleString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true }),
};

try {
  await axios.post(url, data);
} catch(e) {
  console.log(e);
}

}


async function storeNotificationInDB() {
  const db = getFirestore(app);
  const docRef = await addDoc(collection(db, "notification"), {
    title: "BABY ALARM",
    body: "BABY IS CRYING",
    dateSent: new Date().toLocaleString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true }),
  });
  console.log("Document written with ID: ", docRef.id);
}

module.exports = uploadFile