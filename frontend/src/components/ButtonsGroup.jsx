import React from "react";
import { Container, Button } from 'semantic-ui-react'
import { useCounterContext } from "../contexts/CounterContext"
import axios from "axios"

export default function ButtonsGroup(props) {

    const { removePoint,addPoint } = useCounterContext();

    const onAddPoint = () => {
      axios.put('http://127.0.0.1:5000/api/PlayerPoint',{id:props.user.id,nbPoints:props.user.nbPoints + 1});
      addPoint(props.user.id);
    };

    const onRemovePoint = () => {
      axios.put('http://127.0.0.1:5000/api/PlayerPoint',{id:props.user.id,nbPoints:props.user.nbPoints - 1});
      removePoint(props.user.id);
    };
    
    return (
      // Wrap the components that you want to share your custom hook state

        <Container textAlign="center">
            <Button.Group>
                <Button color="green" onClick={onAddPoint}>
                +
                </Button>
                <Button color="red" onClick={onRemovePoint}>
                -
                </Button>
            </Button.Group>
        </Container>

                
    );
  }