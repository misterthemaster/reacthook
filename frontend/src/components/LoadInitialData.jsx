import React, { useState, useEffect } from 'react'
import { useCounterContext } from "../contexts/CounterContext"
import axios from "axios"

export default function LoadInitialData() {

    const { contacts, LoadTheGame } = useCounterContext();

    useEffect(() => {
        async function fetchData() {
            const response = await axios('http://127.0.0.1:5000/api/PlayerPoint');

            LoadTheGame(response.data.data);
        }    
        fetchData();
        
      })

    return (
        <div></div>
    );
  }