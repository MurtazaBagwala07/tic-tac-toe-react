import {BrowserRouter as Router,Routes,Route,Link,useParams} from 'react-router-dom';
import React,{useState,useEffect} from 'react'
import SquareComponent from './SquareComponent';
const initialState = ["","","","","","","","",""]


function App() {
  const [gameState,updateGameState] =useState(initialState);
  const [xTurn,updateXTurn] =useState(false)
  const [pOneScore,updatePOneScore]=useState(0);
  const [pTwoScore,updatePTwoScore] = useState(0);


  
  

  const onSquareClicked=(index)=>{
    let strings = Array.from(gameState);
    if(strings[index]===""){
      strings[index] = xTurn?"X":"O";
    updateGameState(strings);
    updateXTurn(!xTurn);
    }
  }

  const clearGame=()=>{
    updateGameState(initialState);
  }
  const clearScore=()=>{
    updatePOneScore(0);
    updatePTwoScore(0);
  }
  useEffect(()=>{
    let winner = checkWinner();
    if (winner) {
        if(winner==="X"){
          updatePTwoScore(pTwoScore+1);
        }
        if(winner==="O")
        {
          updatePOneScore(pOneScore+1)
        }
        clearGame();
        alert(`Ta da ! ${winner} won the Game !`)
    }
    else if(winner===null&&!gameState.includes("")){
      updateGameState(initialState)
      alert("Game DRAW!!!")
    }
  },[gameState])

  const checkWinner = () => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    console.log('Class: App, Function: checkWinner ==', gameState[0], gameState[1], gameState[2]);
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
            return gameState[a];
        }
    }
    return null;
}

  return (
    <div className="app-header">
    <span>One</span><span>{pOneScore}</span><br/>
    <span>Two</span><span>{pTwoScore}</span><br/>
      <div className="row jc-center">
        <SquareComponent className="b-bottom-right" state={gameState[0]} onClick={()=>onSquareClicked(0)}/>
        <SquareComponent className="b-bottom-right" state={gameState[1]} onClick={()=>onSquareClicked(1)}/>
        <SquareComponent className="b-bottom" state={gameState[2]} onClick={()=>onSquareClicked(2)}/>
      </div>
      <div className="row jc-center">
      <SquareComponent className="b-bottom-right" state={gameState[3]} onClick={()=>onSquareClicked(3)}/>
      <SquareComponent className="b-bottom-right" state={gameState[4]} onClick={()=>onSquareClicked(4)}/>
      <SquareComponent className="b-bottom" state={gameState[5]} onClick={()=>onSquareClicked(5)}/>
      </div>
      <div className="row jc-center" >
      <SquareComponent className="b-right" state={gameState[6]} onClick={()=>onSquareClicked(6)}/>
      <SquareComponent className="b-right" state={gameState[7]} onClick={()=>onSquareClicked(7)}/>
      <SquareComponent state={gameState[8]} onClick={()=>onSquareClicked(8)}/>
      </div>

      <button className="clear-button" onClick={clearGame}>Reset Current Game</button>
      <button className="clear-score-button" onClick={clearScore}>Reset Scores</button>

    </div>
  );
}

export default App;
