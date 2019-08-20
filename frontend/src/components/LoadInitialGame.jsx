import React, { useState, useEffect } from 'react'
import { useCounterContext } from "../contexts/CounterContext"
import { Container } from "semantic-ui-react"
import HeaderCounter from "./HeaderCounter"
import BodyCounter from "./BodyCounter"
import ListOfGames from "./ListOfGames"

export default function LoadInitialGame() {

    const { gameId, startGame } = useCounterContext();

    const onStartGame = id => {
      startGame(id);
    }

    //debugger;
    const content = [];
    if (gameId === null)
      //content.push(<Button color="green" onClick={() => {onStartGame(1)}}>Démarre</Button>);
      content.push(<div><ListOfGames/></div>);
    else  
      content.push(<div><HeaderCounter/><BodyCounter/></div>);

    return (
      <Container style={{ marginTop: '3em' }}>
        {content}
      </Container>
    );
  }