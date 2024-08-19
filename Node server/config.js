const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs } =  require('firebase/firestore/lite');
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration

const firebaseConfig = {
    apiKey: "AIzaSyAdZndySyIlRRQfav8Mfun-7-GEsYcHQyc",
    authDomain: "babycry-dc598.firebaseapp.com",
    projectId: "babycry-dc598",
    storageBucket: "babycry-dc598.appspot.com",
    messagingSenderId: "773294949742",
    appId: "1:773294949742:web:fd84122c9f7c65b4ec2d7f",
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

module.exports = {app, db};