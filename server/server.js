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


app.get("/Exercise/:gender/:exerciseType", (req,res) => {
    const gender = req.params.gender;
    const exerciseType = req.params.exerciseType;

    if (gender == "man") {
        if (exerciseType == "abs") {
            const video = [
                "../Assets/Media/Abs/Man/airback.mp4",
                "../Assets/Media/Abs/Man/boll_sit_up.mp4",
                "../Assets/Media/Abs/Man/hell_kick.mp4",
                "../Assets/Media/Abs/Man/lying_down_leg_raises.mp4",
                "../Assets/Media/Abs/Man/mountain_climbers.mp4",
                "../Assets/Media/Abs/Man/plank_jump_ins.mp4",
                "../Assets/Media/Abs/Man/plank_one_leg_raise.mp4",
                "../Assets/Media/Abs/Man/plank_with_arm_raise.mp4",
                "../Assets/Media/Abs/Man/reverse_hip_raise.mp4",
                "../Assets/Media/Abs/Man/seated_leg_pull_ins.mp4",
                "../Assets/Media/Abs/Man/spider_push_up.mp4",
            ];
            const nama = [
                "airback",
                "boll sit up",
                "hell kick",
                "lying down leg raises",
                "mountain climbers",
                "plank jump ins",
                "plank one leg raise",
                "plank with arm raise",
                "reverse hip raise",
                "seated leg pull ins",
                "spider push up",
            ];
            const repetisi = [
                "2x10",
                "2x10",
                "2x10",
                "2x10",
                "2x10",
                "2x10",
                "2x10",
                "2x10",
                "2x10",
                "2x10",
                "2x10",
            ];
            res.json({ video, nama, repetisi });

        }
    } else {
        res.status(404).json({ error: "Not Found" });
    }
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
