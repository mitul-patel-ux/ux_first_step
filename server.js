const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

// Put your NEW MongoDB Atlas connection string here temporarily
const MONGO_URI ="mongodb+srv://u25cs045_db_user:8dXu0gBL6srgcZo5@cluster0.9bthn9c.mongodb.net" ;

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
