import React from "react"
import { Form, Button } from 'semantic-ui-react'

export default function FormNewGame() {

    return (
      // Wrap the components that you want to share your custom hook state

      <Form>
        <Form.Field>
          <label>Nom de la partie</label>
          <input placeholder='Nom' />
        </Form.Field>
        
        <Button type='submit'>Submit</Button>
      </Form>

                
    );
  }