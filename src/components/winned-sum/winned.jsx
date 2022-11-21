import React from "react";
import "./winned.css";
import bottom_img from "../../assets/anim_bottom.png";
import falling_coins from "../../assets/anim_falling.png";

function Winned({ winnedSum, setModal }) {
  return (
    <div className="winned_wrapper">
      <div className="retry_btn">
        <p onClick={() => setModal(false)}>Retry</p>
      </div>
        <div className="falling_coins first_line">
            <img src={falling_coins} alt="falling_coins" />
        </div>
      <div className="falling_coins second_line">
        <img src={falling_coins} alt="falling_coins" />
      </div>
      <div className="falling_coins thirst_line">
        <img src={falling_coins} alt="falling_coins" />
      </div>

      <div className="winned_summ">
        <h1>
          You win: <span> {winnedSum} </span>
        </h1>
      </div>

      <div className="bottom_img">
        <img src={bottom_img} alt="bottom_img" />
      </div>
    </div>
  );
}

export default Winned;
