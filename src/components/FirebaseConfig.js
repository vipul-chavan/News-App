// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4xz97_K_KM7hQtT-wapnfFPpbCgYSqhE",
  authDomain: "snapfeed-a36f8.firebaseapp.com",
  projectId: "snapfeed-a36f8",
  storageBucket: "snapfeed-a36f8.appspot.com",
  messagingSenderId: "902435553057",
  appId: "1:902435553057:web:311c1ae091c1ee20a50860",
  measurementId: "G-FC2YKW4SYD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const database = getAuth(app)