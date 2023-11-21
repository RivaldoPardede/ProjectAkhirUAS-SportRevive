import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCCfyLeKdRQTjRnZ3LPy-zuXHPmRZfN_xI",
    authDomain: "sportrevive.firebaseapp.com",
    projectId: "sportrevive",
    storageBucket: "sportrevive.appspot.com",
    messagingSenderId: "595049452262",
    appId: "1:595049452262:web:3e345de3a3916d09536127",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en';
const provider = new GoogleAuthProvider();