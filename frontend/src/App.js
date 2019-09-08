import React, { useState } from "react"
import CounterPage from "./views/CounterPage"
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom"
import About from "./views/About"
import { Header, Menu, Icon } from "semantic-ui-react"
import CreateGameForm from "./views/CreateGameForm"
import { useCounterContext } from "./contexts/CounterContext"


export default function App() {

  const [activeItem,setActiveItem] = useState("");

  return (
    <useCounterContext.Provider>
    <Router>

      <div>
        <Menu>
          
          <Menu.Item as={NavLink} to='/'
            name='Partie'
            active={activeItem === 'Partie'}
            onClick={()=>setActiveItem('Partie')}>
              <Icon name='game' /> Liste partie          
            </Menu.Item>
            
            <Menu.Item as={NavLink} to='/CreateGameForm'
            name='CreateGameForm'
            active={activeItem === 'CreateGameForm'}
            onClick={()=>setActiveItem('CreateGameForm')}>
              <Icon name='file alternate outline' /> Création partie
            </Menu.Item>

            <Menu.Item as={NavLink} to='/About'
            name='About'
            active={activeItem === 'About'}
            onClick={()=>setActiveItem('About')}>
              <Icon name='file alternate outline' /> About
            </Menu.Item>
        </Menu>

        <Header size='huge' textAlign='center'>Concours d'assiduité</Header>
        <Route path="/CreateGameForm" component={CreateGameForm} />
        <Route path="/about" component={About} />
        <Route exact path="/" component={CounterPage} />
      </div>

      
    </Router>
    </useCounterContext.Provider>
  );
}