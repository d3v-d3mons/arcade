import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import React from "react";
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react'
import { ChakraProvider } from "@chakra-ui/react";
import GameProvider from "./utils/GameContext";

import Header from "./components/Header";
import Homepage from "./components/Homepage";
import OurStory from "./components/OurStory";
import Feedback from "./components/Feedback";
import Scorecard from "./components/Scorecard";
import NewPlayer from "./components/NewPlayer";
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

const emotionCache = createCache({
  key: 'emotion-css-cache',
  prepend: true,
});

function App() {
  return (
    <GameProvider>
    <CacheProvider value={emotionCache}>
    <ChakraProvider>
      <ApolloProvider client={client}>
        <Router>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <OurStory />
                  <Homepage />
                </>
              }
            />
            <Route path="/feedback" element={<><Feedback /></>} />
            <Route path="/scorecard" element={<><Scorecard /></>} />
            <Route path="/newplayer" element={<><NewPlayer /></>} />
          </Routes>
          <Footer />
        </Router>
      </ApolloProvider>
    </ChakraProvider>
    </CacheProvider>
    </GameProvider>
  );
}

export default App;
