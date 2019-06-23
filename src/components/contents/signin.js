import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export function Signin() {
  const goToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    goToTop();
  }, []);
  return (
    <div className="auth__container">
      <div className="auth__container-design-bottom">
        <img src={require("./../../assets/img/signup.png")} alt="logo" />
      </div>
      <div className="auth__container-design-left">
        <img src={require("./../../assets/img/tree.png")} alt="logo" />
      </div>
      <div className="auth__container-design-top">
        <img src={require("./../../assets/img/plant-tail.png")} alt="logo" />
      </div>
      <div className="auth__container--box main__container">
        <div className="auth__container--box-header">
          <div className="auth__container--box-header-logo">
            <Link to="/">
              <img src={require("./../../assets/img/logo.png")} alt="logo" />
            </Link>
          </div>
          <div className="auth__container--box-header-nav">
            <Link to="/">&#8592; Back to main site</Link>
          </div>
        </div>
        <div className="auth__container--box-input">
          <p>WELCOME</p>
          <span>SIGN IN</span>
          <div>
            <form>
              <div className="auth__container--box-input-div">
                <label htmlFor="email">Email Address</label>
                <input type="text" />
              </div>

              <div className="auth__container--box-input-div">
                <label htmlFor="password">Password</label>
                <input type="password" />
              </div>

              <button className="auth__container--box-button">Sign in</button>
            </form>
          </div>
        </div>
        <div className="auth__container--box-footer">
          © Copyright 2019 - Trove Technologies Limited | All Rights Reserved
        </div>
      </div>
    </div>
  );
}
