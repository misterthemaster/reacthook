import React from 'react'
import { useCounterContext } from "../contexts/CounterContext"
import LoadInitialGame from "../components/LoadInitialGame"
import { Container } from "semantic-ui-react"

export default function CounterPage() {


  return (
    // Wrap the components that you want to share your custom hook state
    <Container>
      <useCounterContext.Provider>
        <LoadInitialGame/>
      </useCounterContext.Provider>
      </Container>
  );
}