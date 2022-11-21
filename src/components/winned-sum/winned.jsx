import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import salute1 from "../../assets/salute1.gif";
import salute2 from "../../assets/salute2.gif";
import "./winned.css";

function Winned({ winnedSum, setModal }) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="winned_wrapper">
      <div className="winned_texts">
        <div
          className="winned_summ"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <h1>
            You win: <span> {winnedSum} </span>
          </h1>
        </div>
        <div
          className="retry_btn"
          data-aos="fade-down"
          data-aos-duration="1000"
          onClick={() => setModal(false)}
        >
          <p>Spin</p>
        </div>

        <div className="salutes">
          <div className="second_salute">
            <img src={salute2} alt="salute2" />
          </div>
          <div className="first_salute">
            <img src={salute1} alt="salute1" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Winned;
