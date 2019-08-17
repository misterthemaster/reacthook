import React from 'react'
import { Container, Header } from "semantic-ui-react"
import { useCounterContext } from "../contexts/CounterContext"
import HeaderCounter from "../components/HeaderCounter"
import BodyCounter from "../components/BodyCounter"
import LoadInitialData from "../components/LoadInitialData"

export default function CounterPage() {


  return (
    // Wrap the components that you want to share your custom hook state
    <useCounterContext.Provider>
      <Container style={{ marginTop: '3em' }}>
        <Header size='huge' textAlign='center'>Concours d'assiduité</Header>
        <HeaderCounter/>
        <BodyCounter/>
      </Container>
    </useCounterContext.Provider>
  );
}