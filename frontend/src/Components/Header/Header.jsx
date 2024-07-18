import React from "react";
import "../Header/Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>
          Welcome to Tomato, where delicious meals meet convenience. Explore a
          menu filled with local favorites and global cuisines, all freshly
          prepared and delivered to your door. Enjoy a seamless dining
          experience from the comfort of your home with Tomato."
        </p>
        <button>View More</button>
      </div>
    </div>
  );
};

export default Header;
