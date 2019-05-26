import firebase from "firebase/app";
import "firebase/database";

const config = {
  apiKey: "AIzaSyAX93ua_7PjfOlKcjgv3oTksxmakxFT-tU",
  authDomain: "patientsoileralert.firebaseapp.com",
  databaseURL: "https://patientsoileralert.firebaseio.com",
  projectId: "patientsoileralert",
  storageBucket: "patientsoileralert.appspot.com",
  messagingSenderId: "195758614444"
};
const firebaseApp = firebase.initializeApp(config);

export const db = firebaseApp.database();
