import "./Banner.css";
import bannerIcon from "./../../assets/banner-main.png";
import PropTypes from 'prop-types';


const Banner = ({handleCreditCoin, claimCredit}) => {

  return (
    <div className="px-3 xl:px-0">
      <div className="hero  bg-image bg-black container mx-auto rounded-2xl mt-2 text-white p-5 sm:p-8">
        <div className="hero-content text-center">
          <div>
            <img src={bannerIcon} alt="banner icon" className="justify-self-center mb-5 w-32 sm:w-auto"/>
            <h1 className="text-3xl sm:text-4xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <p className="py-6 text-gray-500">
            Beyond Boundaries Beyond Limits
            </p>
            <button onClick={()=>handleCreditCoin(claimCredit)} className="btn bg-[#E7FE29] hover:bg-[#b0c305] font-semibold text-lg">Claim Free Credit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {
    handleCreditCoin: PropTypes.func,
    claimCredit: PropTypes.number
}
export default Banner;
