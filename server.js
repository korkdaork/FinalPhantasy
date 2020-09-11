const express = require("express");
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
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.post("/api/user", (req, res) => {
  console.log(req.body)
  db.User.create({
    email: req.body.email,
    password: req.body.password
  })
    .then(() => {
      res.redirect(307, "/api/login");
    })
    .catch(err => {
      res.status(401).json(err);
    });
});

app.get("/login", (req, res) => {
  // If the user already has an account send them to the members page
  if (req.user) {
    res.redirect("/members");
  }
  res.sendFile(path.join(__dirname, "../src/Logins/index.js"));
});

app.post("/api/login", passport.authenticate("local"), (req, res) => {
  // Sending back a password, even a hashed password, isn't a good idea
  db.Stats.findAll({
    userId: req.user.id
  }).then(stats => {
    console.log(stats)
    // on log in, if no user, 
    if (!stats.id) {
      db.Stats.create({
        gil: 500,
        hp: 5,
        attack: 5,
        defense: 5,
        speed: 5,
        potion: 1,
        UserId: req.user.id
      }).then(results => {
        res.json({
          email: req.user.email,
          id: req.user.id,
          stats: results
        });
      });
    }
    else {
      res.json({
        email: req.user.email,
        id: req.user.id,
        stats: stats
      })
    }


  });
});
// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/FFProject");

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
