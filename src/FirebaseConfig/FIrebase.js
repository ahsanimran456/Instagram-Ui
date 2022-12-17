
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA4THl9lg7P1lzpCLMa6y85XZAPcKU2Xjw",
    authDomain: "instagram-1d4ac.firebaseapp.com",
    projectId: "instagram-1d4ac",
    storageBucket: "instagram-1d4ac.appspot.com",
    messagingSenderId: "643041671211",
    appId: "1:643041671211:web:6474fe267ba7bf5a08526e",
    measurementId: "G-WRYTG4D8T1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider_google = new GoogleAuthProvider();


export { provider_google, getAuth, signInWithPopup, GoogleAuthProvider,  onAuthStateChanged }