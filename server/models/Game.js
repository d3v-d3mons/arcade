const mongoose = require('mongoose');

const { Schema } = mongoose;

const gameSchema = new Schema({
    partyName: {
        type: String,
        required: true,
        trim: true,
    },
    gameType: {
        type: String,
        required: true,
        trim: true,
    },
    course: {
        type: String,
        required: true,
        trim: true,
    },
    distance: {
        type: Number,
        required: false,
        min: 0,
    },
    players: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Player'
        }
    ]
});

const Game = mongoose.model('Game', gameSchema);
module.exports = Game;