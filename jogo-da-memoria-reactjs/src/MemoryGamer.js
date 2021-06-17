import React, { useState, useEffect } from 'react';
import GameBoard from './components/GameBoard';
import GameOver from './components/GameOver'
import game from './game/game'

export default function MemoryGamer() {
    const [gameOver, setGameOver] = useState(false)
    const [cards, setCards] = useState([])

    useEffect(() => {
        setCards(game.createCardsFromTechs())
    }, [])

    function restart() {
        setGameOver(false)
        game.clearCards()
        setCards(game.createCardsFromTechs())

    }
    function handlerFlip(card) {
        game.flipCard(card.id, () => {
            //GameOverCallBack
            setGameOver(true)
        }, () => {
            //noMatchCallBack
            setCards([...game.cards])
        })
        setCards([...game.cards])
    }
    return (
        <div>
            <GameBoard handlerFlip={handlerFlip} cards={cards}> </GameBoard>
            <GameOver show={gameOver} handleRestart={restart}>

            </GameOver>
        </div>
    )
}