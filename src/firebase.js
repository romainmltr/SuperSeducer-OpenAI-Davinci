// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB4LIGQTDLXgo4KzNwMVPmKJuTXjqN-ofI",
    authDomain: "speakai-3457f.firebaseapp.com",
    projectId: "speakai-3457f",
    storageBucket: "speakai-3457f.appspot.com",
    messagingSenderId: "858881899450",
    appId: "1:858881899450:web:1a72a9af3650ab3c687b83",
    measurementId: "G-VFRJE7CS4F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);