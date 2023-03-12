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
  Form,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [activeItem, setActiveItem] = useState("");
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    // figure out how to utilize context to render only login or logout once proxy is fixed

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
          <BreadcrumbItem>
            <Button onClick={onOpen}>Login</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                    <ModalHeader>Login</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Form>
                            <Input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="loginEmail" placeholder="enter email here" />
                            <Input value={password} onChange={(e) => setPassword(e.target.value)} type="text" className="loginPassword" placeholder="enter password here" />
                        </Form>
                    </ModalBody>
                </ModalContent>
            </Modal>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
    </>
  );
}
