import React, { useState } from "react";

import { Header } from "./../partials/header";
import { Footer } from "./../partials/footer";
import { Download } from "./../partials/download";
import { Test } from "./../partials/test";

export function Pricing() {
  const [stock, setStock] = useState(true);
  const [bond, setBond] = useState(false);
  const [withdrawal, setWithdrawal] = useState(false);
  const [deposits, setDeposits] = useState(false);
  const [portfolio, setPortfolio] = useState(false);

  const getStock = () => {
    setStock(true);
    setBond(false);
    setWithdrawal(false);
    setDeposits(false);
    setPortfolio(false);
  };
  const getBond = () => {
    setStock(false);
    setBond(true);
    setWithdrawal(false);
    setDeposits(false);
    setPortfolio(false);
    console.log(stock);
  };
  const getWithdrawal = () => {
    setStock(false);
    setBond(false);
    setWithdrawal(true);
    setDeposits(false);
    setPortfolio(false);
  };
  const getDeposit = () => {
    setStock(false);
    setBond(false);
    setWithdrawal(false);
    setDeposits(true);
    setPortfolio(false);
  };
  const getPortfolio = () => {
    setStock(false);
    setBond(false);
    setWithdrawal(false);
    setDeposits(false);
    setPortfolio(true);
  };

  return (
    <div>
      <Header page={"pricing"} />
      <div className="pricing">
        <div className="pricing__bg--content main__container">
          <div className="pricing__bg--top-right">
            <img src={require("./../../assets/img/plant.png")} alt="stock" />
          </div>
          <div className="pricing__bg--btm-right">
            <img
              src={require("./../../assets/img/single-tree.png")}
              alt="stock"
            />
          </div>
          <div className="pricing__bg--middle-left">
            <img src={require("./../../assets/img/tree.png")} alt="stock" />
          </div>
          <div className="pricing__bg--content-header">
            <span>As easy as 1, 2, 3</span>
            <p>Inclusive Pricing</p>
          </div>
          <div className="pricing__bg--content-nav">
            <div
              onClick={getStock}
              style={
                stock ? { backgroundColor: "#2dd882", color: "#ffffff" } : null
              }
            >
              Stock
            </div>
            <div
              onClick={getBond}
              style={
                bond ? { backgroundColor: "#2dd882", color: "#ffffff" } : null
              }
            >
              Bond
            </div>
            <div
              onClick={getWithdrawal}
              style={
                withdrawal
                  ? { backgroundColor: "#2dd882", color: "#ffffff" }
                  : null
              }
            >
              Withdrawal
            </div>
            <div
              onClick={getDeposit}
              style={
                deposits
                  ? { backgroundColor: "#2dd882", color: "#ffffff" }
                  : null
              }
            >
              Deposits
            </div>
            <div
              onClick={getPortfolio}
              style={
                portfolio
                  ? { backgroundColor: "#2dd882", color: "#ffffff" }
                  : null
              }
            >
              Managed Portfolio
            </div>
          </div>

          <div className="pricing__bg--content-nav-mobile">
            <div
              onClick={getStock}
              style={
                stock ? { backgroundColor: "#2dd882", color: "#ffffff" } : null
              }
            >
              {stock ? (
                <img
                  src={require("./../../assets/img/white-stock.png")}
                  alt="stock"
                />
              ) : (
                <img
                  src={require("./../../assets/img/green-stock.png")}
                  alt="stock"
                />
              )}
            </div>
            <div
              onClick={getBond}
              style={
                bond ? { backgroundColor: "#2dd882", color: "#ffffff" } : null
              }
            >
              {bond ? (
                <img
                  src={require("./../../assets/img/white-bond.png")}
                  alt="stock"
                />
              ) : (
                <img
                  src={require("./../../assets/img/green-bond.png")}
                  alt="stock"
                />
              )}
            </div>
            <div
              onClick={getWithdrawal}
              style={
                withdrawal
                  ? { backgroundColor: "#2dd882", color: "#ffffff" }
                  : null
              }
            >
              {withdrawal ? (
                <img
                  src={require("./../../assets/img/white-with.png")}
                  alt="stock"
                />
              ) : (
                <img
                  src={require("./../../assets/img/green-with.png")}
                  alt="stock"
                />
              )}
            </div>
            <div
              onClick={getDeposit}
              style={
                deposits
                  ? { backgroundColor: "#2dd882", color: "#ffffff" }
                  : null
              }
            >
              {deposits ? (
                <img
                  src={require("./../../assets/img/white-deposit.png")}
                  alt="stock"
                />
              ) : (
                <img
                  src={require("./../../assets/img/green-deposit.png")}
                  alt="stock"
                />
              )}
            </div>
            <div
              onClick={getPortfolio}
              style={
                portfolio
                  ? { backgroundColor: "#2dd882", color: "#ffffff" }
                  : null
              }
            >
              {portfolio ? (
                <img
                  src={require("./../../assets/img/white-port.png")}
                  alt="stock"
                />
              ) : (
                <img
                  src={require("./../../assets/img/green-port.png")}
                  alt="stock"
                />
              )}
            </div>
          </div>
          <div className="pricing__bg--content-price">
            <div className="pricing__bg--content-price-top-left">
              <img src={require("./../../assets/img/group-2.png")} alt="" />
            </div>
            <div className="pricing__bg--content-price-top-right">
              <img src={require("./../../assets/img/group-1.png")} alt="" />
            </div>
            <div className="pricing__bg--content-price-child">
              <div>
                <span>Starter</span>
                <p>Free</p>
                <ul>
                  <li>Automated Investing</li>
                  <li>Smart Portfolios</li>
                  <li>Grow Magazine</li>
                  <li>Found Money</li>
                  <li>Here For You</li>
                </ul>
                <div>Get Started &nbsp;&nbsp; &#8594;</div>
              </div>
            </div>
            <div className="pricing__bg--content-price-child">
              <div>
                <span>Advanced</span>
                <p>$1</p>
                <ul>
                  <li>Automated Investing</li>
                  <li>Smart Portfolios</li>
                  <li>Grow Magazine</li>
                  <li>Found Money</li>
                  <li>Here For You</li>
                </ul>
                <div style={{ background: "#2DD882", color: "#fff" }}>
                  Get Started &nbsp;&nbsp; &#8594;
                </div>
              </div>
            </div>
            <div className="pricing__bg--content-price-child">
              <div>
                <span>Professional</span>
                <p>$3</p>
                <ul>
                  <li>Automated Investing</li>
                  <li>Smart Portfolios</li>
                  <li>Grow Magazine</li>
                  <li>Found Money</li>
                  <li>Here For You</li>
                </ul>
                <div>Get Started &nbsp;&nbsp; &#8594;</div>
              </div>
            </div>
          </div>
          <div className="pricing__bg--content-features">
            <div className="pricing__bg--content-features-child">
              <div>
                <div>
                  <img
                    src={require("./../../assets/img/price-1.png")}
                    alt="logo"
                  />
                </div>
                <p>Wallet Transfers</p>
                <span>
                  Download the "Trove" app on the Google Play Store, complete
                  the KYC process to begin investing in little or no time.
                </span>
              </div>
            </div>
            <div className="pricing__bg--content-features-child">
              <div>
                <div>
                  <img
                    src={require("./../../assets/img/price-2.png")}
                    alt="logo"
                  />
                </div>
                <p>Withdrawal</p>
                <span>
                  With as little as ₦1000 get exposure to Nigerian Stocks, FGN
                  Bonds & Mutual Funds.
                </span>
              </div>
            </div>
            <div className="pricing__bg--content-features-child">
              <div>
                <div>
                  <img
                    src={require("./../../assets/img/price-3.png")}
                    alt="logo"
                  />
                </div>
                <p>BVN Verification</p>
                <span>
                  Trove is more than an investment app. You'll have access to
                  tools that would help you become a savvy investor.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Download />
      <Footer />
      <Test page={"pricing"} />
    </div>
  );
}
