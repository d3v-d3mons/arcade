const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        firstName: String
        lastName: String
        email: String
        nickname: String
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        users: User
    }

    type Mutation {
        addUser(firstName: String!, lastName: String!, nickname: String!, email: String!, password: String!): Auth
        updateUser(firstName: String, lastName: String, nickname: String!, email: String, password: String): User
        login(email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;