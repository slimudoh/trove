import React from "react";

import { Header } from "./../partials/header";
import { Footer } from "./../partials/footer";
import { Test } from "./../partials/test";
import { Download } from "./../partials/download";

export function Contact() {
  return (
    <div>
      <Header page={"contact"} />
      <div className="contact">
        <div className="contact__bg--content">
          <div className="pricing__bg--btm-right">
            <img
              src={require("./../../assets/img/single-tree.png")}
              alt="stock"
            />
          </div>
          <span>Contact us</span>
          <p>Send us a message</p>
          <div>
            <div className="contact__bg--content-left">
              <div className="contact__input--half">
                <div>
                  <label>Your Full Name</label>
                  <input type="text" placeholder="Ayomide Onasanya" />
                </div>
              </div>

              <div className="contact__input--half">
                <div>
                  <label>Email Address</label>
                  <input type="text" />
                </div>
              </div>

              <div className="contact__input--half">
                <div>
                  <label>Phone Number</label>
                  <input type="text" />
                </div>
              </div>

              <div className="contact__input--half">
                <div>
                  <label>Subject</label>
                  <input type="text" />
                </div>
              </div>

              <div className="contact__input--full">
                <div>
                  <label htmlFor="message">Message</label>
                  <textarea />
                </div>
              </div>

              <div className="contact__input--button">
                <button>Submit</button>
              </div>
            </div>
            <div className="contact__bg--content-right">
              <div className="contact__address">
                <span>Address</span>
                <p>42, Ajose Street, Mende, Maryland, Lagos</p>
              </div>

              <div className="contact__address">
                <span>Phone</span>
                <p>0905 544 8191</p>
              </div>

              <div className="contact__address">
                <span>Email</span>
                <p>hello@troveapp.co</p>
              </div>

              <div className="contact__address">
                <span>Social</span>
                <div>
                  <div>
                    <img
                      src={require("./../../assets/img/facebook.png")}
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src={require("./../../assets/img/twitter.png")}
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src={require("./../../assets/img/instagram.png")}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Download />
      <Footer />
      <Test page={"contact"} />
    </div>
  );
}
