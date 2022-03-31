import React from "react";

const FirstSection = () => {
  return (
    <div className="first-section">
      <div className="leftContainer">
        <img src="./assets/img/image-left.svg" alt="" />
      </div>
      <div className="centerContainer">
        <h1>
          Chalatix <span>Agency,</span>
        </h1>
        <div className="centerContainer-bottom">
          <p>
            Turning and bringing <span>idea</span> into <span>amazing </span>
            product through next level visual diplay.
          </p>
          <div className="lineSeparator"></div>
          <div className="socialIcon">
            <div className="behanceCircle">
              <div className="purpleCircle"><img src="./assets/img/icons_behance.svg" alt="" /></div>
              <p>Behance.</p>
            </div>
            <div className="dribbbleCircle">
              <div className="purpleCircle"><img src="./assets/img/icons_dribbble.svg" alt="" /></div>
              <p>Dribbble.</p>
            </div>
            <div className="instagramCircle">
              <div className="purpleCircle"><img src="./assets/img/icons_instagram.svg" alt="" /></div>
              <p>Instagram.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="rightContainer">
        <div className="cardContainer">
          <div className="bigPurpleCircle">
            <p>Get in Touch</p>
          </div>
          <img src="./assets/img/image-right.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
