const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemsSchema = new Schema({
    name: DataTypes.STRING,
    hp: DataTypes.INTEGER,
    attack: DataTypes.INTEGER,
    defense: DataTypes.INTEGER,
    speed: DataTypes.INTEGER,
    Category: DataTypes.STRING,
});

const Item = mongoose.model("Item", itemsSchema);

module.exports = Item;