import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

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
register.addEventListener("click", (event) => {
    event.preventDefault();

    const email = document.querySelector('[name="email"]').value;
    const password = document.querySelector('[name="password"]').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Send verification email
            sendEmailVerification(userCredential.user);

            // Redirect or show a message to inform the user to check their email for verification
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // Handle errors
        });
});

function sendEmailVerification(user) {
    sendEmailVerification(user)
        .then(() => {
            // Email sent successfully
            console.log("Verification email sent");
        })
        .catch((error) => {
            // Handle errors
            console.error("Error sending verification email", error);
        });
}

const login = document.querySelector(".btn-login");
login.addEventListener("click", async (event) => {
    // Prevent the default form submission
    event.preventDefault();

    // Get the email and password values from the input fields
    const email = document.querySelector('[name="email"]').value;
    const password = document.querySelector('[name="password"]').value;

    try {
        const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );
        const user = userCredential.user;

        // Check if the user's email is verified
        if (user.emailVerified) {
            // Email is verified, redirect to AfterLogin.html
            window.location.href = "../html/AfterLogin.html";
        } else {
            // Email is not verified, inform the user
            console.log(
                "Email not verified. Please check your email for a verification link."
            );
        }
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Authentication error:", errorCode, errorMessage);
    }
});
