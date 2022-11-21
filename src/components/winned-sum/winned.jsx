import React from "react";
import "./winned.css";
import salute1 from "../../assets/salute1.gif";
import salute2 from "../../assets/salute2.gif";

function Winned({ winnedSum, setModal }) {
  return (
    <div className="winned_wrapper">
      <div className="winned_texts">
        <div className="winned_summ">
          <h1>
            You win: <span> {winnedSum} </span>
          </h1>
        </div>
        <div className="retry_btn" onClick={() => setModal(false)}>
          <p>Spin</p>
        </div>

        <div className="salutes">
          <div className="second_salute">
            <img src={salute2} alt="salute2" />
          </div>
          <div className="first_salute">
            <img src={salute1} alt="salute1" />
          </div>
          <div className="first_salute">
            <img src={salute1} alt="salute1" />
          </div>
          <div className="second_salute">
            <img src={salute2} alt="salute2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Winned;
