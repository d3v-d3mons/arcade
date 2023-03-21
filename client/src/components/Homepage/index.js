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
} from "@chakra-ui/react";

export default function Homepage() {
  const [beginCreate] = useMutation(BEGIN_CREATE);

  const newGameHandler = async () => {
    if (!partyName || !gameType || !course) {
      alert("you must fill all fields");
    }
    const game = await beginCreate({
      variables: {
        partyName: partyName,
        gameType: gameType,
        course: course,
      },
    });
    window.location.replace("/newplayer");
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [partyName, setPartyName] = useState("");
  const [gameType, setGameType] = useState("");
  const [course, setCourse] = useState("");

  return (
    <>
      {auth.loggedIn() ? (
        <>
          <Button className="createGameBtn" onClick={onOpen}>
            Create New Game
          </Button>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
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
                    <Select
                      placeholder="choose a course"
                      className="courseNamesSelect"
                      onChange={(e) => setCourse(e.target.value)}
                    >
                      <option className="courses" value="Fairlakes Golf Club">
                        Fairlakes Golf Club
                      </option>
                      <option className="courses" value="Ironwood Golf Course">
                        Ironwood Golf Course
                      </option>
                      <option className="courses" value="The Den at Fox Creek">
                        The Den at Fox Creek
                      </option>
                    </Select>
                  </Stack>
                  <Stack spacing={3}>
                    <Select
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
          <Button className="createGameBtn" onClick={onOpen}>
            Create New Game
          </Button>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader className="createGameHeader">
                Must be logged in to create new match
              </ModalHeader>
            </ModalContent>
          </Modal>
        </>
      )}
    </>
  );
}
