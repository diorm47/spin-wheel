import React, { useState } from "react";
import WheelComponent from "./components/wheel";
import "./index.css";
import coin_left from "./assets/coins.png";
import right_coins from "./assets/right_coins.png";
import Winned from "./components/winned-sum/winned";

const App = () => {
  const [modal, setModal] = useState(false);
  const [winnedSum, setWinnedSum] = useState(0);
  const segments = [
    "300$",
    "5000$",
    "4000$",
    "600$",
    "900$",
    "100$",
    "500$",
    "200$",
    "1000$",
    "10$",
    "70$",
    "100$",
    "600$",
    "7000$",
    "50$",
  ];
  const segColors = [
    "#030656bf",
    "#030656bf",
    "#030656bf",
    "#030656bf",
    "#030656bf",
    "#030656bf",
    "#030656bf",
    "#030656bf",
    "#030656bf",
    "#030656bf",
    "#030656bf",
    "#030656bf",
    "#030656bf",
    "#030656bf",
    "#030656bf",
  ];
  const onFinished = (winner) => {
    setModal(true);
    setWinnedSum(winner);
  };

  return (
    <>
      <div className="main_text">
        <b>
          S<span>pin</span> wh<span>ee</span>l
        </b>
      </div>

      <WheelComponent
        segments={segments}
        segColors={segColors}
        onFinished={(winner) => onFinished(winner)}
        primaryColor="black"
        contrastColor="white"
        buttonText=""
        isOnlyOnce={false}
        size={260}
        upDuration={100}
        downDuration={1000}
        fontFamily="Arial"
      />
      <div className="right_text">
        <b>
          W<span>in</span> mo<span>ne</span>y
        </b>
      </div>
      <div className="coin_left_img">
        <img src={coin_left} alt="coin_left" />
      </div>
      <div className="coin_right_img">
        <img src={right_coins} alt="coin_right" />
      </div>

      {!modal || <Winned winnedSum={winnedSum} setModal={setModal} />}
    </>
  );
};

export default App;
