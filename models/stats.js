const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const statsSchema = new Schema({
    gil: Number,
    hp: Number,
    attack: Number,
    defense: Number,
    speed: Number,
    potion: Number,
    userId: Object
});



const Stats = mongoose.model("Stats", statsSchema);

module.exports = Stats;