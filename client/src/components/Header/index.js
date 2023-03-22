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
  const [error, setError] = useState(null);

  const handleNewUserForm = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("not a valid email!");
      return;
    }

    if (!firstName || !lastName || !nickname || !email || !password) {
      setError("all fields are required!");
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
      window.location.assign("");
    } catch (err) {
      return setError(err);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailLogin)) {
      setError("not a valid email");
      return;
    }

    if (!emailLogin || !passwordLogin) {
      setError("must fill all fields")
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
      return setError(err);
    }
  };

  const logOut = async (e) => {
    e.preventDefault();

    auth.logout();
    return;
  };

  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div className="header">
        <Heading as="h1" size="2xl">
          Tee Time
        </Heading>
      </div>
      <div className="navBar">
        <Breadcrumb separator=""className="navBar">
          <BreadcrumbItem>
            <BreadcrumbLink
              id="navHomeBtn"
              className={activeItem === "/" ? "activeTab" : ""}
            >
              <Link to="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          {auth.loggedIn() ? (
            <>
            <BreadcrumbItem>
              <BreadcrumbLink
                id="navScorecard"
                className={activeItem === "/scorecard" ? "activeTab" : ""}
              >
                <Link to="/scorecard">Scorecard</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink onClick={logOut} id="navLogout">
                Log Out
              </BreadcrumbLink>
            </BreadcrumbItem>
            </>
          ) : (
            <>
            <BreadcrumbItem>
              <BreadcrumbLink id="navNoScorecard">
                Sign in for scorecard
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink onClick={onOpen} id="navLogin">
                Login
              </BreadcrumbLink>
              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent className="modal">
                  <ModalHeader>Login</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
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
                        type="password"
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
                    {error && <h1 className="danger">{error}</h1>}
                    <ModalHeader>Create Account</ModalHeader>
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
            </BreadcrumbItem>
            </>
          )}
        </Breadcrumb>
      </div>
    </>
  );
}
