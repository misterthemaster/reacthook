import React, { useState, useEffect } from 'react'
import { useCounterContext } from "../contexts/CounterContext"
import { List, Grid } from 'semantic-ui-react'
import axios from "axios"
import { Icon } from 'semantic-ui-react'
import { Link } from "react-router-dom"


export default function ListOfGames() {

    const [listGames, setListGames] = useState([]);
    const { startGame } = useCounterContext();

    const onStartGame = id => {
        startGame(id);
    }


    useEffect(() => {
        if (listGames.length === 0 ) {
          async function fetchData() {
            const response = await axios('http://127.0.0.1:5000/api/Game');
  
            debugger
            setListGames(response.data.data);
          }    
          fetchData();
        }
    })

    const content = [];

    content.push(<List.Item key="new"><List.Content><Icon name='plus square' /> <Link to="/CreateGameForm">Nouvelle partie...</Link></List.Content></List.Item>);
    listGames.forEach(function(game,key) {
        content.push(<List.Item key={key}><List.Content><List.Header as='a' onClick={() => {onStartGame(game.id)}}>{game.description}</List.Header><List.Description as='a'>créé le {game.creation_date}</List.Description></List.Content></List.Item>);
    })
    

    return (
        <Grid centered columns={2}>
            <Grid.Column>
                <List divided relaxed>
                    {content} 
                </List>
            </Grid.Column>
        </Grid>
    );
  }