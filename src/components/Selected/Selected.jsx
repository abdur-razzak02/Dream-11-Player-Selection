import PropTypes from "prop-types";
import Selectedplayers from "./Selectedplayers";

const Selected = ({ choosePlayer,handleActiveButton,handleRemovePlayer }) => {

  return (
    <div>
          {
              choosePlayer.map((selected) => <Selectedplayers selected={selected} key={selected.id} handleRemovePlayer={handleRemovePlayer}></Selectedplayers>)
          }
          <div className="container mx-auto my-5 px-3 xl:px-0">
          <button onClick={()=>handleActiveButton()} className="add-players-btn">Add Player</button>
          </div>
    </div>
  );
};

Selected.propTypes = {
    choosePlayer: PropTypes.array,
    handleActiveButton: PropTypes.func,
    handleRemovePlayer: PropTypes.func
};
export default Selected;
