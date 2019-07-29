import React from "react";

import { Header } from "./../partials/header";
import { Footer } from "./../partials/footer";
import { Download } from "./../partials/download";
import { Test } from "./../partials/test";

export function Notfound() {
  return (
    <div>
      <Header page={"notfound"} />
      <div className="notfound">
        <p>PAGE NOT FOUND</p>
        <div>
          <img src={require("./../../assets/img/404.png")} alt="404" />
        </div>
      </div>
      <Download />
      <Footer />
      <Test page={"notfound"} />
    </div>
  );
}
