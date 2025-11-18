import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB_eBLnE9anZuOfgrkfz3lSUbIXRomyTWU",
    authDomain: "datacaronte.firebaseapp.com",
    projectId: "datacaronte",
    storageBucket: "datacaronte.firebasestorage.app",
    messagingSenderId: "443360531915",
    appId: "1:443360531915:web:5b3178927d7ddd3f6d524e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const dc = getFirestore(app);

