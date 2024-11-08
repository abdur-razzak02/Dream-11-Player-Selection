import { useEffect, useState } from "react";
import Player from "../Player/Player";
import PropTypes from "prop-types";

const Players = ({handleSelectedPlayer }) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("Players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  return (
    <div className="container mx-auto">
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {players.map((player) => (
          <Player
            player={player}
            key={player.id}
            handleSelectedPlayer={handleSelectedPlayer}
          ></Player>
        ))}
      </div>
    </div>
  );
};

Players.propTypes = {
  handleActiveButton: PropTypes.func,
  isActive: PropTypes.bool,
  handleSelectedPlayer: PropTypes.func,
};
export default Players;
