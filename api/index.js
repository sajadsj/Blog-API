const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');


mongoose.connect(
    process.env.MONGO_URL, {
}).then(console.log("Connected to mongoDB!")).catch((err) => console.log(err));



app.use("/", (req, res) => {
    console.log("hey this is main url");
});

app.listen("5000", () => {
    console.log("Backend is running...");
});