import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDEuc0Yw2yMjBTCDncqO4jmOE2dVjMW1Io",
  authDomain: "clone-fb90e.firebaseapp.com",
  databaseURL: "https://clone-fb90e.firebaseio.com",
  projectId: "clone-fb90e",
  storageBucket: "clone-fb90e.appspot.com",
  messagingSenderId: "1096963285775",
  appId: "1:1096963285775:web:ee14d4f7ccefcc3389947a",
  measurementId: "G-9K5TXKTGP3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };