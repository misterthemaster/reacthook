import React from 'react'
import { useCounterContext } from "../contexts/CounterContext"
import LoadInitialGame from "../components/LoadInitialGame"

export default function CounterPage() {


  return (
    // Wrap the components that you want to share your custom hook state
    <useCounterContext.Provider>
      <LoadInitialGame/>
      
    </useCounterContext.Provider>
  );
}