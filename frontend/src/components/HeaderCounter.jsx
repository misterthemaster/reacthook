import React, { useState } from "react";
import { Form } from 'semantic-ui-react'
import { useCounterContext } from "../contexts/CounterContext"

export default function HeaderCounter() {

    const { addPlayer } = useCounterContext();
    const [name, setName] = useState("");

    const onAddPlayer = () => {
      addPlayer(name);
      setName("");
    };

    function handleChange(e) {
      setName(e.target.value);
    }

    return (
      // Wrap the components that you want to share your custom hook state

      <Form onSubmit={onAddPlayer}>
          <Form.Group>
            <Form.Input placeholder='Nom' name='Name' value={name} onChange={handleChange} />
            
            <Form.Button content='Ajout joueur' />
          </Form.Group>
        </Form>
        
    );
  }