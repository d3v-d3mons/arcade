import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
        {
            user {
                firstName
                lastName
                nickname
            }
        }
`;

export const QUERY_PLAYERS = gql`
    query getPlayers($_id: ID!) {
        getPlayers(_id: $_id) {
            _id
            name
            score
        }
    }
`;

export const QUERY_GAMES = gql`
    query getGames($partyName: String!) {
        getGames(partyName: $partyName) {
            _id
            partyName
            gameType
            course
            players {
                name
                score
                holeOne 
                holeTwo
                holeThree
                holeFour
                holeFive
                holeSix
                holeSeven
                holeEight
                holeNine
                holeTen
                holeEleven
                holeTwelve
                holeThirteen
                holeFourteen
                holeFifteen
                holeSixteen
                holeSeventeen
                holeEighteen
            }
        }
    }
`;

export const GAME = gql`
 query game($_id: ID!) {
    game(_id: $_id) {
        _id
        partyName
        gameType
        course
        players {
            name
            score
        }
    }
 }
`;

export const MY_GAME = gql`
 {
    game {
        partyName
        gameType
        course
        players {
            name
            score
            holeOne
            holeTwo
            holeThree
            holeFour
            holeFive
            holeSix
            holeSeven
            holeEight
            holeNine
            holeTen
            holeEleven
            holeTwelve
            holeThirteen
            holeFourteen
            holeFifteen
            holeSixteen
            holeSeventeen
            holeEighteen
        }
    }
 }
`;
