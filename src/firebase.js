import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/analytics";
import "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyD-CWnqTLExhsqkk8oFISaIeRzEoMddY50",
  authDomain: "just-clock-it-5ac2b.firebaseapp.com",
  databaseURL: "https://just-clock-it-5ac2b.firebaseio.com",
  projectId: "just-clock-it-5ac2b",
  storageBucket: "just-clock-it-5ac2b.appspot.com",
  messagingSenderId: "975103539930",
  appId: "1:975103539930:web:5487f90be91ac384c6c3e3",
  measurementId: "G-X4LDLWHFX6",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const analytics = firebase.analytics();
const auth = firebase.auth();
const firestore = firebase.firestore();

export default firebase;
export { auth, analytics, firestore };
