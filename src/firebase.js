// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCN4_DK9MFlVANhEq3yTRBt1QYLMCPSY2I",
    authDomain: "challenge-6467e.firebaseapp.com",
    projectId: "challenge-6467e",
    storageBucket: "challenge-6467e.appspot.com",
    messagingSenderId: "494181583757",
    appId: "1:494181583757:web:e5556c462578e5e3d30bc4",
    measurementId: "G-G2S80ZQXXS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();


export {db , auth};