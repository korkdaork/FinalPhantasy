const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAllItem: function (req, res) {
    db.Item
      .find(req.query)//query is like route for search
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findItemsByUserId: function (req, res) {
    db.Item
      .findOne({ userId: Object(req.params.id) })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createItem: function (req, res) {
    db.Item
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateItem: function (req, res) {
    db.Item
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  removeItem: function (req, res) {
    db.Item
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findAllStats: function (req, res) {
    db.Stats
      .find(req.query)//query is like route for search
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findStatsByUserId: function (req, res) {
    console.log(req.user)
    db.Stats
      .findOne({ userId: req.user._id })
      .then(dbModel => { console.log(dbModel); res.json(dbModel) })
      .catch(err => res.status(422).json(err));
  },

  createStats: function (req, res) {
    console.log("create stata");
    console.log(req.body);

    db.Stats

      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateStats: function (req, res) {
    console.log(req.params.id)
    console.log(req.body)
    db.Stats
      .findOneAndUpdate({ userId: req.user._id }, req.body, { new: true, upsert: true })
      .then(dbModel => { console.log(dbModel); res.json(dbModel) })
      .catch(err => res.status(422).json(err));
  },
  removeStats: function (req, res) {
    db.Stats
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findAllUser: function (req, res) {
    db.User
      .find(req.query)//query is like route for search
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createUser: function (req, res) {
    console.log("create user");
    db.User
      .create(req.body)
      .then((user) => {
        db.Stats
          .create({
            gil: 500,
            hp: 30,
            attack: 40,
            defense: 50,
            speed: 5,
            potion: 1,
            userId: user._id
          }
          )
          .then(() => {
            console.log(req.body, "here's the req")
            res.status(200).json({ message: "user created successfully" });
          })
          .catch(err => res.status(422).json(err));

      })
      .catch(err => {
        console.log("create user fail")
        res.status(422).json(err)
      });
  },
  updateUser: function (req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  removeUser: function (req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};



