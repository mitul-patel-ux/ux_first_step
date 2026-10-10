const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

// Put your NEW MongoDB Atlas connection string here temporarily
const MONGO_URI =preocess.env.MONGO_URI;

app.use(express.static("public"));
app.use(express.json());

// Connect to MongoDB
mongoose.connect(MONGO_URI)
    .then(() => {
        console.log("Connected to MongoDB Atlas");
    })
    .catch((error) => {
        console.error("MongoDB connection error:", error.message);
    });

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
