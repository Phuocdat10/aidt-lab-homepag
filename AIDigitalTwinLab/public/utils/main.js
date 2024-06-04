// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyAmYMsHRplO5sugAe153DU5ft__dr3x7sU",
authDomain: "aidt-8d20e.firebaseapp.com",
projectId: "aidt-8d20e",
storageBucket: "aidt-8d20e.appspot.com",
messagingSenderId: "657262440782",
appId: "1:657262440782:web:40f149b6b73800e4baae1f",
measurementId: "G-VMHSQDEJSS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
