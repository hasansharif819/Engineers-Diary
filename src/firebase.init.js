// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfSxK6hJnO13yn2R6Am73XsHPneMGkFyA",
  authDomain: "engineers-diary.firebaseapp.com",
  projectId: "engineers-diary",
  storageBucket: "engineers-diary.appspot.com",
  messagingSenderId: "724624887208",
  appId: "1:724624887208:web:201b59831bd06086ea219d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;