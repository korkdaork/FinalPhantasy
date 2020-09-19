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
    console.log(req.params)
    db.Stats
      .findOne({ userId: req.params.userId })
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
    // console.log(req.params.id)
    // console.log(req.body)
    db.Stats
      .findOneAndUpdate({ userId: req.params.userId }, req.body, { new: true, upsert: true })
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
            hp: 0,
            attack: 0,
            defense: 0,
            speed: 0,
            potion: 0,
            userId: user._id
          }
          )
          .then(() => {
            console.log( "here's the user", user)
            res.status(200).json(user);
            
            
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



