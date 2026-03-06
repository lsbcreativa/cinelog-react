// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestor'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUvouTg7xhClB2b-1z7PF_KPAylbgk48M",
  authDomain: "cinelog-react.firebaseapp.com",
  projectId: "cinelog-react",
  storageBucket: "cinelog-react.firebasestorage.app",
  messagingSenderId: "992678619693",
  appId: "1:992678619693:web:30f346f293691a9abfa6a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore (app)