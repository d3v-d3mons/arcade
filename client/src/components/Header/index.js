import React, { useState, useEffect } from "react";
import {
  Heading,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalHeader,
  Input,
  Modal,
  useDisclosure,
  Button,
  ModalFooter,
} from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { ADD_USER, LOGIN } from "../../utils/mutations";
import { useMutation } from "@apollo/client";
import auth from "../../utils/auth";

export default function Header() {
  const [activeItem, setActiveItem] = useState("");
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nickname, setNickname] = useState("");
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [addUser] = useMutation(ADD_USER);
  const [loginUser] = useMutation(LOGIN);

  const handleNewUserForm = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log("not valid email");
      // add error display later
    }

    if (!firstName || !lastName || !nickname || !email || !password) {
      console.log("all fields are required bud");
      // add error display later
      return;
    }
    try {
      const mutationResponse = await addUser({
        variables: {
          firstName: firstName,
          lastName: lastName,
          nickname: nickname,
          email: email,
          password: password,
        },
      });
      const token = mutationResponse.data.addUser.token;
      auth.login(token);
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailLogin)) {
      console.log("not valid email");
      // add error display later
    }

    if (!emailLogin || !passwordLogin) {
        console.log('please fill all fields');
        return;
    }

    try {
        const mutationResponse = await loginUser({
            variables: {
                email: emailLogin,
                password: passwordLogin,
            },
        });
        const token = mutationResponse.data.login.token;
        auth.login(token);
    } catch (err) {
        console.error(err);
        // add error handling and display later
    }
  }

  const logOut = async (e) => {
    e.preventDefault();

    auth.logout();
    return;
  }

  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div className="header">
        <Heading as="h1" size="2xl">
          This is a header say hi
        </Heading>
      </div>
      <div className="navBar">
        <Breadcrumb separator="-" className="navBar">
          <BreadcrumbItem>
            <BreadcrumbLink
              id="navHomeBtn"
              className={activeItem === "/" ? "activeTab" : ""}
            >
              <Link to="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink
              id="navOurStoryBtn"
              className={activeItem === "/ourstory" ? "activeTab" : ""}
            >
              <Link to="/ourstory">Our Story</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink
              id="navScoreboard"
              className={activeItem === "/scoreboard" ? "activeTab" : ""}
            >
              <Link to="/scoreboard">Leaderboard</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          {auth.loggedIn() ? (
            <BreadcrumbItem>
            <BreadcrumbLink onClick={logOut}>Log Out</BreadcrumbLink>
            </BreadcrumbItem> ) : (
          <BreadcrumbItem>
            <BreadcrumbLink onClick={onOpen}>Login/Signup</BreadcrumbLink>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Login</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <form onSubmit={handleNewUserForm}>
                    <Input
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      type="text"
                      className="firstName"
                      placeholder="enter your first name"
                    />
                    <Input
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      type="lastName"
                      className="lastName"
                      placeholder="enter your last name"
                    />
                    <Input
                      value={nickname}
                      onChange={(e) => setNickname(e.target.value)}
                      className="nickname"
                      placeholder="enter a nickname"
                    />
                    <Input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="email"
                      placeholder="enter your email here"
                    />
                    <Input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="password"
                      placeholder="enter your password here"
                    />
                    <Button
                      className="submitbtn"
                      type="submit"
                      colorScheme="blue"
                    >
                      Create an Account
                    </Button>
                  </form>
                  <form onSubmit={handleLogin}>
                    <Input
                      value={emailLogin}
                      onChange={(e) => setEmailLogin(e.target.value)}
                      type="text"
                      className="loginEmail"
                      placeholder="enter email here"
                    />
                    <Input
                      value={passwordLogin}
                      onChange={(e) => setPasswordLogin(e.target.value)}
                      type="text"
                      className="loginPassword"
                      placeholder="enter password here"
                    />
                    <Button
                      className="loginBtn"
                      type="submit"
                      colorScheme="blue"
                    >
                      Login
                    </Button>
                  </form>
                </ModalBody>
                <ModalFooter>
                  <Button
                    variant="ghost"
                    colorScheme="blue"
                    mr={3}
                    onClick={onClose}
                  >
                    Close
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </BreadcrumbItem>)}
        </Breadcrumb>
      </div>
    </>
  );
}
