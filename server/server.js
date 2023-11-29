import express from "express";
import admin from "firebase-admin";
import { createRequire } from "module";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const require = createRequire(import.meta.url);
const credential = require("../key.json");
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
 
app.use(cors());

admin.initializeApp({
    credential: admin.credential.cert(credential),
});

const db = admin.firestore();

const authenticate = async (req, res, next) => {
    const idToken = req.headers.authorization;
    app.use(authenticate);
    try {
        const decodedToken = await admin.auth().verifyIdToken(idToken);
        req.user = decodedToken;
        next();
    } catch (error) {
        console.error("Error authenticating user:", error);
        res.status(401).json({ error: "Unauthorized" });
    }
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/Assets', express.static('../src/Assets'))

app.options("/create", cors());
app.post("/create", async (req, res) => {
    try {
        console.log(req.body);
        const userJson = {
            username: req.body.username,
            email: req.body.email,
        };
        const response = await db.collection("user").add(userJson);

        res.status(201).json({ message: "User data saved successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.get("/user-profile", authenticate, async (req, res) => {
    try {
        const userId = req.user.uid;

        const userSnapshot = await db.collection("user").doc(userId).get();
        const userData = userSnapshot.data();

        if (userData) {
            res.status(200).json(userData);
        } else {
            res.status(404).json({ error: "User data not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});


app.get("/check-email", async (req, res) => {
    const email = req.query.email;

    const snapshot = await db
        .collection("user")
        .where("email", "==", email)
        .get();

    if (snapshot.empty) {
        res.json({ exists: false });
    } else {
        res.json({ exists: true });
    }
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
