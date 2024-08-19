const axios = require('axios');
const { getFirestore, addDoc, collection} =  require('firebase/firestore/lite');
const { app } = require('./config.js');


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
  
storeNotificationInDB();
  