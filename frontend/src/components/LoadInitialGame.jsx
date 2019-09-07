import React from 'react'
import { useCounterContext } from "../contexts/CounterContext"
import { Container } from "semantic-ui-react"
import HeaderCounter from "./HeaderCounter"
import BodyCounter from "./BodyCounter"
import ListOfGames from "./ListOfGames"

export default function LoadInitialGame() {

    const { gameId } = useCounterContext();
    const content = [];
    if (gameId === null)
      content.push(<div key="1"><ListOfGames/></div>);
    else  
      content.push(<div><HeaderCounter/><BodyCounter/></div>);

    return (
      <Container style={{ marginTop: '3em' }}>
        {content}
      </Container>
    );
  }