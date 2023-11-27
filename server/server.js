import express from "express";
import admin from "firebase-admin";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const credential = require("../key.json");

const app = express();

admin.initializeApp({
    credential: admin.credential.cert(credential),
});

const db = admin.firestore();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});

app.post("/saveUserData", async (req, res) => {
    try {
        const { uid, email, displayName, photoURL } = req.body;

        // Menyimpan data pengguna ke Firestore
        await db.collection("users").doc(uid).set({
            email: email,
            displayName: displayName,
            photoURL: photoURL,
            // tambahkan properti pengguna lainnya yang ingin kamu simpan
        });

        res.status(200).send("User data saved to Firestore successfully.");
    } catch (error) {
        console.error("Error saving user data to Firestore:", error);
        res.status(500).send("Internal Server Error");
    }
});
