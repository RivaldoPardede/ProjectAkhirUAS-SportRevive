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

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = "en";
const provider = new GoogleAuthProvider();

const googleLoginButtons = document.querySelectorAll(".login-with-google-btn");

googleLoginButtons.forEach((button) => {
    button.addEventListener("click", async () => {
        const isRegisterButton = button.classList.contains("register-btn");

        try {
            const result = await signInWithPopup(auth, provider);
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const user = result.user;

            if (isRegisterButton) {
                const emailExists = await checkEmailExists(user.email);

                if (emailExists) {
                    alert("Email already exists. Please login.");
                    return;
                }

                await fetch("http://localhost:8080/create", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        username: user.displayName,
                        email: user.email,
                    }),
                });
            }

            window.location.href = "html/AfterLogin.html";
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Error:", errorCode, errorMessage);
        }
    });
});

async function checkEmailExists(email) {
    const response = await fetch(
        `http://localhost:8080/check-email?email=${email}`
    );
    const data = await response.json();
    return data.exists;
}

const register = document.querySelector(".btn-register");
if (register) {
    register.addEventListener("click", async (event) => {
        event.preventDefault();

        const username = document.querySelector("#usernameRegister").value;
        const email = document.querySelector("#emailRegister").value;

        console.log(`Username: ${username}, Email: ${email}`);

        const emailExists = await checkEmailExists(email);
        if (emailExists) {
            alert("Email already exists. Please login.");
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email
            );

            const user = userCredential.user;
            console.log(user);

            await sendEmailVerification(user);

            fetch("http://localhost:8080/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, email }),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Success:", data);
                })
                .catch((error) => {
                    console.error("Error:", error);
                });

            alert("User Created Successfully. Email verification link sent!");
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Registration error:", errorCode, errorMessage);
        }
    });
}

const login = document.querySelector(".btn-login");
if (login) {
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
                window.location.href = "html/AfterLogin.html";
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
}

if (window.location.href.includes("AfterLogin.html")) {
    auth.onAuthStateChanged(async (user) => {
        if (user) {
            console.log("User is logged in:", user);

            const photoElement = document.querySelector(".profile-photo");
            if (user.photoURL) {
                photoElement.style.backgroundImage = `url(${user.photoURL})`;
            } else {
                photoElement.style.backgroundImage =
                    "url(Assets/Media/defaultChar)";
            }
            const emailElement = document.querySelector(".profile-email");
            if (user.email) {
                emailElement.innerHTML = user.email;
            } else {
                console.error("User email not available");
            }

            const usernameElement = document.querySelector(".profile-username");

            if (user && user.displayName) {
                usernameElement.innerHTML = user.displayName;
            } else {
                console.error(
                    "Invalid response from server - no username data"
                );
            }
        } else {
            console.log("User is logged out");
        }
    });
}

const logoutButton = document.querySelector(".btn-logout");

if (logoutButton) {
    logoutButton.addEventListener("click", async () => {
        try {
            await auth.signOut();
            alert("Logout Successfully!")
            window.location.href = "../index.html";
        } catch (error) {
            console.error("Error during logout:", error);
        }
    });
}

