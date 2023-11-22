// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3pLZgwN9h_saZiEuuFnr3Rsr18n5fNFg",
  authDomain: "netflixgpt-5b33b.firebaseapp.com",
  projectId: "netflixgpt-5b33b",
  storageBucket: "netflixgpt-5b33b.appspot.com",
  messagingSenderId: "1054286590147",
  appId: "1:1054286590147:web:527bdd6dfddb453f393276",
  measurementId: "G-ZQD88RR306"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();