// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAs2fbMayKzqaY6N7cP60EqQ9tbS5US-Q",
  authDomain: "netflix-gpt-177.firebaseapp.com",
  projectId: "netflix-gpt-177",
  storageBucket: "netflix-gpt-177.appspot.com",
  messagingSenderId: "282695395801",
  appId: "1:282695395801:web:cfad769c760bfeef0e11c8",
  measurementId: "G-3QYSC2WRE2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth();