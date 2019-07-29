import React from "react";

import { Header } from "./../partials/header";
import { Footer } from "./../partials/footer";
import { Test } from "./../partials/test";
import { Download } from "./../partials/download";

export function About() {
  return (
    <div>
      {/* <Header page={"about"} /> */}
      <div className="about">
        <div className="about__bg--content ">
          <div className="about__bg--header">
            <Header page={"about"} />
            <div style={{ paddingTop: "50px" }}>
              <div className="about__bg--header-left">
                <span>Investment gamified</span>
                <p>
                  Forget high account opening fees. Start investing in US,
                  Chinese & Nigerian Stocks, Government Bonds, US ETF’s and more
                  from as little as ₦1000
                </p>
                <div>
                  <div className="about__bg--header-left-play">
                    <img
                      src={require("./../../assets/img/dark-play.png")}
                      alt=""
                    />
                  </div>
                  <div className="about__bg--header-left-app">
                    <img
                      src={require("./../../assets/img/dark-app.png")}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="about__bg--header-right" />
            </div>
          </div>
          <div className="about__bg--photos">
            <p>We come together</p>
            <span>
              from all walks of life, led by the belief that anyone can grow
              wealth
            </span>
            <div>
              <div className="about__bg--photos-profile">
                <div>
                  <div className="about__bg--photos-profile-top">
                    <img
                      src={require("./../../assets/img/profile.png")}
                      alt="profile"
                    />
                  </div>
                  <div className="about__bg--photos-profile-btm">
                    <span>Obi David</span>
                    <p>Engineering</p>
                  </div>
                </div>

                <div>
                  <div className="about__bg--photos-profile-top">
                    <img
                      src={require("./../../assets/img/profile.png")}
                      alt="profile"
                    />
                  </div>
                  <div className="about__bg--photos-profile-btm">
                    <span>Blessing Uwadia</span>
                    <p>Product Specialist</p>
                  </div>
                </div>

                <div>
                  <div className="about__bg--photos-profile-top">
                    <img
                      src={require("./../../assets/img/profile.png")}
                      alt="profile"
                    />
                  </div>
                  <div className="about__bg--photos-profile-btm">
                    <span>Feranmi Ajetomobi</span>
                    <p>Engagement & Content</p>
                  </div>
                </div>

                <div>
                  <div className="about__bg--photos-profile-top">
                    <img
                      src={require("./../../assets/img/profile.png")}
                      alt="profile"
                    />
                  </div>
                  <div className="about__bg--photos-profile-btm">
                    <span>Obi David</span>
                    <p>Engineering</p>
                  </div>
                </div>

                <div>
                  <div className="about__bg--photos-profile-top">
                    <img
                      src={require("./../../assets/img/profile.png")}
                      alt="profile"
                    />
                  </div>
                  <div className="about__bg--photos-profile-btm">
                    <span>Blessing Uwadia</span>
                    <p>Product Specialist</p>
                  </div>
                </div>

                <div>
                  <div className="about__bg--photos-profile-top">
                    <img
                      src={require("./../../assets/img/profile.png")}
                      alt="profile"
                    />
                  </div>
                  <div className="about__bg--photos-profile-btm">
                    <span>Feranmi Ajetomobi</span>
                    <p>Engagement & Content</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="about__bg--community">
            <div>
              <div className="about__bg--community-gallery">
                <img
                  src={require("./../../assets/img/gallery.png")}
                  alt="gallery"
                />
              </div>
              <div className="about__bg--community-text">
                <div>
                  <p>Backed & loved by an awesome community</p>
                  <span>
                    From students, to working professionals, business founders,
                    and local traders; our community represents a fine mix of
                    amazing individuals. We host members to amazing events and
                    can't wait to see you at the next one.
                  </span>
                  <div>Get Started &nbsp;&nbsp; &#8594;</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Download />
      <Footer />
      <Test page={"about"} />
    </div>
  );
}
