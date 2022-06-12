// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYVHIsXQIu5E9Pw3QmGYk_5GU4pnxTrPg",
  authDomain: "autobiography-writer.firebaseapp.com",
  projectId: "autobiography-writer",
  storageBucket: "autobiography-writer.appspot.com",
  messagingSenderId: "588338725941",
  appId: "1:588338725941:web:25bd2ebc7f11a02fe3dd7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;