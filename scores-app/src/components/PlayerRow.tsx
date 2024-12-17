import { Player } from '../types/Player';

interface PlayerRowProps {
    player: Player;
}

function PlayerRow({ player }: PlayerRowProps) {
    return (
        <tr>
            <td>{player.name}</td>
            <td>{player.score}</td>
        </tr>
    );
};

export default PlayerRow;