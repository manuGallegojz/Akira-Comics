import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBb3b-osSPOp1tZtIjR6Kh8uF_IbUmBqCg",
    authDomain: "akira-comics-b7934.firebaseapp.com",
    projectId: "akira-comics-b7934",
    storageBucket: "akira-comics-b7934.appspot.com",
    messagingSenderId: "919246877533",
    appId: "1:919246877533:web:41a385c9a5836689ec6eb4",
    measurementId: "G-J6PSF96HWW"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;