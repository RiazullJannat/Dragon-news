// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuoBjob4aYEP6urWcYPYreKO8mflIiFgw",
  authDomain: "dragon-news-5de3d.firebaseapp.com",
  projectId: "dragon-news-5de3d",
  storageBucket: "dragon-news-5de3d.firebasestorage.app",
  messagingSenderId: "730061528730",
  appId: "1:730061528730:web:0ed59dedcb457340c34923"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;