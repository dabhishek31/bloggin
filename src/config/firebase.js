// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvHNuP-HzHFJPBvyX1Lwh1-mIIWjNVOvs",
  authDomain: "abhishek-das-5ecac.firebaseapp.com",
  projectId: "abhishek-das-5ecac",
  storageBucket: "abhishek-das-5ecac.appspot.com",
  messagingSenderId: "897199648389",
  appId: "1:897199648389:web:06b50ffb7f1b9279f903ec",
  measurementId: "G-J44LC886Z4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
