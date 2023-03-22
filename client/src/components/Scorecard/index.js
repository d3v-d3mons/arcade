import React, { useState, useEffect } from "react";
import {
  Input,
  Box,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Center,
} from "@chakra-ui/react";
import { MY_GAME, QUERY_GAMES } from "../../utils/queries";
import { useLazyQuery, useMutation } from "@apollo/client";
import {
  ADD_SCORE_ONE,
  ADD_SCORE_TWO,
  ADD_SCORE_THREE,
  ADD_SCORE_FOUR,
  ADD_SCORE_FIVE,
  ADD_SCORE_SIX,
  ADD_SCORE_SEVEN,
  ADD_SCORE_EIGHT,
  ADD_SCORE_NINE,
  ADD_SCORE_TEN,
  ADD_SCORE_ELEVEN,
  ADD_SCORE_TWELVE,
  ADD_SCORE_THIRTEEN,
  ADD_SCORE_FOURTEEN,
  ADD_SCORE_FIFTEEN,
  ADD_SCORE_SIXTEEN,
  ADD_SCORE_SEVENTEEN,
  ADD_SCORE_EIGHTEEN,
} from "../../utils/mutations";
import { getFragmentDefinition } from "@apollo/client/utilities";
import "./index.css";

export default function Scorecard() {
  const [queryGames] = useLazyQuery(QUERY_GAMES);
  const [getMyGame] = useLazyQuery(MY_GAME);
  const [addScoreOne] = useMutation(ADD_SCORE_ONE);
  const [addScoreTwo] = useMutation(ADD_SCORE_TWO);
  const [addScoreThree] = useMutation(ADD_SCORE_THREE);
  const [addScoreFour] = useMutation(ADD_SCORE_FOUR);
  const [addScoreFive] = useMutation(ADD_SCORE_FIVE);
  const [addScoreSix] = useMutation(ADD_SCORE_SIX);
  const [addScoreSeven] = useMutation(ADD_SCORE_SEVEN);
  const [addScoreEight] = useMutation(ADD_SCORE_EIGHT);
  const [addScoreNine] = useMutation(ADD_SCORE_NINE);
  const [addScoreTen] = useMutation(ADD_SCORE_TEN);
  const [addScoreEleven] = useMutation(ADD_SCORE_ELEVEN);
  const [addScoreTwelve] = useMutation(ADD_SCORE_TWELVE);
  const [addScoreThirteen] = useMutation(ADD_SCORE_THIRTEEN);
  const [addScoreFourteen] = useMutation(ADD_SCORE_FOURTEEN);
  const [addScoreFifteen] = useMutation(ADD_SCORE_FIFTEEN);
  const [addScoreSixteen] = useMutation(ADD_SCORE_SIXTEEN);
  const [addScoreSeventeen] = useMutation(ADD_SCORE_SEVENTEEN);
  const [addScoreEighteen] = useMutation(ADD_SCORE_EIGHTEEN);
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);

  const players = [];
  const getGame = async () => {
    setLoading(true);
    try {
    const game = await queryGames({
      variables: {
        partyName: partyName,
      },
    });
    setCourse(game.data.getGames.course);
    setGameMode(game.data.getGames.gameType);
    setGamePartyName(game.data.getGames.partyName);
    for (let i = 0; i < game.data.getGames.players.length; i++) {
      players.push(game.data.getGames.players[i]);
    }

    if (players[0]) {
      setPlayer1(players[0].name);
      setPlayer1Score(players[0].holeOne);
      setPlayer1Score2(players[0].holeTwo);
      setPlayer1Score3(players[0].holeThree);
      setPlayer1Score4(players[0].holeFour);
      setPlayer1Score5(players[0].holeFive);
      setPlayer1Score6(players[0].holeSix);
      setPlayer1Score7(players[0].holeSeven);
      setPlayer1Score8(players[0].holeEight);
      setPlayer1Score9(players[0].holeNine);
      setPlayer1Score10(players[0].holeTen);
      setPlayer1Score11(players[0].holeEleven);
      setPlayer1Score12(players[0].holeTwelve);
      setPlayer1Score13(players[0].holeThirteen);
      setPlayer1Score14(players[0].holeFourteen);
      setPlayer1Score15(players[0].holeFifteen);
      setPlayer1Score16(players[0].holeSixteen);
      setPlayer1Score17(players[0].holeSeventeen);
      setPlayer1Score18(players[0].holeEighteen);
    }
    if (players[1]) {
      setPlayer2(players[1].name);
      setPlayer2Score(players[1].holeOne);
      setPlayer2Score2(players[1].holeTwo);
      setPlayer2Score3(players[1].holeThree);
      setPlayer2Score4(players[1].holeFour);
      setPlayer2Score5(players[1].holeFive);
      setPlayer2Score6(players[1].holeSix);
      setPlayer2Score7(players[1].holeSeven);
      setPlayer2Score8(players[1].holeEight);
      setPlayer2Score9(players[1].holeNine);
      setPlayer2Score10(players[1].holeTen);
      setPlayer2Score11(players[1].holeEleven);
      setPlayer2Score12(players[1].holeTwelve);
      setPlayer2Score13(players[1].holeThirteen);
      setPlayer2Score14(players[1].holeFourteen);
      setPlayer2Score15(players[1].holeFifteen);
      setPlayer2Score16(players[1].holeSixteen);
      setPlayer2Score17(players[1].holeSeventeen);
      setPlayer2Score18(players[1].holeEighteen);
    }
    if (players[2]) {
      setPlayer3(players[2].name);
      setPlayer3Score(players[2].holeOne);
      setPlayer3Score2(players[2].holeTwo);
      setPlayer3Score3(players[2].holeThree);
      setPlayer3Score4(players[2].holeFour);
      setPlayer3Score5(players[2].holeFive);
      setPlayer3Score6(players[2].holeSix);
      setPlayer3Score7(players[2].holeSeven);
      setPlayer3Score8(players[2].holeEight);
      setPlayer3Score9(players[2].holeNine);
      setPlayer3Score10(players[2].holeTen);
      setPlayer3Score11(players[2].holeEleven);
      setPlayer3Score12(players[2].holeTwelve);
      setPlayer3Score13(players[2].holeThirteen);
      setPlayer3Score14(players[2].holeFourteen);
      setPlayer3Score15(players[2].holeFifteen);
      setPlayer3Score16(players[2].holeSixteen);
      setPlayer3Score17(players[2].holeSeventeen);
      setPlayer3Score18(players[2].holeEighteen);
    }
    if (players[3]) {
      setPlayer4(players[3].name);
      setPlayer4Score(players[3].holeOne);
      setPlayer4Score2(players[3].holeTwo);
      setPlayer4Score3(players[3].holeThree);
      setPlayer4Score4(players[3].holeFour);
      setPlayer4Score5(players[3].holeFive);
      setPlayer4Score6(players[3].holeSix);
      setPlayer4Score7(players[3].holeSeven);
      setPlayer4Score8(players[3].holeEight);
      setPlayer4Score9(players[3].holeNine);
      setPlayer4Score10(players[3].holeTen);
      setPlayer4Score11(players[3].holeEleven);
      setPlayer4Score12(players[3].holeTwelve);
      setPlayer4Score13(players[3].holeThirteen);
      setPlayer4Score14(players[3].holeFourteen);
      setPlayer4Score15(players[3].holeFifteen);
      setPlayer4Score16(players[3].holeSixteen);
      setPlayer4Score17(players[3].holeSeventeen);
      setPlayer4Score18(players[3].holeEighteen);
    }
    setLoaded(true);
    setLoading(false);
  } catch (err) {
    setError(err);
  }
  };

  const [partyName, setPartyName] = useState("");
  const [course, setCourse] = useState("");
  const [gameMode, setGameMode] = useState("");
  const [gamePartyName, setGamePartyName] = useState("");
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [player3, setPlayer3] = useState("");
  const [player4, setPlayer4] = useState("");
  // HOLE ONE
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [player3Score, setPlayer3Score] = useState(0);
  const [player4Score, setPlayer4Score] = useState(0);
  // HOLE TWO
  const [player1Score2, setPlayer1Score2] = useState(0);
  const [player2Score2, setPlayer2Score2] = useState(0);
  const [player3Score2, setPlayer3Score2] = useState(0);
  const [player4Score2, setPlayer4Score2] = useState(0);
  // HOLE THREE
  const [player1Score3, setPlayer1Score3] = useState(0);
  const [player2Score3, setPlayer2Score3] = useState(0);
  const [player3Score3, setPlayer3Score3] = useState(0);
  const [player4Score3, setPlayer4Score3] = useState(0);
  // HOLE FOUR
  const [player1Score4, setPlayer1Score4] = useState(0);
  const [player2Score4, setPlayer2Score4] = useState(0);
  const [player3Score4, setPlayer3Score4] = useState(0);
  const [player4Score4, setPlayer4Score4] = useState(0);
  // HOLE FIVE
  const [player1Score5, setPlayer1Score5] = useState(0);
  const [player2Score5, setPlayer2Score5] = useState(0);
  const [player3Score5, setPlayer3Score5] = useState(0);
  const [player4Score5, setPlayer4Score5] = useState(0);
  // HOLE SIX
  const [player1Score6, setPlayer1Score6] = useState(0);
  const [player2Score6, setPlayer2Score6] = useState(0);
  const [player3Score6, setPlayer3Score6] = useState(0);
  const [player4Score6, setPlayer4Score6] = useState(0);
  // HOLE SEVEN
  const [player1Score7, setPlayer1Score7] = useState(0);
  const [player2Score7, setPlayer2Score7] = useState(0);
  const [player3Score7, setPlayer3Score7] = useState(0);
  const [player4Score7, setPlayer4Score7] = useState(0);
  // HOLE EIGHT
  const [player1Score8, setPlayer1Score8] = useState(0);
  const [player2Score8, setPlayer2Score8] = useState(0);
  const [player3Score8, setPlayer3Score8] = useState(0);
  const [player4Score8, setPlayer4Score8] = useState(0);
  // HOLE NINE
  const [player1Score9, setPlayer1Score9] = useState(0);
  const [player2Score9, setPlayer2Score9] = useState(0);
  const [player3Score9, setPlayer3Score9] = useState(0);
  const [player4Score9, setPlayer4Score9] = useState(0);
  // HOLE TEN
  const [player1Score10, setPlayer1Score10] = useState(0);
  const [player2Score10, setPlayer2Score10] = useState(0);
  const [player3Score10, setPlayer3Score10] = useState(0);
  const [player4Score10, setPlayer4Score10] = useState(0);
  // HOLE ELEVEN
  const [player1Score11, setPlayer1Score11] = useState(0);
  const [player2Score11, setPlayer2Score11] = useState(0);
  const [player3Score11, setPlayer3Score11] = useState(0);
  const [player4Score11, setPlayer4Score11] = useState(0);
  // HOLE TWELVE
  const [player1Score12, setPlayer1Score12] = useState(0);
  const [player2Score12, setPlayer2Score12] = useState(0);
  const [player3Score12, setPlayer3Score12] = useState(0);
  const [player4Score12, setPlayer4Score12] = useState(0);
  // HOLE THIRTEEN
  const [player1Score13, setPlayer1Score13] = useState(0);
  const [player2Score13, setPlayer2Score13] = useState(0);
  const [player3Score13, setPlayer3Score13] = useState(0);
  const [player4Score13, setPlayer4Score13] = useState(0);
  // HOLE FOURTEEN
  const [player1Score14, setPlayer1Score14] = useState(0);
  const [player2Score14, setPlayer2Score14] = useState(0);
  const [player3Score14, setPlayer3Score14] = useState(0);
  const [player4Score14, setPlayer4Score14] = useState(0);
  // HOLE FIFTEEN
  const [player1Score15, setPlayer1Score15] = useState(0);
  const [player2Score15, setPlayer2Score15] = useState(0);
  const [player3Score15, setPlayer3Score15] = useState(0);
  const [player4Score15, setPlayer4Score15] = useState(0);
  // HOLE SIXTEEN
  const [player1Score16, setPlayer1Score16] = useState(0);
  const [player2Score16, setPlayer2Score16] = useState(0);
  const [player3Score16, setPlayer3Score16] = useState(0);
  const [player4Score16, setPlayer4Score16] = useState(0);
  // HOLE SEVENTEEN
  const [player1Score17, setPlayer1Score17] = useState(0);
  const [player2Score17, setPlayer2Score17] = useState(0);
  const [player3Score17, setPlayer3Score17] = useState(0);
  const [player4Score17, setPlayer4Score17] = useState(0);
  // HOLE EIGHTEEEN
  const [player1Score18, setPlayer1Score18] = useState(0);
  const [player2Score18, setPlayer2Score18] = useState(0);
  const [player3Score18, setPlayer3Score18] = useState(0);
  const [player4Score18, setPlayer4Score18] = useState(0);
  // ADD HOLE ONE
  const addHoleOne = async () => {
    const name = player1;
    const score = player1Score;
    const playerOne = await addScoreOne({
      variables: {
        name: name,
        score: score,
      },
    });
    if (player2) {
      const name = player2;
      const score = player2Score;
      const playerTwo = await addScoreOne({
        variables: {
          name: name,
          score: score,
        },
      });
    }
    if (player3) {
      const name = player3;
      const score = player3Score;
      const playerThree = await addScoreOne({
        variables: {
          name: name,
          score: score,
        },
      });
    }
    if (player4) {
      const name = player4;
      const score = player4Score;
      const playerFour = await addScoreOne({
        variables: {
          name: name,
          score: score,
        },
      });
    }
  };

  // ADD HOLE TWO

  const addHoleTwo = async () => {
    const name = player1;
    const score = player1Score2;
    const playerOne = await addScoreTwo({
      variables: {
        name: name,
        score: score,
      },
    });
    if (player2) {
      const name = player2;
      const score = player2Score2;
      const playerTwo = await addScoreTwo({
        variables: {
          name: name,
          score: score,
        },
      });
    }
    if (player3) {
      const name = player3;
      const score = player3Score2;
      const playerThree = await addScoreTwo({
        variables: {
          name: name,
          score: score,
        },
      });
    }
    if (player4) {
      const name = player4;
      const score = player4Score2;
      const playerFour = await addScoreTwo({
        variables: {
          name: name,
          score: score,
        },
      });
    }
  };

  // ADD HOLE THREE

  const addHoleThree = async () => {
    const name = player1;
    const score = player1Score3;
    const playerOne = await addScoreThree({
      variables: {
        name: name,
        score: score,
      },
    });
    if (player2) {
      const name = player2;
      const score = player2Score3;
      const playerTwo = await addScoreThree({
        variables: {
          name: name,
          score: score,
        },
      });
    }
    if (player3) {
      const name = player3;
      const score = player3Score3;
      const playerThree = await addScoreThree({
        variables: {
          name: name,
          score: score,
        },
      });
    }
    if (player4) {
      const name = player4;
      const score = player4Score3;
      const playerFour = await addScoreThree({
        variables: {
          name: name,
          score: score,
        },
      });
    }
  };

  // ADD HOLE FOUR

  const addHoleFour = async () => {
    const name = player1;
    const score = player1Score4;
    const playerOne = await addScoreFour({
      variables: {
        name: name,
        score: score,
      },
    });
    if (player2) {
      const name = player2;
      const score = player2Score4;
      const playerTwo = await addScoreFour({
        variables: {
          name: name,
          score: score,
        },
      });
    }
    if (player3) {
      const name = player3;
      const score = player3Score4;
      const playerThree = await addScoreFour({
        variables: {
          name: name,
          score: score,
        },
      });
    }
    if (player4) {
      const name = player4;
      const score = player4Score4;
      const playerFour = await addScoreFour({
        variables: {
          name: name,
          score: score,
        },
      });
    }
  };

  // ADD HOLE FIVE

  const addHoleFive = async () => {
    const name = player1;
    const score = player1Score5;
    const playerOne = await addScoreFive({
      variables: {
        name: name,
        score: score,
      },
    });
    if (player2) {
      const name = player2;
      const score = player2Score5;
      const playerTwo = await addScoreFive({
        variables: {
          name: name,
          score: score,
        },
      });
    }
    if (player3) {
      const name = player3;
      const score = player3Score5;
      const playerThree = await addScoreFive({
        variables: {
          name: name,
          score: score,
        },
      });
    }
    if (player4) {
      const name = player4;
      const score = player4Score5;
      const playerFour = await addScoreFive({
        variables: {
          name: name,
          score: score,
        },
      });
    }
  };

  // ADD HOLE SIX

  const addHoleSix = async () => {
    const name = player1;
    const score = player1Score6;
    const playerOne = await addScoreSix({
      variables: {
        name: name,
        score: score,
      },
    });
    if (player2) {
      const name = player2;
      const score = player2Score6;
      const playerTwo = await addScoreSix({
        variables: {
          name: name,
          score: score,
        },
      });
    }
    if (player3) {
      const name = player3;
      const score = player3Score6;
      const playerThree = await addScoreSix({
        variables: {
          name: name,
          score: score,
        },
      });
    }
    if (player4) {
      const name = player4;
      const score = player4Score6;
      const playerFour = await addScoreSix({
        variables: {
          name: name,
          score: score,
        },
      });
    }
  };

  // ADD HOLE SEVEN

  const addHoleSeven = async () => {
    const name = player1;
    const score = player1Score7;
    const playerOne = await addScoreSeven({
      variables: {
        name: name,
        score: score,
      },
    });
    if (player2) {
      const name = player2;
      const score = player2Score7;
      const playerTwo = await addScoreSeven({
        variables: {
          name: name,
          score: score,
        },
      });
    }
    if (player3) {
      const name = player3;
      const score = player3Score7;
      const playerThree = await addScoreSeven({
        variables: {
          name: name,
          score: score,
        },
      });
    }
    if (player4) {
      const name = player4;
      const score = player4Score7;
      const playerFour = await addScoreSeven({
        variables: {
          name: name,
          score: score,
        },
      });
    }
  };

  // ADD HOLE EIGHT

  const addHoleEight = async () => {
    const name = player1;
    const score = player1Score8;
    const playerOne = await addScoreEight({
      variables: {
        name: name,
        score: score,
      },
    });
    if (player2) {
      const name = player2;
      const score = player2Score8;
      const playerTwo = await addScoreEight({
        variables: {
          name: name,
          score: score,
        },
      });
    }
    if (player3) {
      const name = player3;
      const score = player3Score8;
      const playerThree = await addScoreEight({
        variables: {
          name: name,
          score: score,
        },
      });
    }
    if (player4) {
      const name = player4;
      const score = player4Score8;
      const playerFour = await addScoreEight({
        variables: {
          name: name,
          score: score,
        },
      });
    }
  };

  // ADD HOLE NINE

  const addHoleNine = async () => {
    const name = player1;
    const score = player1Score9;
    const playerOne = await addScoreNine({
      variables: {
        name: name,
        score: score,
      },
    });
    if (player2) {
      const name = player2;
      const score = player2Score9;
      const playerTwo = await addScoreNine({
        variables: {
          name: name,
          score: score,
        },
      });
    }
    if (player3) {
      const name = player3;
      const score = player3Score9;
      const playerThree = await addScoreNine({
        variables: {
          name: name,
          score: score,
        },
      });
    }
    if (player4) {
      const name = player4;
      const score = player4Score9;
      const playerFour = await addScoreNine({
        variables: {
          name: name,
          score: score,
        },
      });
    }
  };

  // ADD HOLE TEN

  const addHoleTen = async () => {
    const name = player1;
    const score = player1Score10;
    const playerOne = await addScoreTen({
      variables: {
        name: name,
        score: score,
      },
    });
    if (player2) {
      const name = player2;
      const score = player2Score10;
      const playerTwo = await addScoreTen({
        variables: {
          name: name,
          score: score,
        },
      });
    }
    if (player3) {
      const name = player3;
      const score = player3Score10;
      const playerThree = await addScoreTen({
        variables: {
          name: name,
          score: score,
        },
      });
    }
    if (player4) {
      const name = player4;
      const score = player4Score10;
      const playerFour = await addScoreTen({
        variables: {
          name: name,
          score: score,
        },
      });
    }
  };

  // ADD HOLE ELEVEN

  const addHoleEleven = async () => {
    const name = player1;
    const score = player1Score11;
    const playerOne = await addScoreEleven({
      variables: {
        name: name,
        score: score,
      },
    });
    if (player2) {
      const name = player2;
      const score = player2Score11;
      const playerTwo = await addScoreEleven({
        variables: {
          name: name,
          score: score,
        },
      });
    }
    if (player3) {
      const name = player3;
      const score = player3Score11;
      const playerThree = await addScoreEleven({
        variables: {
          name: name,
          score: score,
        },
      });
    }
    if (player4) {
      const name = player4;
      const score = player4Score11;
      const playerFour = await addScoreEleven({
        variables: {
          name: name,
          score: score,
        },
      });
    }
  };

  // ADD HOLE TWELVE

  const addHoleTwelve = async () => {
    const name = player1;
    const score = player1Score12;
    const playerOne = await addScoreTwelve({
      variables: {
        name: name,
        score: score,
      },
    });
    if (player2) {
      const name = player2;
      const score = player2Score12;
      const playerTwo = await addScoreTwelve({
        variables: {
          name: name,
          score: score,
        },
      });
    }
    if (player3) {
      const name = player3;
      const score = player3Score12;
      const playerThree = await addScoreTwelve({
        variables: {
          name: name,
          score: score,
        },
      });
    }
    if (player4) {
      const name = player4;
      const score = player4Score12;
      const playerFour = await addScoreTwelve({
        variables: {
          name: name,
          score: score,
        },
      });
    }
  };

  // ADD HOLE THIRTEEN

  const addHoleThirteen = async () => {
    const name = player1;
    const score = player1Score13;
    const playerOne = await addScoreThirteen({
      variables: {
        name: name,
        score: score,
      },
    });
    if (player2) {
      const name = player2;
      const score = player2Score13;
      const playerTwo = await addScoreThirteen({
        variables: {
          name: name,
          score: score,
        },
      });
    }
    if (player3) {
      const name = player3;
      const score = player3Score13;
      const playerThree = await addScoreThirteen({
        variables: {
          name: name,
          score: score,
        },
      });
    }
    if (player4) {
      const name = player4;
      const score = player4Score13;
      const playerFour = await addScoreThirteen({
        variables: {
          name: name,
          score: score,
        },
      });
    }
  };

  // ADD HOLE FOURTEEN

  const addHoleFourteen = async () => {
    const name = player1;
    const score = player1Score14;
    const playerOne = await addScoreFourteen({
      variables: {
        name: name,
        score: score,
      },
    });
    if (player2) {
      const name = player2;
      const score = player2Score14;
      const playerTwo = await addScoreFourteen({
        variables: {
          name: name,
          score: score,
        },
      });
    }
    if (player3) {
      const name = player3;
      const score = player3Score14;
      const playerThree = await addScoreFourteen({
        variables: {
          name: name,
          score: score,
        },
      });
    }
    if (player4) {
      const name = player4;
      const score = player4Score14;
      const playerFour = await addScoreFourteen({
        variables: {
          name: name,
          score: score,
        },
      });
    }
  };

  // ADD HOLE FIFTEEN

  const addHoleFifteen = async () => {
    const name = player1;
    const score = player1Score15;
    const playerOne = await addScoreFifteen({
      variables: {
        name: name,
        score: score,
      },
    });
    if (player2) {
      const name = player2;
      const score = player2Score15;
      const playerTwo = await addScoreFifteen({
        variables: {
          name: name,
          score: score,
        },
      });
    }
    if (player3) {
      const name = player3;
      const score = player3Score15;
      const playerThree = await addScoreFifteen({
        variables: {
          name: name,
          score: score,
        },
      });
    }
    if (player4) {
      const name = player4;
      const score = player4Score15;
      const playerFour = await addScoreFifteen({
        variables: {
          name: name,
          score: score,
        },
      });
    }
  };

  // ADD HOLE SIXTEEN

  const addHoleSixteen = async () => {
    const name = player1;
    const score = player1Score16;
    const playerOne = await addScoreSixteen({
      variables: {
        name: name,
        score: score,
      },
    });
    if (player2) {
      const name = player2;
      const score = player2Score16;
      const playerTwo = await addScoreSixteen({
        variables: {
          name: name,
          score: score,
        },
      });
    }
    if (player3) {
      const name = player3;
      const score = player3Score16;
      const playerThree = await addScoreSixteen({
        variables: {
          name: name,
          score: score,
        },
      });
    }
    if (player4) {
      const name = player4;
      const score = player4Score16;
      const playerFour = await addScoreSixteen({
        variables: {
          name: name,
          score: score,
        },
      });
    }
  };

  // ADD HOLE SEVENTEEN

  const addHoleSeventeen = async () => {
    const name = player1;
    const score = player1Score17;
    const playerOne = await addScoreSeventeen({
      variables: {
        name: name,
        score: score,
      },
    });
    if (player2) {
      const name = player2;
      const score = player2Score17;
      const playerTwo = await addScoreSeventeen({
        variables: {
          name: name,
          score: score,
        },
      });
    }
    if (player3) {
      const name = player3;
      const score = player3Score17;
      const playerThree = await addScoreSeventeen({
        variables: {
          name: name,
          score: score,
        },
      });
    }
    if (player4) {
      const name = player4;
      const score = player4Score17;
      const playerFour = await addScoreSeventeen({
        variables: {
          name: name,
          score: score,
        },
      });
    }
  };

  // ADD HOLE EIGHTEEN

  const addHoleEighteen = async () => {
    const name = player1;
    const score = player1Score18;
    const playerOne = await addScoreEighteen({
      variables: {
        name: name,
        score: score,
      },
    });
    if (player2) {
      const name = player2;
      const score = player2Score18;
      const playerTwo = await addScoreEighteen({
        variables: {
          name: name,
          score: score,
        },
      });
    }
    if (player3) {
      const name = player3;
      const score = player3Score18;
      const playerThree = await addScoreEighteen({
        variables: {
          name: name,
          score: score,
        },
      });
    }
    if (player4) {
      const name = player4;
      const score = player4Score18;
      const playerFour = await addScoreEighteen({
        variables: {
          name: name,
          score: score,
        },
      });
    }
  };

  return (
    <>
      <Input
        className="getGameInput"
        value={partyName}
        onChange={(e) => setPartyName(e.target.value)}
        placeholder="Party Name:"
      />
      <Center>
      <button className="scorecardPartySearch" type="click" onClick={getGame}>
        Get game
      </button>
      </Center>
      {loaded &&
      <>
      <Center>
      <div className="gameName">
        <h5>Party: {gamePartyName}</h5>
      </div>
      </Center>
      <Center>
      <div className="course">
        <h5>Course: {course}</h5>
      </div>
      </Center>
      <Center>
      <div className="gameType">
        <h5>Game: {gameMode}</h5>
      </div>
      </Center>
      </>
      }
      {loading &&
      <Center>
        <div className="loading">
          <h2>We're fetching your game please wait</h2>
        </div>
      </Center>
      }
      {error && 
      <Center>
        <div className="danger"><h1>There was a problem</h1></div>
      </Center>
      }

      {/*    ----------------- HOLE ONE CARD ----------------    */}
      <Center>
        <div className="hole1 scores">
          <Box>
            <div className="holeNumber">
              <h1>Hole 1</h1>
            </div>
            <div className="player1">
              <h1>
                <div className="playerName"> Player 1:{player1}</div><div className="playerScore"> Score:
                <NumberInput
                  className="player1Score"
                  size="sm"
                  maxW={20}
                  value={player1Score ? parseInt(player1Score) : 0}
                  defaultValue={0}
                  min={0}
                  onChange={setPlayer1Score}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </div>
              </h1>
            </div>
            <div className="player2">
              <h1>
                <div className="playerName" >Player 2:{player2}</div><div className="playerScore"> Score:
                <NumberInput
                  className="player2Score"
                  size="sm"
                  maxW={20}
                  value={player2Score ? parseInt(player2Score) : 0}
                  defaultValue={0}
                  min={0}
                  onChange={setPlayer2Score}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                </div>
              </h1>
            </div>
            <div className="player3">
              <h1>
                <div className="playerName">Player 3:{player3}</div><div className="playerScore"> Score:
                <NumberInput
                  className="player3Score"
                  size="sm"
                  maxW={20}
                  value={player3Score ? parseInt(player3Score) : 0}
                  defaultValue={0}
                  min={0}
                  onChange={setPlayer3Score}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                </div>
              </h1>
            </div>
            <div className="player4">
              <h1>
                <div className="playerName">Player 4:{player4}</div><div className="playerScore"> Score:
                <NumberInput
                  className="player4Score"
                  size="sm"
                  maxW={20}
                  value={player4Score ? parseInt(player4Score) : 0}
                  defaultValue={0}
                  min={0}
                  onChange={setPlayer4Score}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                </div>
              </h1>
            </div>
            <button className="addScores" onClick={addHoleOne}>
              Save Scores
            </button>
          </Box>
        </div>
      </Center>

      {/* ----------------HOLE TWO CARD--------------- */}
    <Center>
      <div className="hole2 scores">
        <Box>
          <div className="holeNumber">
            <h1>Hole 2</h1>
          </div>
          <div className="player1">
            <h1>
              <div className="playerName">Player 1:{player1}</div><div className="playerScore"> Score:
              <NumberInput
                className="player1Score"
                size="sm"
                maxW={20}
                value={player1Score2 ? parseInt(player1Score2) : 0}
                min={0}
                onChange={setPlayer1Score2}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              </div>
            </h1>
          </div>
          <div className="player2">
            <h1>
              <div className="playerName">Player 2:{player2}</div><div className="playerScore"> Score:
              <NumberInput
                className="player2Score"
                size="sm"
                maxW={20}
                value={player2Score2 ? parseInt(player2Score2) : 0}
                min={0}
                onChange={setPlayer2Score2}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              </div>
            </h1>
          </div>
          <div className="player3">
            <h1>
              <div className="playerName">Player 3:{player3}</div><div className="playerScore"> Score:
              <NumberInput
                className="player3Score"
                size="sm"
                maxW={20}
                value={player3Score2 ? parseInt(player3Score2) : 0}
                min={0}
                onChange={setPlayer3Score2}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              </div>
            </h1>
          </div>
          <div className="player4">
            <h1>
              <div className="playerName">Player 4:{player4}</div><div className="playerScore"> Score:
              <NumberInput
                className="player4Score"
                size="sm"
                maxW={20}
                value={player4Score2 ? parseInt(player4Score2) : 0}
                min={0}
                onChange={setPlayer4Score2}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              </div>
            </h1>
          </div>
          <button className="addScores" onClick={addHoleTwo}>
            Save Scores
          </button>
        </Box>
      </div>
    </Center>
      {/*    ------------------ HOLE THREE CARD --------------- */}
    <Center>
      <div className="hole3 scores">
        <Box>
          <div className="holeNumber">
            <h1>Hole 3</h1>
          </div>
          <div className="player1">
            <h1>
              <div className="playerName">Player 1:{player1}</div><div className="playerScore"> Score:
              <NumberInput
                className="player1Score"
                size="sm"
                maxW={20}
                value={player1Score3 ? parseInt(player1Score3) : 0}
                min={0}
                onChange={setPlayer1Score3}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              </div>
            </h1>
          </div>
          <div className="player2">
            <h1>
              <div className="playerName">Player 2:{player2}</div><div className="playerScore"> Score:
              <NumberInput
                className="player2Score"
                size="sm"
                maxW={20}
                value={player2Score3 ? parseInt(player2Score3) : 0}
                min={0}
                onChange={setPlayer2Score3}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              </div>
            </h1>
          </div>
          <div className="player3">
            <h1>
              <div className="playerName">Player 3:{player3}</div><div className="playerScore"> Score:
              <NumberInput
                className="player3Score"
                size="sm"
                maxW={20}
                value={player3Score3 ? parseInt(player3Score3) : 0}
                min={0}
                onChange={setPlayer3Score3}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              </div>
            </h1>
          </div>
          <div className="player4">
            <h1>
              <div className="playerName">Player 4:{player4}</div><div className="playerScore"> Score:
              <NumberInput
                className="player4Score"
                size="sm"
                maxW={20}
                value={player4Score3 ? parseInt(player4Score3) : 0}
                min={0}
                onChange={setPlayer4Score3}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              </div>
            </h1>
          </div>
          <button className="addScores" onClick={addHoleThree}>
            Save Scores
          </button>
        </Box>
      </div>
    </Center>
      {/*   --------------- HOLE FOUR CARD ----------------- */}
    <Center>
      <div className="hole4 scores">
        <Box>
          <div className="holeNumber">
            <h1>Hole 4</h1>
          </div>
          <div className="player1">
            <h1>
              <div className="playerName">Player 1:{player1}</div><div className="playerScore"> Score:
              <NumberInput
                className="player1Score"
                size="sm"
                maxW={20}
                value={player1Score4 ? parseInt(player1Score4) : 0}
                min={0}
                onChange={setPlayer1Score4}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              </div>
            </h1>
          </div>
          <div className="player2">
            <h1>
              <div className="playerName">Player 2:{player2}</div><div className="playerScore"> Score:
              <NumberInput
                className="player2Score"
                size="sm"
                maxW={20}
                value={player2Score4 ? parseInt(player2Score4) : 0}
                min={0}
                onChange={setPlayer2Score4}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              </div>
            </h1>
          </div>
          <div className="player3">
            <h1>
              <div className="playerName">Player 3:{player3}</div><div className="playerScore"> Score:
              <NumberInput
                className="player3Score"
                size="sm"
                maxW={20}
                value={player3Score4 ? parseInt(player3Score4) : 0}
                min={0}
                onChange={setPlayer3Score4}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              </div>
            </h1>
          </div>
          <div className="player4">
            <h1>
              <div className="playerName">Player 4:{player4}</div><div className="playerScore"> Score:
              <NumberInput
                className="player4Score"
                size="sm"
                maxW={20}
                value={player4Score4 ? parseInt(player4Score4) : 0}
                min={0}
                onChange={setPlayer4Score4}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              </div>
            </h1>
          </div>
          <button className="addScores" onClick={addHoleFour}>
            Save Scores
          </button>
        </Box>
      </div>
    </Center>
      {/*    ---------------- HOLE FIVE CARD ---------------- */}
    <Center>
      <div className="hole5 scores">
        <Box>
          <div className="holeNumber">
            <h1>Hole 5</h1>
          </div>
          <div className="player1">
            <h1>
              <div className="playerName">Player 1:{player1}</div><div className="playerScore"> Score:
              <NumberInput
                className="player1Score"
                size="sm"
                maxW={20}
                value={player1Score5 ? parseInt(player1Score5) : 0}
                min={0}
                onChange={setPlayer1Score5}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              </div>
            </h1>
          </div>
          <div className="player2">
            <h1>
              <div className="playerName">Player 2:{player2}</div><div className="playerScore"> Score:
              <NumberInput
                className="player2Score"
                size="sm"
                maxW={20}
                value={player2Score5 ? parseInt(player2Score5) : 0}
                min={0}
                onChange={setPlayer2Score5}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              </div>
            </h1>
          </div>
          <div className="player3">
            <h1>
              <div className="playerName">Player 3:{player3}</div><div className="playerScore"> Score:
              <NumberInput
                className="player3Score"
                size="sm"
                maxW={20}
                value={player3Score5 ? parseInt(player3Score5) : 0}
                min={0}
                onChange={setPlayer3Score5}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              </div>
            </h1>
          </div>
          <div className="player4">
            <h1>
              <div className="playerName">Player 4:{player4}</div><div className="playerScore"> Score:
              <NumberInput
                className="player4Score"
                size="sm"
                maxW={20}
                value={player4Score5 ? parseInt(player4Score5) : 0}
                min={0}
                onChange={setPlayer4Score5}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              </div>
            </h1>
          </div>
          <button className="addScores" onClick={addHoleFive}>
            Save Scores
          </button>
        </Box>
      </div>
    </Center>
      {/*        ------------------ HOLE SIX CARD ------------------- */}
    <Center>
      <div className="hole6 scores">
        <Box>
          <div className="holeNumber">
            <h1>Hole 6</h1>
          </div>
          <div className="player1">
            <h1>
              <div className="playerName">Player 1:{player1}</div><div className="playerScore"> Score:
              <NumberInput
                className="player1Score"
                size="sm"
                maxW={20}
                value={player1Score6 ? parseInt(player1Score6) : 0}
                min={0}
                onChange={setPlayer1Score6}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              </div>
            </h1>
          </div>
          <div className="player2">
            <h1>
              <div className="playerName">Player 2:{player2}</div><div className="playerScore"> Score:
              <NumberInput
                className="player2Score"
                size="sm"
                maxW={20}
                value={player2Score6 ? parseInt(player2Score6) : 0}
                min={0}
                onChange={setPlayer2Score6}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              </div>
            </h1>
          </div>
          <div className="player3">
            <h1>
              <div className="playerName">Player 3:{player3}</div><div className="playerScore"> Score:
              <NumberInput
                className="player3Score"
                size="sm"
                maxW={20}
                value={player3Score6 ? parseInt(player3Score6) : 0}
                min={0}
                onChange={setPlayer3Score6}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              </div>
            </h1>
          </div>
          <div className="player4">
            <h1>
              <div className="playerName">Player 4:{player4}</div><div className="playerScore"> Score:
              <NumberInput
                className="player4Score"
                size="sm"
                maxW={20}
                value={player4Score6 ? parseInt(player4Score6) : 0}
                min={0}
                onChange={setPlayer4Score6}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              </div>
            </h1>
          </div>
          <button className="addScores" onClick={addHoleSix}>
            Save Scores
          </button>
        </Box>
      </div>
    </Center>
      {/*      -------------- HOLE SEVEN CARD ----------------  */}
    <Center>
      <div className="hole7 scores">
        <Box>
          <div className="holeNumber">
            <h1>Hole 7</h1>
          </div>
          <div className="player1">
            <h1>
              <div className="playerName">Player 1:{player1}</div><div className="playerScore"> Score:
              <NumberInput
                className="player1Score"
                size="sm"
                maxW={20}
                value={player1Score7 ? parseInt(player1Score7) : 0}
                min={0}
                onChange={setPlayer1Score7}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              </div>
            </h1>
          </div>
          <div className="player2">
            <h1>
              <div className="playerName">Player 2:{player2}</div><div className="playerScore"> Score:
              <NumberInput
                className="player2Score"
                size="sm"
                maxW={20}
                value={player2Score7 ? parseInt(player2Score7) : 0}
                min={0}
                onChange={setPlayer2Score7}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              </div>
            </h1>
          </div>
          <div className="player3">
            <h1>
              <div className="playerName">Player 3:{player3}</div><div className="playerScore"> Score:
              <NumberInput
                className="player3Score"
                size="sm"
                maxW={20}
                value={player3Score7 ? parseInt(player3Score7) : 0}
                min={0}
                onChange={setPlayer3Score7}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              </div>
            </h1>
          </div>
          <div className="player4">
            <h1>
              <div className="playerName">Player 4:{player4}</div><div className="playerScore"> Score:
              <NumberInput
                className="player4Score"
                size="sm"
                maxW={20}
                value={player4Score7 ? parseInt(player4Score7) : 0}
                min={0}
                onChange={setPlayer4Score7}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              </div>
            </h1>
          </div>
          <button className="addScores" onClick={addHoleSeven}>
            Save Scores
          </button>
        </Box>
      </div>
    </Center>
      {/*     ------------- HOLE EIGHT CARD ------------------ */}
    <Center>
      <div className="hole8 scores">
        <Box>
          <div className="holeNumber">
            <h1>Hole 8</h1>
          </div>
          <div className="player1">
            <h1>
              <div className="playerName">Player 1:{player1}</div><div className="playerScore"> Score:
              <NumberInput
                className="player1Score"
                size="sm"
                maxW={20}
                value={player1Score8 ? parseInt(player1Score8) : 0}
                min={0}
                onChange={setPlayer1Score8}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              </div>
            </h1>
          </div>
          <div className="player2">
            <h1>
              <div className="playerName">Player 2:{player2}</div><div className="playerScore"> Score:
              <NumberInput
                className="player2Score"
                size="sm"
                maxW={20}
                value={player2Score8 ? parseInt(player2Score8) : 0}
                min={0}
                onChange={setPlayer2Score8}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              </div>
            </h1>
          </div>
          <div className="player3">
            <h1>
              <div className="playerName">Player 3:{player3}</div><div className="playerScore"> Score:
              <NumberInput
                className="player3Score"
                size="sm"
                maxW={20}
                value={player3Score8 ? parseInt(player3Score8) : 0}
                min={0}
                onChange={setPlayer3Score8}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              </div>
            </h1>
          </div>
          <div className="player4">
            <h1>
              <div className="playerName">Player 4:{player4}</div><div className="playerScore"> Score:
              <NumberInput
                className="player4Score"
                size="sm"
                maxW={20}
                value={player4Score8 ? parseInt(player4Score8) : 0}
                min={0}
                onChange={setPlayer4Score8}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              </div>
            </h1>
          </div>
          <button className="addScores" onClick={addHoleEight}>
            Save Scores
          </button>
        </Box>
      </div>
    </Center>
      {/*      --------------- HOLE NINE CARD ----------------- */}
    <Center>
      <div className="hole9 scores">
        <Box>
          <div className="holeNumber">
            <h1>Hole 9</h1>
          </div>
          <div className="player1">
            <h1>
              <div className="playerName">Player 1:{player1}</div><div className="playerScore"> Score:
              <NumberInput
                className="player1Score"
                size="sm"
                maxW={20}
                value={player1Score9 ? parseInt(player1Score9) : 0}
                min={0}
                onChange={setPlayer1Score9}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              </div>
            </h1>
          </div>
          <div className="player2">
            <h1>
              <div className="playerName">Player 2:{player2}</div><div className="playerScore"> Score:
              <NumberInput
                className="player2Score"
                size="sm"
                maxW={20}
                value={player2Score9 ? parseInt(player2Score9) : 0}
                min={0}
                onChange={setPlayer2Score9}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              </div>
            </h1>
          </div>
          <div className="player3">
            <h1>
              <div className="playerName">Player 3:{player3}</div><div className="playerScore"> Score:
              <NumberInput
                className="player3Score"
                size="sm"
                maxW={20}
                value={player3Score9 ? parseInt(player3Score9) : 0}
                min={0}
                onChange={setPlayer3Score9}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              </div>
            </h1>
          </div>
          <div className="player4">
            <h1>
              <div className="playerName">Player 4:{player4}</div><div className="playerScore"> Score:
              <NumberInput
                className="player4Score"
                size="sm"
                maxW={20}
                value={player4Score9 ? parseInt(player4Score9) : 0}
                min={0}
                onChange={setPlayer4Score9}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              </div>
            </h1>
          </div>
          <button className="addScores" onClick={addHoleNine}>
            Save Scores
          </button>
        </Box>
      </div>
    </Center>
      {/*      -------------- HOLE TEN CARD -------------- */}
    <Center>
      <div className="hole10 scores">
        <Box>
          <div className="holeNumber">
            <h1>Hole 10</h1>
          </div>
          <div className="player1">
            <h1>
              <div className="playerName">Player 1:{player1}</div><div className="playerScore"> Score:
              <NumberInput
                className="player1Score"
                size="sm"
                maxW={20}
                value={player1Score10 ? parseInt(player1Score10) : 0}
                min={0}
                onChange={setPlayer1Score10}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              </div>
            </h1>
          </div>
          <div className="player2">
            <h1>
              <div className="playerName">Player 2:{player2}</div><div className="playerScore"> Score:
              <NumberInput
                className="player2Score"
                size="sm"
                maxW={20}
                value={player2Score10 ? parseInt(player2Score10) : 0}
                min={0}
                onChange={setPlayer2Score10}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              </div>
            </h1>
          </div>
          <div className="player3">
            <h1>
              <div className="playerName">Player 3:{player3}</div><div className="playerScore"> Score:
              <NumberInput
                className="player3Score"
                size="sm"
                maxW={20}
                value={player3Score10 ? parseInt(player3Score10) : 0}
                min={0}
                onChange={setPlayer3Score10}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              </div>
            </h1>
          </div>
          <div className="player4">
            <h1>
              <div className="playerName">Player 4:{player4}</div><div className="playerScore"> Score:
              <NumberInput
                className="player4Score"
                size="sm"
                maxW={20}
                value={player4Score10 ? parseInt(player4Score10) : 0}
                min={0}
                onChange={setPlayer4Score10}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              </div>
            </h1>
          </div>
          <button className="addScores" onClick={addHoleTen}>
            Save Scores
          </button>
        </Box>
      </div>
    </Center>
      {/*      --------------- HOLE ELEVEN CARD ------------ */}
    <Center>
      <div className="hole11 scores">
        <Box>
          <div className="holeNumber">
            <h1>Hole 11</h1>
          </div>
          <div className="player1">
            <h1>
              <div className="playerName">Player 1:{player1}</div><div className="playerScore"> Score:
              <NumberInput
                className="player1Score"
                size="sm"
                maxW={20}
                value={player1Score11 ? parseInt(player1Score11) : 0}
                min={0}
                onChange={setPlayer1Score11}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              </div>
            </h1>
          </div>
          <div className="player2">
            <h1>
              <div className="playerName">Player 2:{player2}</div><div className="playerScore"> Score:
              <NumberInput
                className="player2Score"
                size="sm"
                maxW={20}
                value={player2Score11 ? parseInt(player2Score11) : 0}
                min={0}
                onChange={setPlayer2Score11}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              </div>
            </h1>
          </div>
          <div className="player3">
            <h1>
              <div className="playerName">Player 3:{player3}</div><div className="playerScore"> Score:
              <NumberInput
                className="player3Score"
                size="sm"
                maxW={20}
                value={player3Score11 ? parseInt(player3Score11) : 0}
                min={0}
                onChange={setPlayer3Score11}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              </div>
            </h1>
          </div>
          <div className="player4">
            <h1>
              <div className="playerName">Player 4:{player4}</div><div className="playerScore"> Score:
              <NumberInput
                className="player4Score"
                size="sm"
                maxW={20}
                value={player4Score11 ? parseInt(player4Score11) : 0}
                min={0}
                onChange={setPlayer4Score11}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              </div>
            </h1>
          </div>
          <button className="addScores" onClick={addHoleEleven}>
            Save Scores
          </button>
        </Box>
      </div>
    </Center>
      {/*       ------------------- HOLE TWELVE CARD ------------------ */}
    <Center>
      <div className="hole12 scores">
        <Box>
          <div className="holeNumber">
            <h1>Hole 12</h1>
          </div>
          <div className="player1">
            <h1>
              <div className="playerName">Player 1:{player1}</div><div className="playerScore"> Score:
              <NumberInput
                className="player1Score"
                size="sm"
                maxW={20}
                value={player1Score12 ? parseInt(player1Score12) : 0}
                min={0}
                onChange={setPlayer1Score12}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              </div>
            </h1>
          </div>
          <div className="player2">
            <h1>
              <div className="playerName">Player 2:{player2}</div><div className="playerScore"> Score:
              <NumberInput
                className="player2Score"
                size="sm"
                maxW={20}
                value={player2Score12 ? parseInt(player2Score12) : 0}
                min={0}
                onChange={setPlayer2Score12}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              </div>
            </h1>
          </div>
          <div className="player3">
            <h1>
              <div className="playerName">Player 3:{player3}</div><div className="playerScore"> Score:
              <NumberInput
                className="player3Score"
                size="sm"
                maxW={20}
                value={player3Score12 ? parseInt(player3Score12) : 0}
                min={0}
                onChange={setPlayer3Score12}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              </div>
            </h1>
          </div>
          <div className="player4">
            <h1>
              <div className="playerName">Player 4:{player4}</div><div className="playerScore"> Score:
              <NumberInput
                className="player4Score"
                size="sm"
                maxW={20}
                value={player4Score12 ? parseInt(player4Score12) : 0}
                min={0}
                onChange={setPlayer4Score12}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              </div>
            </h1>
          </div>
          <button className="addScores" onClick={addHoleTwelve}>
            Save Scores
          </button>
        </Box>
      </div>
    </Center>
      {/*     ----------------- HOLE THIRTEEN CARD ------------      */}
    <Center>
      <div className="hole13 scores">
        <Box>
          <div className="holeNumber">
            <h1>Hole 13</h1>
          </div>
          <div className="player1">
            <h1>
              <div className="playerName">Player 1:{player1}</div><div className="playerScore"> Score:
              <NumberInput
                className="player1Score"
                size="sm"
                maxW={20}
                value={player1Score13 ? parseInt(player1Score13) : 0}
                min={0}
                onChange={setPlayer1Score13}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              </div>
            </h1>
          </div>
          <div className="player2">
            <h1>
              <div className="playerName">Player 2:{player2}</div><div className="playerScore"> Score:
              <NumberInput
                className="player2Score"
                size="sm"
                maxW={20}
                value={player2Score13 ? parseInt(player2Score13) : 0}
                min={0}
                onChange={setPlayer2Score13}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              </div>
            </h1>
          </div>
          <div className="player3">
            <h1>
              <div className="playerName">Player 3:{player3}</div><div className="playerScore"> Score:
              <NumberInput
                className="player3Score"
                size="sm"
                maxW={20}
                value={player3Score13 ? parseInt(player3Score13) : 0}
                min={0}
                onChange={setPlayer3Score13}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              </div>
            </h1>
          </div>
          <div className="player4">
            <h1>
              <div className="playerName">Player 4:{player4}</div><div className="playerScore"> Score:
              <NumberInput
                className="player4Score"
                size="sm"
                maxW={20}
                value={player4Score13 ? parseInt(player4Score13) : 0}
                min={0}
                onChange={setPlayer4Score13}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              </div>
            </h1>
          </div>
          <button className="addScores" onClick={addHoleThirteen}>
            Save Scores
          </button>
        </Box>
      </div>
    </Center>
      {/*      -------------------  HOLE FOURTEEN CARD --------------------       */}
    <Center>
      <div className="hole14 scores">
        <Box>
          <div className="holeNumber">
            <h1>Hole 14</h1>
          </div>
          <div className="player1">
            <h1>
              <div className="playerName">Player 1:{player1}</div><div className="playerScore"> Score:
              <NumberInput
                className="player1Score"
                size="sm"
                maxW={20}
                value={player1Score14 ? parseInt(player1Score14) : 0}
                min={0}
                onChange={setPlayer1Score14}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              </div>
            </h1>
          </div>
          <div className="player2">
            <h1>
              <div className="playerName">Player 2:{player2}</div><div className="playerScore"> Score:
              <NumberInput
                className="player2Score"
                size="sm"
                maxW={20}
                value={player2Score14 ? parseInt(player2Score14) : 0}
                min={0}
                onChange={setPlayer2Score14}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              </div>
            </h1>
          </div>
          <div className="player3">
            <h1>
              <div className="playerName">Player 3:{player3}</div><div className="playerScore"> Score:
              <NumberInput
                className="player3Score"
                size="sm"
                maxW={20}
                value={player3Score14 ? parseInt(player3Score14) : 0}
                min={0}
                onChange={setPlayer3Score14}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              </div>
            </h1>
          </div>
          <div className="player4">
            <h1>
              <div className="playerName">Player 4:{player4}</div><div className="playerScore"> Score:
              <NumberInput
                className="player4Score"
                size="sm"
                maxW={20}
                value={player4Score14 ? parseInt(player4Score14) : 0}
                min={0}
                onChange={setPlayer4Score14}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              </div>
            </h1>
          </div>
          <button className="addScores" onClick={addHoleFourteen}>
            Save Scores
          </button>
        </Box>
      </div>
    </Center>
      {/*     ----------------- HOLE FIFTEEN CARD ---------------------      */}
    <Center>
      <div className="hole15 scores">
        <Box>
          <div className="holeNumber">
            <h1>Hole 15</h1>
          </div>
          <div className="player1">
            <h1>
              <div className="playerName">Player 1:{player1}</div><div className="playerScore"> Score:
              <NumberInput
                className="player1Score"
                size="sm"
                maxW={20}
                value={player1Score15 ? parseInt(player1Score15) : 0}
                min={0}
                onChange={setPlayer1Score15}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              </div> 
            </h1>
          </div>
          <div className="player2">
            <h1>
              <div className="playerName">Player 2:{player2}</div><div className="playerScore"> Score:
              <NumberInput
                className="player2Score"
                size="sm"
                maxW={20}
                value={player2Score15 ? parseInt(player2Score15) : 0}
                min={0}
                onChange={setPlayer2Score15}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              </div>
            </h1>
          </div>
          <div className="player3">
            <h1>
              <div className="playerName">Player 3:{player3}</div><div className="playerScore"> Score:
              <NumberInput
                className="player3Score"
                size="sm"
                maxW={20}
                value={player3Score15 ? parseInt(player3Score15) : 0}
                min={0}
                onChange={setPlayer3Score15}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              </div>
            </h1>
          </div>
          <div className="player4">
            <h1>
              <div className="playerName">Player 4:{player4}</div><div className="playerScore"> Score:
              <NumberInput
                className="player4Score"
                size="sm"
                maxW={20}
                value={player4Score15 ? parseInt(player4Score15) : 0}
                min={0}
                onChange={setPlayer4Score15}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              </div>
            </h1>
          </div>
          <button className="addScores" onClick={addHoleFifteen}>
            Save Scores
          </button>
        </Box>
      </div>
    </Center>
      {/*     ------------------ HOLE SIXTEEN CARD ----------------     */}
    <Center>
      <div className="hole16 scores">
        <Box>
          <div className="holeNumber">
            <h1>Hole 16</h1>
          </div>
          <div className="player1">
            <h1>
              <div className="playerName">Player 1:{player1}</div><div className="playerScore"> Score:
              <NumberInput
                className="player1Score"
                size="sm"
                maxW={20}
                value={player1Score16 ? parseInt(player1Score16) : 0}
                min={0}
                onChange={setPlayer1Score16}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              </div>
            </h1>
          </div>
          <div className="player2">
            <h1>
              <div className="playerName">Player 2:{player2}</div><div className="playerScore"> Score:
              <NumberInput
                className="player2Score"
                size="sm"
                maxW={20}
                value={player2Score16 ? parseInt(player2Score16) : 0}
                min={0}
                onChange={setPlayer2Score16}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              </div>
            </h1>
          </div>
          <div className="player3">
            <h1>
              <div className="playerName">Player 3:{player3}</div><div className="playerScore"> Score:
              <NumberInput
                className="player3Score"
                size="sm"
                maxW={20}
                value={player3Score16 ? parseInt(player3Score16) : 0}
                min={0}
                onChange={setPlayer3Score16}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              </div>
            </h1>
          </div>
          <div className="player4">
            <h1>
              <div className="playerName">Player 4:{player4}</div><div className="playerScore"> Score:
              <NumberInput
                className="player4Score"
                size="sm"
                maxW={20}
                value={player4Score16 ? parseInt(player4Score16) : 0}
                min={0}
                onChange={setPlayer4Score16}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              </div>
            </h1>
          </div>
          <button className="addScores" onClick={addHoleSixteen}>
            Save Scores
          </button>
        </Box>
      </div>
    </Center>
      {/*     --------------- HOLE SEVENTEEN CARD -------------    */}
    <Center>
      <div className="hole17 scores">
        <Box>
          <div className="holeNumber">
            <h1>Hole 17</h1>
          </div>
          <div className="player1">
            <h1>
              <div className="playerName">Player 1:{player1}</div><div className="playerScore"> Score:
              <NumberInput
                className="player1Score"
                size="sm"
                maxW={20}
                value={player1Score17 ? parseInt(player1Score17) : 0}
                min={0}
                onChange={setPlayer1Score17}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              </div>
            </h1>
          </div>
          <div className="player2">
            <h1>
              <div className="playerName">Player 2:{player2}</div><div className="playerScore"> Score:
              <NumberInput
                className="player2Score"
                size="sm"
                maxW={20}
                value={player2Score17 ? parseInt(player2Score17) : 0}
                min={0}
                onChange={setPlayer2Score17}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              </div>
            </h1>
          </div>
          <div className="player3">
            <h1>
              <div className="playerName">Player 3:{player3}</div><div className="playerScore"> Score:
              <NumberInput
                className="player3Score"
                size="sm"
                maxW={20}
                value={player3Score17 ? parseInt(player3Score17) : 0}
                min={0}
                onChange={setPlayer3Score17}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              </div>
            </h1>
          </div>
          <div className="player4">
            <h1>
              <div className="playerName">Player 4:{player4}</div><div className="playerScore"> Score:
              <NumberInput
                className="player4Score"
                size="sm"
                maxW={20}
                value={player4Score17 ? parseInt(player4Score17) : 0}
                min={0}
                onChange={setPlayer4Score17}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              </div>
            </h1>
          </div>
          <button className="addScores" onClick={addHoleSeventeen}>
            Save Scores
          </button>
        </Box>
      </div>
    </Center>
      {/*     ------------------ HOLE EIGHTEEN CARD ----------------    */}
    <Center>
      <div className="hole18 scores">
        <Box>
          <div className="holeNumber">
            <h1>Hole 18</h1>
          </div>
          <div className="player1">
            <h1>
              <div className="playerName">Player 1:{player1}</div><div className="playerScore"> Score:
              <NumberInput
                className="player1Score"
                size="sm"
                maxW={20}
                value={player1Score18 ? parseInt(player1Score18) : 0}
                min={0}
                onChange={setPlayer1Score18}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              </div>
            </h1>
          </div>
          <div className="player2">
            <h1>
              <div className="playerName">Player 2:{player2}</div><div className="playerScore"> Score:
              <NumberInput
                className="player2Score"
                size="sm"
                maxW={20}
                value={player2Score18 ? parseInt(player2Score18) : 0}
                min={0}
                onChange={setPlayer2Score18}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              </div>
            </h1>
          </div>
          <div className="player3">
            <h1>
              <div className="playerName">Player 3:{player3}</div><div className="playerScore"> Score:
              <NumberInput
                className="player3Score"
                size="sm"
                maxW={20}
                value={player3Score18 ? parseInt(player3Score18) : 0}
                min={0}
                onChange={setPlayer3Score18}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              </div>
            </h1>
          </div>
          <div className="player4">
            <h1>
              <div className="playerName">Player 4:{player4}</div><div className="playerScore"> Score:
              <NumberInput
                className="player4Score"
                size="sm"
                maxW={20}
                value={player4Score18 ? parseInt(player4Score18) : 0}
                min={0}
                onChange={setPlayer4Score18}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              </div>
            </h1>
          </div>
          <button className="addScores" onClick={addHoleEighteen}>
            Save Scores
          </button>
        </Box>
      </div>
    </Center>
    </>
  );
}
