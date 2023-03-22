import React, { useState, useContext } from "react";
import { useMutation, useLazyQuery } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import auth from "../../utils/auth";
import { BEGIN_CREATE, ADD_PLAYER } from "../../utils/mutations";
import { QUERY_PLAYERS } from "../../utils/queries";
import {
  Button,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalHeader,
  Input,
  Modal,
  useDisclosure,
  Select,
  Stack,
  Center,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Homepage() {
  const [beginCreate] = useMutation(BEGIN_CREATE);
  const [error, setError] = useState(null);
  const newGameHandler = async () => {
    if (!partyName || !gameType || !course) {
      setError("Must fill all fields");
    }
    await beginCreate({
      variables: {
        partyName: partyName,
        gameType: gameType,
        course: course,
      },
    });
    setComplete(true);
    window.location.replace("/newplayer");
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [partyName, setPartyName] = useState("");
  const [gameType, setGameType] = useState("");
  const [course, setCourse] = useState("");
  const [startComplete, setComplete] = useState(false);

  if (startComplete === false) {
    return (
      <>
        {auth.loggedIn() ? (
          <>
            <Center>
              <Button className="createGameBtn" onClick={onOpen}>
                Create New Game
              </Button>
            </Center>
            <Center>
              <Button className="addPlyr">
                <Link to="/newplayer">Add Players</Link>
              </Button>
            </Center>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent className="modal">
                <ModalHeader className="createGameHeader">
                  Craft your match
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <form>
                    <Input
                      value={partyName}
                      onChange={(e) => setPartyName(e.target.value)}
                      type="text"
                      className="formPartyName"
                      placeholder="enter party name"
                    />
                    <Stack spacing={3}>
                      <Input
                        placeholder="enter a course"
                        className="courseNamesSelect"
                        onChange={(e) => setCourse(e.target.value)}
                      />
                    </Stack>
                    <Stack spacing={3}>
                      <Select
                        className="selectDropDwn"
                        placeholder="choose a game"
                        onChange={(e) => setGameType(e.target.value)}
                      >
                        <option className="gameType" value="Standard">
                          Standard
                        </option>
                        <option className="gameType" value="Scramble">
                          Scramble
                        </option>
                        <option className="gameType" value="Funsies">
                          Just for Fun *includes hand grenades and mulligans
                        </option>
                        <option className="gameType" value="Range">
                          Driving Range
                        </option>
                      </Select>
                    </Stack>
                    {error && (
                      <Center>
                        <div className="danger">
                          <h1>{error}</h1>
                        </div>
                      </Center>
                    )}
                    <Button
                      type="click"
                      className="submitBtn"
                      onClick={newGameHandler}
                    >
                      Let's Go!
                    </Button>
                  </form>
                </ModalBody>
              </ModalContent>
            </Modal>
          </>
        ) : (
          <>
            <Center>
              <Button className="createGameBtn" onClick={onOpen}>
                Create New Game
              </Button>
            </Center>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent className="modal">
                <ModalHeader className="createGameHeader">
                  Must be logged in to create new match
                </ModalHeader>
              </ModalContent>
            </Modal>
          </>
        )}
      </>
    );
  } else {
    return (
      <Center>
        <Button className="newPlayerBtn">
          <Link to="/newplayer">Add Players</Link>
        </Button>
      </Center>
    );
  }
}
