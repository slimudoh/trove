import React from "react";

import { Header } from "./../partials/header";
import { Footer } from "./../partials/footer";
import { Test } from "./../partials/test";
import { Download } from "./../partials/download";

export function Home(props) {
  return (
    <div>
      <Header page={"home"} />
      <div className="home__content--header">
        <span>Investing simplified</span>
        <p>
          Forget high account opening fees. Start investing in US, Chinese &
          Nigerian Stocks, Government Bonds, US ETF’s and more from as little as
          ₦1000
        </p>
        <div>
          <div className="home__content--header-play">
            <img src={require("./../../assets/img/dark-play.png")} alt="" />
          </div>
          <div className="home__content--header-app">
            <img src={require("./../../assets/img/dark-app.png")} alt="" />
          </div>
          <div className="home__content--header-phones">
            <img src={require("./../../assets/img/phones.png")} alt="" />
          </div>
        </div>
      </div>
      <div className="home__content--invest">
        <div className="home__content--invest-top">
          <div className="home__content--invest-design-top-left">
            <img src={require("./../../assets/img/phone-left.png")} alt="" />
          </div>
          <div className="home__content--invest-design-top-right">
            <img src={require("./../../assets/img/phone-right.png")} alt=""  />
          </div>

          <div className="home__content--invest-top-content">
            <div>
              <div className="home__content--invest-top-left">
                <img src={require("./../../assets/img/mobile.png")} alt="" />
              </div>
              <div className="home__content--invest-top-right">
                <h3>INVEST SMARTER</h3>
                <span>A trading account that works as hard as you do.</span>
                <p>
                  The idea is - by linking a debit card to the Trove app, you
                  can get spare change from your pockets and funnel it directly
                  into an investment portfolio almost without you noticing.
                </p>
                <div>
                  <div>Get Started  &#8594;</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home__content--invest-btm">
          <span>FEATURED ASSETS</span>
          <p>Real companies. Real Money</p>
          <div>
            <div>
              <img src={require("./../../assets/img/invest-7.png")} alt="" />
            </div>
            <div>
              <img src={require("./../../assets/img/invest-1.png")} alt="" />
            </div>

            <div>
              <img src={require("./../../assets/img/invest-3.png")} alt="" />
            </div>

            <div>
              <img src={require("./../../assets/img/invest-6.png")} alt="" />
            </div>
            <div>
              <img src={require("./../../assets/img/invest-5.png")} alt="" />
            </div>
            <div>
              <img src={require("./../../assets/img/invest-2.png")} alt="" />
            </div>
            <div>
              <img src={require("./../../assets/img/invest-4.png")} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="home__content--why">
        <div className="home__content--why-design-left">
          <img src={require("./../../assets/img/back-tree.png")} alt="" />
        </div>
        <div className="home__content--why-design-right">
          <img src={require("./../../assets/img/plant.png")} alt="" />
        </div>
        <h3>Why TROVE</h3>
        <span>Embrace Micro Investing</span>
        <p>
          The idea is - by linking a debit card to the Trove app, you can get
          spare change from your pockets and funnel it directly into an
          investment portfolio almost without you noticing.
        </p>
        <div className="home__content--why-box">
          <div>
            <div>
              <img src={require("./../../assets/img/price-1.png")} alt="" />
            </div>
            <p>Register in Minutes</p>
            <span>
              Download the "Trove" app on the Google Play Store, complete the
              KYC process to begin investing in little or no time.
            </span>
          </div>
          <div>
            <div>
              <img src={require("./../../assets/img/price-2.png")} alt="" />
            </div>
            <p>Low Entry Point</p>
            <span>
              With as little as ₦1000 get exposure to Nigerian Stocks, FGN Bonds
              & Mutual Funds.
            </span>
          </div>
          <div>
            <div>
              <img src={require("./../../assets/img/price-3.png")} alt="" />
            </div>
            <p>Learn Over Time</p>
            <span>
              Trove is more than an investment app. You'll have access to tools
              that would help you become a savvy investor.
            </span>
          </div>
        </div>
      </div>
      <div className="home__content--steps">
        <div className="home__content--steps-design_bottom">
          <img src={require("./../../assets/img/plant-pot.png")} alt="" />
        </div>
        <div>
          <div className="home__content--steps-left">
            <span>HOW IT WORKS</span>
            <p>Trove in 4 steps</p>
            <div>
              <div className="home__content--steps-left-box">
                <div className="home__content--steps-left-box-left">01</div>
                <div className="home__content--steps-left-box-right">
                  <span>Create your account</span>
                  <p>
                    The idea is - by linking a debit card to the Trove app, you
                    can get spare change from your pockets
                  </p>
                </div>
              </div>

              <div className="home__content--steps-left-box">
                <div className="home__content--steps-left-box-left">02</div>
                <div className="home__content--steps-left-box-right">
                  <span>Fund your wallet</span>
                  <p>
                    The idea is - by linking a debit card to the Trove app, you
                    can get spare change from your pockets
                  </p>
                </div>
              </div>

              <div className="home__content--steps-left-box">
                <div className="home__content--steps-left-box-left">03</div>
                <div className="home__content--steps-left-box-right">
                  <span>Trade Away</span>
                  <p>
                    The idea is - by linking a debit card to the Trove app, you
                    can get spare change from your pockets
                  </p>
                </div>
              </div>

              <div className="home__content--steps-left-box">
                <div className="home__content--steps-left-box-left">04</div>
                <div className="home__content--steps-left-box-right">
                  <span>Withdraw anytime</span>
                  <p>
                    The idea is - by linking a debit card to the Trove app, you
                    can get spare change from your pockets
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="home__content--steps-right">
            <div>
              <div className="home__content--steps-right-design-left">
                <img
                  src={require("./../../assets/img/phone-left.png")}
                  alt=""
                />
              </div>
              <div className="home__content--steps-right-design-right">
                <img
                  src={require("./../../assets/img/phone-right.png")}
                  alt=""
                />
              </div>
              <img src={require("./../../assets/img/mobile.png")} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="home__content--app">
        <div className="home__content--app-left">
          <div>
            <img src={require("./../../assets/img/mobile.png")} alt="" />
          </div>
        </div>
        <div className="home__content--app-right">
          <h3>stocks | bonds | treasury bills | mutual funds</h3>
          <p>
            One app to rule <br /> them all
          </p>
          <span>
            Buy any publicly traded equity, bond or foreign assets as a one off
            investment using a debit card or bank transfer. Also sell your
            assets right from the app & have the funds deposited into your
            account. With Trove, you can learn to invest in a plethora of
            financial assets as a millennial.
          </span>
          <div>
            <div>Start Investing &#8594;</div>
          </div>
        </div>
      </div>
      <div className="home__content--safety">
        <div>
          <div className="home__content--safety-left">
            <span>SAFETY FIRST</span>
            <p>Trusted & Secure</p>
            <div>
              <span>Bank-grade Security</span>
              <p>
                We’re serious about security and ensure your personal
                information is fully encrypted and securely stored. We guard all
                of your personal information with 256-bit encryption and other
                cutting-edge security technologies.
              </p>
            </div>
            <div>
              <span>Best-In-Class Investments</span>
              <p>
                We’re serious about security and ensure your personal
                information is fully encrypted and securely stored.
              </p>
            </div>
          </div>
          <div className="home__content--safety-right">
            <img src={require("./../../assets/img/safety.png")} alt="" />
          </div>
        </div>
      </div>
      <div className="home__content--clients">
        <div className="home__content--btm-right">
          <img
            src={require("./../../assets/img/single-tree.png")}
            alt="stock"
          />
        </div>
        <div className="home__content--clients-child">
          <p>You're In Safe Hands.</p>
          <span>We work with renowned and trusted brands.</span>
          <div>
            <div>
              <img src={require("./../../assets/img/client-1.png")} alt="" />
            </div>
            <div>
              <img src={require("./../../assets/img/client-2.png")} alt="" />
            </div>
            <div>
              <img src={require("./../../assets/img/client-3.png")} alt="" />
            </div>
            <div>
              <img src={require("./../../assets/img/client-4.png")} alt="" />
            </div>
            <div>
              <img src={require("./../../assets/img/client-5.png")} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Download />
      <Footer />
      <Test page={"home"} />
    </div>
  );
}
