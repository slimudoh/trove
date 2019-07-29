import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export function Footer(props) {
  const goToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    goToTop();
  }, []);

  return (
    <div className="footer">
      <div className="footer__main">
        <div className="footer__main--logo">
          <div className="footer__main--logo-top">
            <img src={require("./../../assets/img/logo.png")} alt="logo" />
          </div>
          <div className="footer__main--logo-text">
            © Copyright 2019 - Trove Technologies Limited | All Rights Reserved
          </div>
        </div>
        <div className="footer__main--product">
          <p className="footer__main--header">Product</p>
          <div className="footer__main--menu-item">Android App</div>
          <div className="footer__main--menu-item">IOS App (coming soon)</div>
          <div className="footer__main--menu-item">Blog</div>
        </div>
        <div className="footer__main--legal">
          <p className="footer__main--header">Legal</p>
          <div className="footer__main--menu-item">
            {props.page === "terms" ? (
              "Terms and Conditions"
            ) : (
              <Link to="/terms">Terms and Conditions</Link>
            )}
          </div>
          <div className="footer__main--menu-item">Privacy Policy</div>
          <div className="footer__main--menu-item">
            {props.page === "faq" ? "FAQs" : <Link to="/faq">FAQs</Link>}
          </div>
        </div>
        <div className="footer__main--connect">
          <p className="footer__main--header">Connect</p>
          <div className="footer__main--menu-item">
            E-Mail: <a href="mailto:hello@troveapp.co"> hello@troveapp.co</a>
          </div>
          <div className="footer__main--menu-item">
            Phone: <a href="tel:+2349077132746"> (234) 907-713-2746</a>
          </div>
          <div className="footer__main--menu-media">
            <div>
              <a href="facebook.com" target="_blank">
                <img src={require("./../../assets/img/facebook.png")} alt="" />
              </a>
            </div>
            <div>
              <a href="twitter.com" target="_blank">
                <img src={require("./../../assets/img/twitter.png")} alt="" />
              </a>
            </div>
            <div>
              <a href="instagram.com" target="_blank">
                <img src={require("./../../assets/img/instagram.png")} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__text">
        Trove is a technology platform, not a registered broker-dealer or
        investment adviser. Trove does not offer its own recommendations of any
        security or provide its own research to any user regarding any security
        transaction or order. Please note, investing involves risk and
        investments may lose value. Past performance does not guarantee future
        results.
        <br />
        <br />
        Brokerage services are provided by the following:
        <br />
        <br />
        US-traded securities, including fractional trading, are provided to
        Trove users by DriveWealth LLC, a regulated member of FINRA/SIPC.
        Drivewealth is a member of SIPC, which protects securities customers of
        its members up to $500,000 (including $250,000 for claims for cash).
        Explanatory brochure available upon request or at www.sipc.org.
        <br />
        <br />
        Nigerian account traded securities are provided by Sigma Securities LTD,
        a SEC registered broker-dealer and member of the Nigerian Stock
        Exchange. Sigma Securities does not make any personal recommendations to
        buy, sell or otherwise deal in investments. Investors make their own
        investment decisions. The services and securities provided by Sigma
        Securities may not be suitable for all customers and, if you have any
        doubts, you should seek advice from an independent financial adviser.
        <br />
        <br />
        Managed Portfolios are provided by ARM Investment Managers, a licensed
        Asset manager in Lagos, Nigeria.
        <br />
        <br />
        Trove logo and branding remains the intellectual property of Trove
        Technologies Limited.
      </div>
    </div>
  );
}
