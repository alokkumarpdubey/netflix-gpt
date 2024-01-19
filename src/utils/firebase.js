// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKe4FtCC_SWIS7TWeByHC1P6b94T_CNlY",
  authDomain: "netflixgpt-ae585.firebaseapp.com",
  projectId: "netflixgpt-ae585",
  storageBucket: "netflixgpt-ae585.appspot.com",
  messagingSenderId: "344027778287",
  appId: "1:344027778287:web:53d4a896c91f576bdc5f1a",
  measurementId: "G-8C2FCN1CCX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();