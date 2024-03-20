import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCTIEaRXRPyYyU8gJZxE30CNb-c68ysMtw",
  authDomain: "chini-dashboard.firebaseapp.com",
  projectId: "chini-dashboard",
  storageBucket: "chini-dashboard.appspot.com",
  messagingSenderId: "1040298815780",
  appId: "1:1040298815780:web:8f8148f70f7ef6cb7303b1",
  measurementId: "G-YJRDHD0W38"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app)

export {
  auth,
  provider,
  db
}