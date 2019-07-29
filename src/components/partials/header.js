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

      {mobile ? (
        <div className="header__nav--mobile-menu">
          <div className="mobile__logo">
            <img
              src={require("./../../assets/img/white-logo.png")}
              alt="logo"
            />
          </div>
          <div className="header__nav--mobile-menu-text">
            {props.page === "home" ? (
              <>
                <div className="header__nav--mobile-menu-text-icon">
                  <img
                    src={require("./../../assets/img/home.png")}
                    alt="home"
                  />
                </div>
                <div className="header__nav--mobile-menu-text-item">Home</div>
              </>
            ) : (
              <Link to="/">
                <div className="header__nav--mobile-menu-text-icon">
                  <img
                    src={require("./../../assets/img/home.png")}
                    alt="home"
                  />
                </div>
                <div className="header__nav--mobile-menu-text-item">Home</div>
              </Link>
            )}
          </div>

          <div className="header__nav--mobile-menu-text">
            {props.page === "about" ? (
              <>
                <div className="header__nav--mobile-menu-text-icon">
                  <img
                    src={require("./../../assets/img/about.png")}
                    alt="Why Trove"
                  />
                </div>
                <div className="header__nav--mobile-menu-text-item">
                  Why Trove
                </div>
              </>
            ) : (
              <Link to="/about">
                <div className="header__nav--mobile-menu-text-icon">
                  <img
                    src={require("./../../assets/img/about.png")}
                    alt="Why Trove"
                  />
                </div>
                <div className="header__nav--mobile-menu-text-item">
                  Why Trove
                </div>
              </Link>
            )}
          </div>

          <div className="header__nav--mobile-menu-text">
            {props.page === "faq" ? (
              <>
                <div className="header__nav--mobile-menu-text-icon">
                  <img src={require("./../../assets/img/faq.png")} alt="FAQs" />
                </div>
                <div className="header__nav--mobile-menu-text-item">FAQs</div>
              </>
            ) : (
              <Link to="/faq">
                <div className="header__nav--mobile-menu-text-icon">
                  <img src={require("./../../assets/img/faq.png")} alt="FAQs" />
                </div>
                <div className="header__nav--mobile-menu-text-item">FAQs</div>
              </Link>
            )}
          </div>

          <div className="header__nav--mobile-menu-text">
            {props.page === "signup" ? (
              <>
                <div className="header__nav--mobile-menu-text-icon">
                  <img
                    src={require("./../../assets/img/reg.png")}
                    alt="signup"
                  />
                </div>
                <div className="header__nav--mobile-menu-text-item">Signup</div>
              </>
            ) : (
              <Link to="/signup">
                <div className="header__nav--mobile-menu-text-icon">
                  <img
                    src={require("./../../assets/img/reg.png")}
                    alt="signup"
                  />
                </div>
                <div className="header__nav--mobile-menu-text-item">Signup</div>
              </Link>
            )}
          </div>

          <div className="header__nav--mobile-menu-text">
            <div className="header__nav--mobile-menu-text-icon">
              <img
                src={require("./../../assets/img/dloads.png")}
                alt="download"
              />
            </div>
            <div className="header__nav--mobile-menu-text-item">Downloads</div>
          </div>
        </div>
      ) : null}
      {/* <div className="header__nav--mobile-menu">
        <div className="mobile__logo">
          <img src={require("./../../assets/img/white-logo.png")} alt="logo" />
        </div>
        <div className="header__nav--mobile-menu-text">
          {props.page === "home" ? (
            <>
              <div className="header__nav--mobile-menu-text-icon">
                <img src={require("./../../assets/img/home.png")} alt="home" />
              </div>
              <div className="header__nav--mobile-menu-text-item">Home</div>
            </>
          ) : (
            <Link to="/">
              <div className="header__nav--mobile-menu-text-icon">
                <img src={require("./../../assets/img/home.png")} alt="home" />
              </div>
              <div className="header__nav--mobile-menu-text-item">Home</div>
            </Link>
          )}
        </div>

        <div className="header__nav--mobile-menu-text">
          {props.page === "about" ? (
            <>
              <div className="header__nav--mobile-menu-text-icon">
                <img
                  src={require("./../../assets/img/about.png")}
                  alt="Why Trove"
                />
              </div>
              <div className="header__nav--mobile-menu-text-item">
                Why Trove
              </div>
            </>
          ) : (
            <Link to="/about">
              <div className="header__nav--mobile-menu-text-icon">
                <img
                  src={require("./../../assets/img/about.png")}
                  alt="Why Trove"
                />
              </div>
              <div className="header__nav--mobile-menu-text-item">
                Why Trove
              </div>
            </Link>
          )}
        </div>

        <div className="header__nav--mobile-menu-text">
          {props.page === "faq" ? (
            <>
              <div className="header__nav--mobile-menu-text-icon">
                <img src={require("./../../assets/img/faq.png")} alt="FAQs" />
              </div>
              <div className="header__nav--mobile-menu-text-item">FAQs</div>
            </>
          ) : (
            <Link to="/faq">
              <div className="header__nav--mobile-menu-text-icon">
                <img src={require("./../../assets/img/faq.png")} alt="FAQs" />
              </div>
              <div className="header__nav--mobile-menu-text-item">FAQs</div>
            </Link>
          )}
        </div>

        <div className="header__nav--mobile-menu-text">
          {props.page === "signup" ? (
            <>
              <div className="header__nav--mobile-menu-text-icon">
                <img src={require("./../../assets/img/reg.png")} alt="signup" />
              </div>
              <div className="header__nav--mobile-menu-text-item">Signup</div>
            </>
          ) : (
            <Link to="/signup">
              <div className="header__nav--mobile-menu-text-icon">
                <img src={require("./../../assets/img/reg.png")} alt="signup" />
              </div>
              <div className="header__nav--mobile-menu-text-item">Signup</div>
            </Link>
          )}
        </div>

        <div className="header__nav--mobile-menu-text">
          <div className="header__nav--mobile-menu-text-icon">
            <img
              src={require("./../../assets/img/dloads.png")}
              alt="download"
            />
          </div>
          <div className="header__nav--mobile-menu-text-item">Downloads</div>
        </div>
      </div> */}
    </header>
  );
}
