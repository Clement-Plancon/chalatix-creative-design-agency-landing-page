import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="./assets/img/logo.png" alt="Logo Chalatix" />
      </div>
      <div className="containerLink">
        <div className="containerLink-link">
          <a href="#">Our Works</a>
          <a href="#">Service</a>
          <a href="#">Products</a>
        </div>
      </div>
      <div className="button">
        <button>
          <p>Get in Touch &#8594;</p>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
