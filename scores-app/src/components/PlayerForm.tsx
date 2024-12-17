import { useState } from 'react';
import { Player } from '../types/Player';

interface PlayerFormProps {
    onAddPlayer: (player: Player) => void;
}

function PlayerForm({ onAddPlayer }: PlayerFormProps) {
    const [name, setName] = useState('');
    const [score, setScore] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name && score) {
            onAddPlayer;
            setName('');
            setScore('');
        };
    };

return (
    <form onSubmit={handleSubmit}>
        <div>
            <label>Name:</label>
            <input
                type="text"
                value={player}
                onChange={(e) => setPlayer(e.target.value)}
                required 
            />
        </div>
        <div>
            <label>Score:</label>
            <input
                type="number"
                value={score}
                onChange={(e) => setScore(e.target.value)}
                required 
            />
        </div>
        <button type="submit">Add Player</button>
    </form>
);
}

export default PlayerForm;