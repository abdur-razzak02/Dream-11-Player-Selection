import PropTypes from "prop-types";
import { MdDeleteForever } from "react-icons/md";

const Selectedplayers = ({ selected,handleRemovePlayer }) => {
    const {name, image, position,price} = selected      

    return (
        <div>
            <div className="container mx-auto px-3 xl:px-0">
                <div className="border rounded-lg p-4 flex justify-between items-center mb-5 mt-5">
                    <div className="flex gap-5 items-center">
                        <div><img src={image} alt="player-image" className="w-20 h-20 rounded-lg"/></div>
                        <div>
                        <h1 className="text-xl font-semibold">Name: {name}</h1>
                        <p className="text-gray-500 text-lg">{ position}</p>
                        <p className="text-gray-800 text-lg">{ price} $</p>
                        </div>
                    </div>
                    <div>
                        <button onClick={()=>handleRemovePlayer(selected.id)} className="text-red-600 text-5xl mr-3">
                            <MdDeleteForever />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Selectedplayers.propTypes = {
    selected: PropTypes.object,
    handleRemovePlayer: PropTypes.func
  };
export default Selectedplayers;