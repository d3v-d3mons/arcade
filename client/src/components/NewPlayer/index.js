import React, { useState, useEffect, useContext } from "react";
import { Button, Input } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ADD_PLAYER } from "../../utils/mutations";
import { useMutation } from "@apollo/client";

export default function NewPlayer() {
  const [addPlayer] = useMutation(ADD_PLAYER);

  const addNewPlayer1 = async () => {
    const player = await addPlayer({
      variables: {
        partyName: partyName,
        name: player1,
        score: 0,
      },
    });
  };

  const addNewPlayer2 = async () => {
    const player = await addPlayer({
      variables: {
        partyName: partyName,
        name: player2,
        score: 0,
      },
    });
  };

  const addNewPlayer3 = async () => {
    const player = await addPlayer({
      variables: {
        partyName: partyName,
        name: player3,
        score: 0,
      },
    });
  };

  const addNewPlayer4 = async () => {
    const player = await addPlayer({
      variables: {
        partyName: partyName,
        name: player4,
        score: 0,
      },
    });
  };

  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [player3, setPlayer3] = useState("");
  const [player4, setPlayer4] = useState("");
  const [partyName, setPartyName] = useState("");

  return (
    <>
      <div className="addPlayer">
        <Input
          className="gamePartyName"
          type="text"
          value={partyName}
          placeholder="enter party name here"
          onChange={(e) => setPartyName(e.target.value)}
        />
        <Input
          className="playerName"
          type="text"
          value={player1}
          placeholder="enter player 1 name here"
          onChange={(e) => setPlayer1(e.target.value)}
        />
        <button className="playerBtn" onClick={addNewPlayer1}>
          Add Player
        </button>
        <Input
          className="playerName"
          type="text"
          value={player2}
          placeholder="enter player 2 name"
          onChange={(e) => setPlayer2(e.target.value)}
        />
        <button className="playerBtn" onClick={addNewPlayer2}>
          Add Player
        </button>
        <Input
          className="playerName"
          type="text"
          value={player3}
          placeholder="enter player 3 name"
          onChange={(e) => setPlayer3(e.target.value)}
        />
        <button className="playerBtn" onClick={addNewPlayer3}>
          Add Player
        </button>
        <Input
          className="playerName"
          type="text"
          value={player4}
          placeholder="enter player 4 name"
          onChange={(e) => setPlayer4(e.target.value)}
        />
        <button className="playerBtn" onClick={addNewPlayer4}>
          Add Player
        </button>
        <Button
          type="button"
          colorScheme="green"
          onClick={window.location.replace("/scorecard")}
        >
          Go to scorecard
        </Button>
      </div>
    </>
  );
}
