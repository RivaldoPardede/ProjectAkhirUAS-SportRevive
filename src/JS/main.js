import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendEmailVerification,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCCfyLeKdRQTjRnZ3LPy-zuXHPmRZfN_xI",
    authDomain: "sportrevive.firebaseapp.com",
    projectId: "sportrevive",
    storageBucket: "sportrevive.appspot.com",
    messagingSenderId: "595049452262",
    appId: "1:595049452262:web:3e345de3a3916d09536127",
};
//OAuth2.0 Implementation
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = "en";
const provider = new GoogleAuthProvider();

const googleLogin = document.querySelector(".login-with-google-btn");
googleLogin.addEventListener("click", () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const user = result.user;
            console.log(user);
            window.location.href = "../html/AfterLogin.html";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
});

const register = document.querySelector(".btn-register");
register.addEventListener("click", async (event) => {
    event.preventDefault();

    const email = document.querySelector("#emailRegister").value;
    const password = document.querySelector("#passwordRegister").value;

    console.log(`Email: ${email}, Password: ${password}`);

    try {
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );

        const user = userCredential.user;
        console.log(user);

        await sendEmailVerification(user);

        alert("User Created Successfully. Email verification link sent!");
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Registration error:", errorCode, errorMessage);
    }
});

const login = document.querySelector(".btn-login");
login.addEventListener("click", async (event) => {
    event.preventDefault();

    const email = document.querySelector("#emailLogin").value;
    const password = document.querySelector("#passwordLogin").value;
    console.log(`Email: ${email}, Password: ${password}`);
    try {
        const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );

        if (userCredential.user.emailVerified) {
            alert("login successfully!");
            window.location.href = "../html/AfterLogin.html";
        } else {
            alert("Please verify your email first.");
        }
    } catch (error) {
        alert("Wrong email/password");
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Authentication error:", errorCode, errorMessage);
    }
});

const user = auth.currentUser;
const userData = {
    uid: user.uid,
    email: user.email,
    displayName: user.displayName,
    photoURL: user.photoURL,
    // tambahkan properti pengguna lainnya yang ingin kamu simpan
};

// Panggilan HTTP POST ke server backend
fetch("http://localhost:8080/saveUserData", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
})
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error("Error saving user data:", error);
    });
