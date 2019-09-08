import React, { useState } from "react";
import { Form, Button, Container } from 'semantic-ui-react'
import axios from "axios"
import { useCounterContext } from "../contexts/CounterContext"
import { Redirect } from "react-router-dom"

export default function GameForm() {

  const [description, setDescription] = useState("");
  const { gameId, startGame } = useCounterContext();
  const onAddGame = () => {
      debugger
    
    async function fetchData() {
        debugger
        const response = await axios.post('http://127.0.0.1:5000/api/Game',{description:description});

        startGame(response.data.data.id);
    }    
    fetchData();
        
    //axios.post('http://127.0.0.1:5000/api/Game',{description:description});
  };

  function handleChange(e) {
    setDescription(e.target.value);
  }


  if (gameId != null) {
    return <Redirect to='/' />
  }
  return (
    // Wrap the components that you want to share your custom hook state

    
    <Container>
      
        <Form>
          <Form.Field>
              <label>Nom de la partie</label>
              <input placeholder='Description' onChange={handleChange} />
          </Form.Field>
          
          <Button type='submit' onClick={onAddGame}>Submit</Button>
        </Form>
    </Container>

              
  );
  }