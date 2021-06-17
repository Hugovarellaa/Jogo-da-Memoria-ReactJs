import React from 'react';

export default function GameOver(props){
    return (props.show ?
        <div>
             <div id="gameOver">
            <div>
                <p>Parabéns, Voce completou o jogo!</p>
            </div>
            <button id="restart" onClick={props.handleRestart}>Jogue novamente</button>
        </div>
        </div> : <></>
    )
}