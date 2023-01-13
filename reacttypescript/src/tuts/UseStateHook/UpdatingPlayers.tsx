import React, { useState } from 'react'

const UpdatingPlayers = () => {
    const [players, setPlayers] = useState({
        player1: 'Messi',
        player2: 'Ronaldo',
        player3: 'Neymar',
        player4: 'Salisu'
    })
// updating player 2
    const updatePlayer = () => {
        setPlayers((prevPlayers) => {
            return {
                ...prevPlayers,
                player2: 'Abu Bakar'
            }
        })
    }
    
  return (
    <div>
        <h1>Updating Players</h1>
        <p>
            Player {players.player2} played for Man.U but not in Saudi Arabia
        </p>
        <button
        onClick={updatePlayer}
        >Update Players</button>
    </div>
  )
}

export default UpdatingPlayers
