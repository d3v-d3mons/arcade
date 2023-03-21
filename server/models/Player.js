const mongoose = require('mongoose');

const { Schema } =mongoose;

const playerSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    score: {
        type: Number,
        required: false,
        min: 0,
        trim: true,
    },
    holeOne: {
        type: Number,
        required: false,
        min: 0,
        trim: true,
    },
    holeTwo: {
        type: Number,
        required: false,
        min: 0,
        trim: true,
    },
    holeThree: {
        type: Number,
        required: false,
        min: 0,
        trim: true,
    },
    holeFour: {
        type: Number,
        required: false,
        min: 0,
        trim: true,
    },
    holeFive: {
        type: Number,
        required: false,
        min: 0,
        trim: true,
    },
    holeSix: {
        type: Number,
        required: false,
        min: 0,
        trim: true,
    },
    holeSeven: {
        type: Number,
        required: false,
        min: 0,
        trim: true,
    },
    holeEight: {
        type: Number,
        required: false,
        min: 0,
        trim: true,
    },
    holeNine: {
        type: Number,
        required: false,
        min: 0,
        trim: true,
    },
    holeTen: {
        type: Number,
        required: false,
        min: 0,
        trim: true,
    },
    holeEleven: {
        type: Number,
        required: false,
        min: 0,
        trim: true,
    },
    holeTwelve: {
        type: Number,
        required: false,
        min: 0,
        trim: true,
    },
    holeThirteen: {
        type: Number,
        required: false,
        min: 0,
        trim: true,
    },
    holeFourteen: {
        type: Number,
        required: false,
        min: 0,
        trim: true,
    },
    holeFifteen: {
        type: Number,
        required: false,
        min: 0,
        trim: true,
    },
    holeSixteen: {
        type: Number,
        required: false,
        min: 0,
        trim: true,
    },
    holeSeventeen: {
        type: Number,
        required: false,
        min: 0,
        trim: true,
    },
    holeEighteen: {
        type: Number,
        required: false,
        min: 0,
        trim: true,
    }
});

const Player = mongoose.model('Player', playerSchema);
module.exports = Player;