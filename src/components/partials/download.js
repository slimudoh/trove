import React from "react";

export function Download() {
  return (
    <div className="download">
      <img src={require("./../../assets/img/download.png")} alt="" />
      <div className="download__container">
        <div>
          <span>Download our app</span>
          <p>
            Get informed of the trends and top stories shaping markets to help
            keep you informed about the news that affects your finances,
            decisions, and lives
          </p>
          <div>
            <div className="download__containe--play">
              <div>
                <img
                  src={require("./../../assets/img/play.png")}
                  alt="play store"
                />
              </div>
            </div>
            <div className="download__containe--app">
              <div>
                <img
                  src={require("./../../assets/img/app.png")}
                  alt="app store+"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
