// firebase.js
import firebase from "firebase/compat/app";
import 'firebase/compat/auth'; // Import auth module if you're using Firebase Auth
import 'firebase/compat/firestore'; // Import firestore module if you're using Firestore

// Initialize Firebase
const firebaseConfig = {
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyCN4_DK9MFlVANhEq3yTRBt1QYLMCPSY2I",
    authDomain: "challenge-6467e.firebaseapp.com",
    projectId: "challenge-6467e",
    storageBucket: "challenge-6467e.appspot.com",
    messagingSenderId: "494181583757",
    appId: "1:494181583757:web:e5556c462578e5e3d30bc4",
    measurementId: "G-G2S80ZQXXS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();


export default firebaseApp;

export {auth , db};

