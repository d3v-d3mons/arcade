import React, { useState, useEffect, useContext } from "react";
import { Button, Input, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ADD_PLAYER } from "../../utils/mutations";
import { useMutation } from "@apollo/client";

export default function NewPlayer() {
  const [addPlayer] = useMutation(ADD_PLAYER);
  const addNewPlayer = async () => {
    if (player1) {
      await addPlayer({
        variables: {
          partyName: partyName,
          name: player1,
          score: 0,
        },
      });
    }

    if (player2) {
      await addPlayer({
        variables: {
          partyName: partyName,
          name: player2,
          score: 0,
        },
      });
    }

    if (player3) {
      await addPlayer({
        variables: {
          partyName: partyName,
          name: player3,
          score: 0,
        },
      });
    }

    if (player4) {
      await addPlayer({
        variables: {
          partyName: partyName,
          name: player4,
          score: 0,
        },
      });
    }
    setFormDone(true);
  };

  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [player3, setPlayer3] = useState("");
  const [player4, setPlayer4] = useState("");
  const [partyName, setPartyName] = useState("");
  const [formDone, setFormDone] = useState(false);

  if (formDone === false) {
    return (
      <>
        <Center>
          <div className="addPlayer">
            <h1 className="partyNameTitle">Party Name:</h1>
            <Input
              className="gamePartyName"
              type="text"
              value={partyName}
              placeholder="enter party name here"
              onChange={(e) => setPartyName(e.target.value)}
            />
            <h1 className="playerTitle">Player 1:</h1>
            <Input
              className="playerName"
              type="text"
              value={player1}
              placeholder="enter player 1 name here"
              onChange={(e) => setPlayer1(e.target.value)}
            />
            <h1 className="playerTitle">Player 2:</h1>
            <Input
              className="playerName"
              type="text"
              value={player2}
              placeholder="enter player 2 name"
              onChange={(e) => setPlayer2(e.target.value)}
            />
            <h1 className="playerTitle">Player 3:</h1>
            <Input
              className="playerName"
              type="text"
              value={player3}
              placeholder="enter player 3 name"
              onChange={(e) => setPlayer3(e.target.value)}
            />
            <h1 className="playerTitle">Player 4:</h1>
            <Input
              className="playerName"
              type="text"
              value={player4}
              placeholder="enter player 4 name"
              onChange={(e) => setPlayer4(e.target.value)}
            />
            </div>
            </Center>
            <Center>
            <Button className="playerBtn" onClick={addNewPlayer}>
              Add Players
            </Button>
        </Center>
      </>
    );
  } else {
    return (
      <>
      <Center>
        <div className="go">Head to scorecard and tee off!</div>
      </Center>
      <Center>
        <Button className="scorecardDirect">
          <Link to="/scorecard">Scorecard</Link>
        </Button>
      </Center>
      </>
    );
  }
}
