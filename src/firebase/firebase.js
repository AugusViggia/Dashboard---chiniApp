// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTIEaRXRPyYyU8gJZxE30CNb-c68ysMtw",
  authDomain: "chini-dashboard.firebaseapp.com",
  projectId: "chini-dashboard",
  storageBucket: "chini-dashboard.appspot.com",
  messagingSenderId: "1040298815780",
  appId: "1:1040298815780:web:8f8148f70f7ef6cb7303b1",
  measurementId: "G-YJRDHD0W38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);