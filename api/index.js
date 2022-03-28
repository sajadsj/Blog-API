const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const postsRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");

app.use(express.json());
mongoose.connect(
    process.env.MONGO_URL, {
})
    .then(console.log("Connected to mongoDB!"))
    .catch((err) => console.log(err));


app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/posts", postsRoute);
app.use("/api/categories", categoryRoute);

app.listen("5000", () => {
    console.log("Backend is running...");
});

//Test home
app.use("/", (req, res) => {
    console.log("hey this is main url");
});