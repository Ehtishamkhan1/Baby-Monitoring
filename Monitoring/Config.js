import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAdZndySyIlRRQfav8Mfun-7-GEsYcHQyc",
  authDomain: "babycry-dc598.firebaseapp.com",
  projectId: "babycry-dc598",
  storageBucket: "babycry-dc598.appspot.com",
  messagingSenderId: "773294949742",
  appId: "1:773294949742:web:fd84122c9f7c65b4ec2d7f",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
