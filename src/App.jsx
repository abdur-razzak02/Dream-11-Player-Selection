import "./App.css";
import { useState } from "react";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Newsletter from "./components/Newsletter/Newsletter";
import Players from "./components/Players/Players";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Selected from "./components/Selected/Selected";
import Toggle from "./components/Toggle/Toggle";

function App() {
  // add money to account
  const [claimCredit, setClaimCredit] = useState(0);
  const handleCreditCoin = (currenCoin) => {
    setClaimCredit(currenCoin + 5000000);
    toast.success("Credit added to your account");
  };

  // player selection
  const [choosePlayer, setChoosePlayer] = useState([]);
  const handleSelectedPlayer = (player) => {
    if (choosePlayer.find(id => id === player.id)) {
      return toast.warn("Already added");
    }
    if (claimCredit < player.price) {
      toast.warn("Insufficient balance");
      return
    }
    if (choosePlayer.length >= 6) {
      toast.error("Maximum 6 Players");
      return
    }
    else if (claimCredit > player.price) {
      const newPlayer = [...choosePlayer, player];
      setChoosePlayer(newPlayer);
      setClaimCredit(claimCredit - player.price);
    }
  };
  
  // delete player 
  const handleRemovePlayer = (id) => {
    setChoosePlayer(choosePlayer.filter(p => p.id !== id ));
  }

  // button toggle
  const [isActive, setActive] = useState(true);
  const handleActiveButton = () => {
    setActive(!isActive);
  };

  

  return (
    <>
      <Header claimCredit={claimCredit}></Header>

      <Banner
        handleCreditCoin={handleCreditCoin}
        claimCredit={claimCredit}></Banner>

      <Toggle
        choosePlayer={choosePlayer}
        isActive={isActive}
        handleActiveButton={handleActiveButton}></Toggle>

      {isActive ? (
        <Players
          handleActiveButton={handleActiveButton}
          isActive={isActive}
          handleSelectedPlayer={handleSelectedPlayer}
          handleCreditCoin={handleCreditCoin}></Players>
      ) : (
          <Selected choosePlayer={choosePlayer}
            handleActiveButton={handleActiveButton}
            handleRemovePlayer={handleRemovePlayer}></Selected>
      )}

      <div className="relative">
        <Newsletter></Newsletter>
        <Footer></Footer>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
    </>
  );
}

export default App;
