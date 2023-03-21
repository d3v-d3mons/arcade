import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $nickname: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      nickname: $nickname
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const LOGIN = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const BEGIN_CREATE = gql`
mutation beginCreate($partyName: String!, $gameType: String!, $course: String!) {
  beginCreate(partyName: $partyName, gameType: $gameType, course: $course) {
    partyName
    gameType
    course
  }
}
`;

export const GAMES = gql`
mutation games($partyName: String!) {
  games(partyName: $partyName) {
    partyName
    gameType
    course
    players {
      name
    }
  }
}
`;

export const ADD_PLAYER = gql`
mutation addPlayers($partyName: String!, $name: String!, $score: Int!) {
  addPlayers(partyName: $partyName, name: $name, score: $score) {
    players {
      score
    }
  }
}
`;

export const ADD_SCORE_ONE = gql`
mutation addScore1($name: String!, $score: String!) {
  addScore1(name: $name, score: $score) {
    name
    holeOne
  }
}
`;

export const ADD_SCORE_TWO = gql`
mutation addScore2($name: String!, $score: String!) {
  addScore2(name: $name, score: $score) {
    name
    holeTwo
  }
}
`;

export const ADD_SCORE_THREE = gql`
mutation addScore3($name: String!, $score: String!) {
  addScore3(name: $name, score: $score) {
    name
    holeThree
  }
}
`;

export const ADD_SCORE_FOUR = gql`
mutation addScore4($name: String!, $score: String!) {
  addScore4(name: $name, score: $score) {
    name
    holeFour
  }
}
`;

export const ADD_SCORE_FIVE = gql`
mutation addScore5($name: String!, $score: String!) {
  addScore5(name: $name, score: $score) {
    name
    holeFive
  }
}
`;

export const ADD_SCORE_SIX = gql`
mutation addScore6($name: String!, $score: String!) {
  addScore6(name: $name, score: $score) {
    name
    holeSix
  }
}
`;

export const ADD_SCORE_SEVEN = gql`
mutation addScore7($name: String!, $score: String!) {
  addScore7(name: $name, score: $score) {
    name
    holeSeven
  }
}
`;

export const ADD_SCORE_EIGHT = gql`
mutation addScore8($name: String!, $score: String!) {
  addScore8(name: $name, score: $score) {
    name
    holeEight
  }
}
`;

export const ADD_SCORE_NINE = gql`
mutation addScore9($name: String!, $score: String!) {
  addScore9(name: $name, score: $score) {
    name
    holeNine
  }
}
`;

export const ADD_SCORE_TEN = gql`
mutation addScore10($name: String!, $score: String!) {
  addScore10(name: $name, score: $score) {
    name
    holeTen
  }
}
`;

export const ADD_SCORE_ELEVEN = gql`
mutation addScore11($name: String!, $score: String!) {
  addScore11(name: $name, score: $score) {
    name
    holeEleven
  }
}
`;

export const ADD_SCORE_TWELVE = gql`
mutation addScore12($name: String!, $score: String!) {
  addScore12(name: $name, score: $score) {
    name
    holeTwelve
  }
}
`;

export const ADD_SCORE_THIRTEEN = gql`
mutation addScore13($name: String!, $score: String!) {
  addScore13(name: $name, score: $score) {
    name
    holeThirteen
  }
}
`;

export const ADD_SCORE_FOURTEEN = gql`
mutation addScore14($name: String!, $score: String!) {
  addScore14(name: $name, score: $score) {
    name
    holeFourteen
  }
}
`;

export const ADD_SCORE_FIFTEEN = gql`
mutation addScore15($name: String!, $score: String!) {
  addScore15(name: $name, score: $score) {
    name
    holeFifteen
  }
}
`;

export const ADD_SCORE_SIXTEEN = gql`
mutation addScore16($name: String!, $score: String!) {
  addScore16(name: $name, score: $score) {
    name
    holeSixteen
  }
}
`;

export const ADD_SCORE_SEVENTEEN = gql`
mutation addScore17($name: String!, $score: String!) {
  addScore17(name: $name, score: $score) {
    name
    holeSeventeen
  }
}
`;

export const ADD_SCORE_EIGHTEEN = gql`
mutation addScore18($name: String!, $score: String!) {
  addScore18(name: $name, score: $score) {
    name
    holeEighteen
  }
}
`;

