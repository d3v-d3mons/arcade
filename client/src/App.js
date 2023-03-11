import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import React from "react";

import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import "./App.css";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
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
        </Routes>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
