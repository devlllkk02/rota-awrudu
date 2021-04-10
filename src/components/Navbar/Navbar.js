import React from "react";
import "./Navbar.scss";
function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__title">
          <p>Cast 4 Awrudu</p>
        </div>

        <div className="navbar__user">
          <div className="navbar__user__image">
            <img src="./Images/user.svg" alt="" />
          </div>
          <div className="navbar__user__description">
            <div className="navbar__user__name">
              <p>Your Name</p>
            </div>
            <div className="navbar__user__status">
              <p>Log Out</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
