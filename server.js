const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const path = require("path");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();
const db = require("./models");
const passport = require("./config/passport");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

app.use(session({
  secret: "keyboard cat", resave: true, saveUninitialized: true,
}))

app.use(passport.initialize());

app.use(passport.session());

app.use(routes);

// app.post('/login',
//   passport.authenticate('local', {
//     successRedirect: '/',
//     failureRedirect: '/login',
//     failureFlash: true
//   })
// );

// app.get("*", (req, res) => { res.sendFile(path.join(__dirname, "./client/build/index.html")); });

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/FFProject").then(() => {
  console.log("Connected to MongoDB")
});

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});