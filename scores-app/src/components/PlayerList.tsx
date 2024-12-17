import { useState } from 'react';
import PlayerRow from './PlayerRow';
import PlayerForm from './PlayerForm';
import { Player } from '../types/Player';
import '../styles/PlayerList.css';

function PlayerList() {

    const [players, setPlayers] = useState<Player[]>([
        { name: "Fox", score: 12 },
        { name: "Turtle", score: 5 }
    ]);

const handleAddPlayer = (newPlayer: Player) => {
    setPlayers([...players, newPlayer]);
};

const clearPlayers = () => {
    setBooks([]);
};

return (
    <div className="player-list">
        <h1>Players</h1>
        <table>
            <thead>
                <tr>
                    <th>Player</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>
                {players.map((player, index) => (
                    <PlayerRow key={index} player={player} />
                ))}
            </tbody>
        </table>
        <button onClick={clearPlayers}>Clear List</button>
        <PlayerForm onAddPlayer={handleAddPlayer} />
    </div>
    );
}

export default PlayerList;