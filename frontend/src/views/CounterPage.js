import React from 'react'
import { useCounterContext } from "../contexts/CounterContext"
import LoadInitialGame from "../components/LoadInitialGame"
import { Header } from "semantic-ui-react"

export default function CounterPage() {


  return (
    // Wrap the components that you want to share your custom hook state
    <div>
      <Header size='huge' textAlign='center'>Concours d'assiduité</Header>
      <useCounterContext.Provider>
        <LoadInitialGame/>
        
      </useCounterContext.Provider>
    </div>
  );
}