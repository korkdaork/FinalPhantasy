const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function (req, res) {
    db.Book
      .find(req.query)//query is like route for search
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Book
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Book
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Book
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Book
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};


var express = require("express");
const db = require("../models");
var router = express.Router();

// Import the model (cat.js) to use its database functions.
var items = require("../models/items.js");

router.get("/", function (req, res) {
  res.render("signup");
});

router.get("/login", function (req, res) {
  res.render("login");
});

router.get("/members", function (req, res) {
  res.render("members");
});

router.get("/store", function (req, res) {
  db.Stats.findOne({ UserId: req.user.id }).then(stats => {
    res.render("store", { stats: stats.dataValues });
    console.log(stats.dataValues);
  });

  // res.render("store")
});

router.get("/stage1", function (req, res) {
  db.Stats.findOne({ UserId: req.user.id }).then(stats => {
    orc = {
      name: "orc",
      hp: 100,
      attack: 25,
      defense: 30,
      src: "../assets/orc.gif",
      quote: "yeet orc"
    };

    slime = {
      name: "slime",
      hp: 45,
      attack: 15,
      defense: 25,
      src: "../assets/slime.gif",
      quote: "yeet slime"
    };

    chocobo = {
      name: "chocobo",
      hp: 60,
      attack: 70,
      defense: 20,
      src: "../assets/chocobo.gif",
      quote: "yeet chocobo"
    };

    console.log(stats)

    monsters = [orc, slime, chocobo];

    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    console.log(getRandomInt(monsters.length));

    let randomInt = getRandomInt(monsters.length);

    console.log(randomInt);

    console.log(monsters[randomInt]);

    // document.getElementById("monster").src=monsters[randomInt].src;

    res.render("stage1", {
      stats: stats.dataValues,
      monster: monsters[randomInt],
      random: randomInt
    });
  });
});

router.get("/boss", function (req, res) {
  db.Stats.findOne({ UserId: req.user.id }).then(stats => {
    Seph = {
      name: "Sephiroth",
      hp: 210,
      attack: 120,
      defense: 80,
      src: "../assets/Sephiroth.gif",
      quote: "Run or Fight, the outcome is the same, your defeat!"
    };
    // Boss=[Seph];

    // Boss=[Sephiroth];

    res.render("boss", {
      stats: stats.dataValues,
      boss: Seph
    });

  });
});

// Export routes for server.js to use.
module.exports = router;
