import React, { useState, useEffect } from 'react'
import { Grid } from 'semantic-ui-react'
import { useCounterContext } from "../contexts/CounterContext"
import GroupCard from "../components/GroupCard"
import axios from "axios"

export default function BodyCounter() {

    const { contacts, LoadTheGame } = useCounterContext();
    const [isloaded, setIsLoaded] = useState(false);
  
    useEffect(() => {
      if (isloaded===false ) {
        async function fetchData() {
          const response = await axios('http://127.0.0.1:5000/api/PlayerPoint?id_game=1');

          setIsLoaded(true);
          LoadTheGame(response.data.data);
        }    
        fetchData();
      }
      
    })

    const tb = [];
    contacts.forEach(function(user,key) {
      tb.push(<Grid.Column key={key}><GroupCard user={user}/></Grid.Column>);
    })

    return (
      // Wrap the components that you want to share your custom hook state
      <Grid columns={3}>
          {tb}
        </Grid>
    );
  }