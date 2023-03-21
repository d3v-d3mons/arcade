const { AuthenticationError } = require('apollo-server-express');
const { User, Player, Game } = require('../models');
const { populate } = require('../models/User');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async (parent, args, context) => {
            if (context.user) {
                return await User.find();
            }
            throw new AuthenticationError('You must be logged in to see high scores');
        },
        getPlayers: async (parent, { _id }) => {
            return Player.findById(_id);
        },
        getGames: async (parent, {partyName} ) => {
            const params = {};

            if(partyName) {
                params.partyName = partyName;
            }
            
            const game = await Game.findOne(params).populate('players');
            return game;
        },
        game: async (parent, { _id }, context) => {
            if(context.user) {
                const game = await User.findById(context.user._id).populate('game')
                console.log(game.game._id);
                return game.game;
            }
            throw new AuthenticationError("Must be logged in");
        },
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        updateUser: async (parent, args, context) => {
            if (context.user) {
                return await User.findByIdAndUpdate(context.user._id, args, { new: true });
            }
            throw new AuthenticationError('You must be logged in to complete this action');
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('Incorrect username or password');
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError('Incorrect username or password');
            }
            const token = signToken(user);
            return { token, user };
        },
        beginCreate: async (parent, { partyName, course, gameType }, context) => {
            // if(context.user) {
            const game = await Game.create({ partyName, course, gameType });
            console.log(game);
            const user = await User.findByIdAndUpdate(context.user._id, { $push: { game: game } })
            console.log(user);
            return game; 
            // }
            // throw new AuthenticationError("must be logged in");
        },
        addPlayers: async (parent, { partyName, name, score }) => {
            const player = await Player.create({ name, score });
            console.log(player);
            const id = player._id;
            const game = await Game.findOneAndUpdate(
                { partyName: partyName },
                { $push: { players: player }},
            );
            return player;
        },
        updateGame: async (parent, id, args) => {
            const player = await Game.findOneAndUpdate(id, args, { new: true });
            console.log(player);
            return player;
        },
        addScore1: async (parent,{ name, score }) => {
            const player = await Player.findOneAndUpdate(
                { name: name },
                { $set: { holeOne: score }}
            );
            return player;
        },
        addScore2: async (parent,{ name, score }) => {
            const player = await Player.findOneAndUpdate(
                { name: name },
                { $set: { holeTwo: score }}
            );
            return player;
        },
        addScore3: async (parent,{ name, score }) => {
            const player = await Player.findOneAndUpdate(
                { name: name },
                { $set: { holeThree: score }}
            );
            return player;
        },
        addScore4: async (parent,{ name, score }) => {
            const player = await Player.findOneAndUpdate(
                { name: name },
                { $set: { holeFour: score }}
            );
            return player;
        },
        addScore5: async (parent,{ name, score }) => {
            const player = await Player.findOneAndUpdate(
                { name: name },
                { $set: { holeFive: score }}
            );
            return player;
        },
        addScore6: async (parent,{ name, score }) => {
            const player = await Player.findOneAndUpdate(
                { name: name },
                { $set: { holeSix: score }}
            );
            return player;
        },
        addScore7: async (parent,{ name, score }) => {
            const player = await Player.findOneAndUpdate(
                { name: name },
                { $set: { holeSeven: score }}
            );
            return player;
        },
        addScore8: async (parent,{ name, score }) => {
            const player = await Player.findOneAndUpdate(
                { name: name },
                { $set: { holeEight: score }}
            );
            return player;
        },
        addScore9: async (parent,{ name, score }) => {
            const player = await Player.findOneAndUpdate(
                { name: name },
                { $set: { holeNine: score }}
            );
            return player;
        },
        addScore10: async (parent,{ name, score }) => {
            const player = await Player.findOneAndUpdate(
                { name: name },
                { $set: { holeTen: score }}
            );
            return player;
        },
        addScore11: async (parent,{ name, score }) => {
            const player = await Player.findOneAndUpdate(
                { name: name },
                { $set: { holeEleven: score }}
            );
            return player;
        },
        addScore12: async (parent,{ name, score }) => {
            const player = await Player.findOneAndUpdate(
                { name: name },
                { $set: { holeTwelve: score }}
            );
            return player;
        },
        addScore13: async (parent,{ name, score }) => {
            const player = await Player.findOneAndUpdate(
                { name: name },
                { $set: { holeThirteen: score }}
            );
            return player;
        },
        addScore14: async (parent,{ name, score }) => {
            const player = await Player.findOneAndUpdate(
                { name: name },
                { $set: { holeFourteen: score }}
            );
            return player;
        },
        addScore15: async (parent,{ name, score }) => {
            const player = await Player.findOneAndUpdate(
                { name: name },
                { $set: { holeFifteen: score }}
            );
            return player;
        },
        addScore16: async (parent,{ name, score }) => {
            const player = await Player.findOneAndUpdate(
                { name: name },
                { $set: { holeSixteen: score }}
            );
            return player;
        },
        addScore17: async (parent,{ name, score }) => {
            const player = await Player.findOneAndUpdate(
                { name: name },
                { $set: { holeSeventeen: score }}
            );
            return player;
        },
        addScore18: async (parent,{ name, score }) => {
            const player = await Player.findOneAndUpdate(
                { name: name },
                { $set: { holeEighteen: score }}
            );
            return player;
        },
    },
};

module.exports = resolvers;