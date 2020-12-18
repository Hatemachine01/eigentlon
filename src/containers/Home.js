import React from "react";
import "./Home.css";
import  { useEffect, useState } from "react";
import { Jumbotron } from "react-bootstrap";

export default function Home() {
    
    const [time, setTime] = useState(null);

    useEffect(() => {
        fetch("/time")
        .then((response) => response.json())
        .then((data) => setTime(data.time));
    }, []);
    
    
    return (

     <Jumbotron>
      <div className="Home">
        <div className="lander">
          <h1>Eigentlon</h1>
          <div>The current time is {time}</div>
        </div>
      </div>
    </Jumbotron> 
    );
  }