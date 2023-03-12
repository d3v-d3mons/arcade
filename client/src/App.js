import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import Header from "./components/Header";
import Homepage from "./components/Homepage";
import OurStory from "./components/OurStory";
import Footer from "./components/Footer";
import "./App.css";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ChakraProvider>
      <ApolloProvider client={client}>
        <Router>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Homepage />
                </>
              }
            />
            <Route
              path="/ourstory"
              element={
                <>
                  <OurStory />
                </>
              }
            />
          </Routes>
          <Footer />
        </Router>
      </ApolloProvider>
    </ChakraProvider>
  );
}

export default App;
