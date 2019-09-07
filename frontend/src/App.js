import React, { useState } from "react"
import CounterPage from "./views/CounterPage"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import About from "./views/About"
import { Header, Menu } from "semantic-ui-react"


export default function App() {

  const [activeItem,setActiveItem] = useState("");

  return (
    <Router>

      <div>
        <Menu>
          <Menu.Item as={Link} to='/About'
            name='About'
            active={activeItem === 'About'}
            onClick={()=>setActiveItem('About')}>
              About
          </Menu.Item>
          <Menu.Item as={Link} to='/Partie'
            name='Partie'
            active={activeItem === 'Partie'}
            onClick={()=>setActiveItem('Partie')}>
              Partie          
            </Menu.Item>
        </Menu>

        <Header size='huge' textAlign='center'>Concours d'assiduité</Header>
        <Route path="/about" component={About} />
        <Route path="/partie" component={CounterPage} />
      </div>

      
    </Router>
  );
}