import React,{useState} from 'react'
import './index.css';
import App from './App';
import {BrowserRouter as Router,Routes,Route,Link,Component,Element,useParams,NavLink} from 'react-router-dom';

function Home() {
    const [pOneName,setPOneName] = useState("")
    const [pTwoName,setPTwoName] = useState("")
   


    function setPLayerOneName(e){
       e.preventDefault();
        setPOneName(e.target.value)
       console.log(pOneName)
    }

    function setPLayerTwoName(e){
        e.preventDefault();
        setPTwoName(e.target.value)
        console.log(pTwoName)
    }
    
    return (
        <div className="home-wrapper">
            <p className="heading-text">React Tic Tac Toe</p>
            <input placeholder="Enter name of player One" onChange={setPLayerOneName} type="text" />
            <input placeholder="Enter name of player Two" onChange={setPLayerTwoName} type="text" />
            <NavLink to ={"play"} >
            <button className="play-btn">Lets Play</button>
            </NavLink>
        </div>
    )
}

export default Home
