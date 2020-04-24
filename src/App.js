import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Phrase from "./components/Phrase";

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Button = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #0f574e 100%
  );
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size 0.8s ease;

  :hover {
    cursor: pointer;
    background-size: 400px;
  }
`;

function App() {
  //state
  const [phrase, setPhrase] = useState({});

  // aux function
  const CounsultAPI = async () => {
    const API = await fetch(
      "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
    );
    const phrase = await API.json();
    setPhrase(phrase[0]);
  };

  //load api
  useEffect(() => {
    CounsultAPI();
  }, []);

  return (
    <Container>
      <Phrase phrase={phrase} />
      <Button onClick={() => CounsultAPI()}>Obtain phrase</Button>
    </Container>
  );
}

export default App;
