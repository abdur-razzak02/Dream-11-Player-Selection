import { FaFlag } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import PropTypes from 'prop-types';

const Player = ({ player,handleSelectedPlayer }) => {
  const {name, country, image, position, price, ratings, type } = player;

  return (
    <div className="px-3 xl:px-0">
      <div className="card card-compact bg-base-100 border">
        <figure className="rounded-lg">
          <img
            src={image}
            alt="players-photo"
            className="object-cover w-full h-72 p-5 rounded-lg"
          />
        </figure>
        <div className="card-body space-y-2">
          <h2 className="card-title items-center text-2xl">
            <FaUser></FaUser>
            {name}
          </h2>
          <div className="flex justify-between items-center">
            <p className="text-gray-500 flex items-center gap-2">
              <FaFlag></FaFlag>
              {country}
            </p>
            <button className="border rounded-md p-2 px-3 font-semibold text-gray-700">
              {position}
            </button>
          </div>{" "}
          <hr />
          <div className="flex justify-between font-semibold text-base">
            <p>Ratings</p>
            {ratings}
          </div>
          <h1 className="font-semibold">Type: {type}</h1>
          <div className="card-actions justify-between items-center">
            <h1 className="font-bold text-lg">$ {price}</h1>
            <button onClick={()=>handleSelectedPlayer(player)} className=" py-2 px-4 rounded-lg hover:bg-[#E7FE29] font-bold bg-gray-200">
              Choose Player
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Player.propTypes = {
  player: PropTypes.object,
  handleSelectedPlayer: PropTypes.func
}
export default Player;
