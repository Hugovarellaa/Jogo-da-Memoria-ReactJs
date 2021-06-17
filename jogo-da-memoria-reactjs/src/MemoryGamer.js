import React, {useState} from 'react';
import GameOver from './components/GameOver'

export default function MemoryGamer () {
    const [gameOver, setGameOver] = useState(false)
    
    function restart() {
        setGameOver(false)
    }

    return (
        <div>
           <GameOver show={gameOver} handleRestart={restart}> 

           </GameOver>
        </div>
    )
}