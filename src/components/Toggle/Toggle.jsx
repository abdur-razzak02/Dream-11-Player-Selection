import PropTypes from "prop-types";

const Toggle = ({handleActiveButton, isActive, choosePlayer}) => {
    
  return (
    <div className="container mx-auto px-3 xl:px-0">
      <div className="flex justify-between items-center">
              <h1 className="text-xl xl:text-3xl font-bold py-8">{ isActive ? 'Available Players' : `Selected Player ${choosePlayer.length}/6`}</h1>
        <div className="flex gap-2">
          <button
            onClick={()=>handleActiveButton()}
            className={`${isActive ? "custom-btn" : "custom-2"}`} 
          > Available </button>
          <button
            onClick={()=>handleActiveButton()}
            className={`${isActive ? "custom-2" : "custom-btn"}`}
          >
            Selected ({choosePlayer.length})
          </button>
        </div>
      </div>
    </div>
  );
};

Toggle.propTypes = {
    handleActiveButton: PropTypes.func,
    isActive: PropTypes.bool,
    choosePlayer: PropTypes.number
  };
export default Toggle;
