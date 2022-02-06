// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAL4NW9J0qQRtNNesl5ufwZRy8PTriP9Ms",
  authDomain: "earn-and-learn-2fa67.firebaseapp.com",
  projectId: "earn-and-learn-2fa67",
  storageBucket: "earn-and-learn-2fa67.appspot.com",
  messagingSenderId: "71440673359",
  appId: "1:71440673359:web:8f2da559660504b0eb583a",
  measurementId: "G-6HBM33MY94",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export { app, analytics };