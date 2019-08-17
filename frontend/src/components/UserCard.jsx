import React from "react"
import { Card, Image } from 'semantic-ui-react'

export default function UserCard(props) {

    return (
      // Wrap the components that you want to share your custom hook state

      <Card centered>
        <Image src={process.env.PUBLIC_URL + '/static/images/' + props.user.image} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{props.user.name}</Card.Header>
          <Card.Meta>
            <span className='date'>Joined in 2015</span>
          </Card.Meta>
          <Card.Description>
            Nombre de points : {props.user.nbPoints}
          </Card.Description>
        </Card.Content>                  
      </Card>

                
    );
  }