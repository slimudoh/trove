import React from "react";
import { Link } from "react-router-dom";

import { Test } from "./../partials/test";

export function Signup() {
  return (
    <div className="auth__container">
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
          <p>START INVESTING WITH TROVE</p>
          <span>Create an account</span>
          <div>
            <form>
              <div className="auth__container--box-input-div">
                <label htmlFor="name">Your Full Name</label>
                <input type="text" placeholder="Ayomide Onasanya" />
                <div>
                  {" "}
                  <img
                    style={{ width: "22px" }}
                    src={require("./../../assets/img/pass.png")}
                    alt=""
                  />
                </div>
              </div>

              <div className="auth__container--box-input-div">
                <label htmlFor="phone">Phone Number</label>
                <input type="text" />
              </div>

              <div className="auth__container--box-input-div">
                <label htmlFor="email">Email Address</label>
                <input type="text" />
              </div>

              <div className="auth__container--box-input-div">
                <label htmlFor="password">Password</label>
                <input type="password" />
              </div>

              <div className="auth__container--box-select">
                <div className="auth__container--box-select-left">
                  <select>
                    <option>Gender</option>
                  </select>
                  <div>
                    <img
                      style={{ width: "15px" }}
                      src={require("./../../assets/img/down.png")}
                      alt=""
                    />
                  </div>
                </div>

                <div className="auth__container--box-select-right">
                  <input type="text" placeholder="Date of Birth" />
                  <div>
                    <img
                      style={{ width: "16px" }}
                      src={require("./../../assets/img/calendar.png")}
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <button className="auth__container--box-button">
                Create my account
              </button>
            </form>
          </div>
        </div>
        <div className="auth__container--box-footer">
          © Copyright 2019 - Trove Technologies Limited | All Rights Reserved
        </div>
      </div>
      <Test page={"signup"} />
    </div>
  );
}
