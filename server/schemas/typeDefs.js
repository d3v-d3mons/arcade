const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        firstName: String
        lastName: String
        email: String
        nickname: String
        game: [Game]
    }

    type Game {
        _id: ID
        partyName: String
        gameType: String
        course: String
        players: [Player]
    }

    type Player {
        _id: ID
        name: String
        score: Int
        holeOne: Int
        holeTwo: Int
        holeThree: Int
        holeFour: Int
        holeFive: Int
        holeSix: Int
        holeSeven: Int
        holeEight: Int
        holeNine: Int
        holeTen: Int
        holeEleven: Int
        holeTwelve: Int
        holeThirteen: Int
        holeFourteen: Int
        holeFifteen: Int
        holeSixteen: Int
        holeSeventeen: Int
        holeEighteen: Int
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        users: User
        game: Game
        getPlayers(_id: ID!): Player
        getGames(partyName: String!): Game
    }

    type Mutation {
        addUser(firstName: String!, lastName: String!, nickname: String!, email: String!, password: String!): Auth
        updateUser(firstName: String!, lastName: String!, nickname: String!, email: String!, password: String!): User
        login(email: String!, password: String!): Auth
        beginCreate(partyName: String!, gameType: String!, course: String!): Game
        addPlayers(partyName: String!, name: String!, score: Int!): Game
        updateGame(name: String!, handGrenades: Int!, mulligans: Int!, handicap: Int!): Game
        addScore1(name: String!, score: Int!): Player
        addScore2(name: String!, score: String!): Player
        addScore3(name: String!, score: String!): Player
        addScore4(name: String!, score: String!): Player
        addScore5(name: String!, score: String!): Player
        addScore6(name: String!, score: String!): Player
        addScore7(name: String!, score: String!): Player
        addScore8(name: String!, score: String!): Player
        addScore9(name: String!, score: String!): Player
        addScore10(name: String!, score: String!): Player
        addScore11(name: String!, score: String!): Player
        addScore12(name: String!, score: String!): Player
        addScore13(name: String!, score: String!): Player
        addScore14(name: String!, score: String!): Player
        addScore15(name: String!, score: String!): Player
        addScore16(name: String!, score: String!): Player
        addScore17(name: String!, score: String!): Player
        addScore18(name: String!, score: String!): Player
    }
`;

module.exports = typeDefs;