import React from "react";
import ButtonsGroup from "../components/ButtonsGroup"
import UserCard from "../components/UserCard"

export default function GroupCard(props) {
    
    return (
      
        <div>
            <UserCard user={props.user} />
            <ButtonsGroup user={props.user}/>
        </div>
        
    );
  }