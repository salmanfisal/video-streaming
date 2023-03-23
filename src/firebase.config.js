// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import  "firebase/compat/firestore";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import "firebase/compat/auth";
import "firebase/compat/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFzYvtxpE11qXxQkdnn0tVLLOcXtUhRy8",
  authDomain: "disney-plus-5f223.firebaseapp.com",
  databaseURL: "https://disney-plus-5f223-default-rtdb.firebaseio.com",
  projectId: "disney-plus-5f223",
  storageBucket: "disney-plus-5f223.appspot.com",
  messagingSenderId: "191575014927",
  appId: "1:191575014927:web:ebe5758a8fd18e770d2d7a"
};

// Initialize Firebase
const App = firebase.initializeApp(firebaseConfig);
const auth = getAuth(App);
const db = App.firestore();
const provider = new GoogleAuthProvider();
const storage = firebase.storage();
export {auth,provider,storage}
export default db;
