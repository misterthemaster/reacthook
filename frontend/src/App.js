import React, { useState } from "react"
import CounterPage from "./views/CounterPage"
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom"
import About from "./views/About"
import { Header, Menu, Icon } from "semantic-ui-react"


export default function App() {

  const [activeItem,setActiveItem] = useState("");

  return (
    <Router>

      <div>
        <Menu>
          
          <Menu.Item as={NavLink} to='/'
            name='Partie'
            active={activeItem === 'Partie'}
            onClick={()=>setActiveItem('Partie')}>
              <Icon name='game' /> Partie          
            </Menu.Item>
            
            <Menu.Item as={NavLink} to='/About'
            name='About'
            active={activeItem === 'About'}
            onClick={()=>setActiveItem('About')}>
              <Icon name='file alternate outline' /> About
          </Menu.Item>
        </Menu>

        <Header size='huge' textAlign='center'>Concours d'assiduité</Header>
        <Route path="/about" component={About} />
        <Route exact path="/" component={CounterPage} />
      </div>

      
    </Router>
  );
}