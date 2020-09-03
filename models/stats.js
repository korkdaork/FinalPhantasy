const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const statsSchema = new Schema({
    gil: DataTypes.INTEGER,
    hp: DataTypes.INTEGER,
    attack: DataTypes.INTEGER,
    defense: DataTypes.INTEGER,
    speed: DataTypes.INTEGER,
    potion: DataTypes.INTEGER,
});

const Stats = mongoose.model("Stats", statsSchema);

module.exports = Stats;