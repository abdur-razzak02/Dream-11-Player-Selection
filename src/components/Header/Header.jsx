import logo from "./../../assets/logo.png";
import { FaSackDollar } from "react-icons/fa6";
import PropTypes from 'prop-types';

const Header = ({claimCredit}) => {

  return (
    <div className=" py-3 px-3 xl:px-0 sticky top-0 z-10 bg-white">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <img src={logo} alt="logo" className="w-12" />
        </div>
        <div className="flex gap-5 lg:gap-12 justify-between items-center">
          <div className="hidden sm:block">
            <ul className="flex gap-5 lg:gap-10 items-center text-gray-500">
              <li>Home</li>
              <li>Fixture</li>
              <li>Teams</li>
              <li>Schedules</li>
            </ul>
          </div>
          <h1 className=" border rounded-lg p-2 flex justify-center items-center gap-3 font-semibold text-lg">
            {claimCredit} Coin
            <span className="text-orange-500 text-xl">
              <FaSackDollar></FaSackDollar>
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
    claimCredit: PropTypes.number
}
export default Header;
