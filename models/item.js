const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemsSchema = new Schema({
    name: {
        type: String
    },
    hp: Number,
    attack: Number,
    defense: Number,
    speed: Number,
    Category: Number,
});

const Item = mongoose.model("Item", itemsSchema);

module.exports = Item;