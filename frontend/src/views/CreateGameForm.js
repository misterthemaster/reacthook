import React from "react";
import { Container } from 'semantic-ui-react'
import GameForm from "../components/GameForm"

export default function CreateGameForm() {

  return (
    // Wrap the components that you want to share your custom hook state
      <Container>
          <GameForm />
      </Container>
              
  );
}