import React, { useState } from "react";
import { Link } from "react-router-dom";

export function Header(props) {
  const [mobile, setMobile] = useState(false);

  const mobileMenu = () => {
    if (mobile) {
      setMobile(false);
    } else {
      setMobile(true);
    }

    console.log(mobile);
  };

  return (
    <header className="header">
      <div className="header__logo">
        {props.page === "home" ? (
          <img src={require("./../../assets/img/logo.png")} alt="logo" />
        ) : (
          <Link to="/">
            <img src={require("./../../assets/img/logo.png")} alt="logo" />
          </Link>
        )}
      </div>
      <div className="header__nav">
        <div className="header__nav--menu">
          <div>{props.page === "home" ? "Home" : <Link to="/">Home</Link>}</div>
          <div>
            {props.page === "about" ? "About" : <Link to="/about">About</Link>}
          </div>
          <div>
            {props.page === "faq" ? "FAQs" : <Link to="/faq">FAQs</Link>}
          </div>
        </div>
        <div className="header__nav--bottom">
          <div className="header__nav--bottom-left">
            <div>
              <Link to="/signup">
                <div
                  style={{ width: "100%", height: "46px", paddingTop: "13px" }}
                >
                  Sign Up
                </div>
              </Link>
            </div>
          </div>
          <div className="header__nav--bottom-right">
            <div>Download Now &#8594;</div>
          </div>
        </div>
      </div>
      <div className="header__nav--mobile">
        <div onClick={mobileMenu}>
          <div />
          <div />
          <div />
        </div>
      </div>
      <div className="header__nav--mobile-menu-cover" />
      <div className="header__nav--mobile-menu">
        <div className="header__nav--mobile-menu-text">Home</div>
        <div className="header__nav--mobile-menu-text">Why Trove</div>
        <div className="header__nav--mobile-menu-text">FAQs</div>
        <div className="header__nav--mobile-menu-botton">d</div>
      </div>
    </header>
  );
}
