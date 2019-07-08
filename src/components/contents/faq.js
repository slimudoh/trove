import React from "react";

import { Header } from "./../partials/header";
import { Footer } from "./../partials/footer";
import { Test } from "./../partials/test";
import { Download } from "./../partials/download";

export function Faq() {
  return (
    <div>
      <Header page={"faq"} />
      <div className="faq">
        <div className="faq__bg--content">
          <div className="pricing__bg--btm-right">
            <img
              src={require("./../../assets/img/single-tree.png")}
              alt="stock"
            />
          </div>
          <div className="terms__bg--content-middle-right">
            <img src={require("./../../assets/img/plant.png")} alt="" />
          </div>
          <div className="faq__bg--content-top-left">
            <img src={require("./../../assets/img/person.png")} alt="" />
          </div>
          <div className="faq__bg--content-bottom-left">
            <img src={require("./../../assets/img/tree.png")} alt="" />
          </div>

          <div className="faq__bg--content-header">
            <span>HERE ARE SOME</span>
            <p>Frequently Asked Questions</p>
          </div>
          <div className="faq__bg--content-body">
            <div>
              <div>
                <span>Signing Up For Trove</span>
                <p>
                  Silent sir say desire fat him letter. Whatever settling
                  goodness too and honoured she building answered her. Strongly
                  thoughts remember mr to do consider debating. Spirits musical
                  behaved on we he farther letters.
                </p>
              </div>
            </div>

            <div>
              <div>
                <span>What kind of debit cards can I use on Trove?</span>
                <p>
                  Silent sir say desire fat him letter. Whatever settling
                  goodness too and honoured she building answered her. Strongly
                  thoughts remember mr to do consider debating. Spirits musical
                  behaved on we he farther letters.
                </p>
              </div>
            </div>

            <div>
              <div>
                <span>Questions During Account Registration</span>
                <p>
                  Silent sir say desire fat him letter. Whatever settling
                  goodness too and honoured she building answered her. Strongly
                  thoughts remember mr to do consider debating. Spirits musical
                  behaved on we he farther letters.
                </p>
              </div>
            </div>

            <div>
              <div>
                <span>
                  Can I transfer my stocks out and keep my Trove account?
                </span>
                <p>
                  Silent sir say desire fat him letter. Whatever settling
                  goodness too and honoured she building answered her. Strongly
                  thoughts remember mr to do consider debating. Spirits musical
                  behaved on we he farther letters.
                </p>
              </div>
            </div>

            <div>
              <div>
                <span>What kind of debit cards can I use on Trove?</span>
                <p>
                  Silent sir say desire fat him letter. Whatever settling
                  goodness too and honoured she building answered her. Strongly
                  thoughts remember mr to do consider debating. Spirits musical
                  behaved on we he farther letters.
                </p>
              </div>
            </div>

            <div>
              <div>
                <span>
                  Can I withdraw money from my Trove account whenever I want?
                </span>
                <p>
                  Silent sir say desire fat him letter. Whatever settling
                  goodness too and honoured she building answered her. Strongly
                  thoughts remember mr to do consider debating. Spirits musical
                  behaved on we he farther letters.
                </p>
              </div>
            </div>

            <div>
              <div>
                <span>
                  What documents do I need to open an account on Trove?
                </span>
                <p>
                  Silent sir say desire fat him letter. Whatever settling
                  goodness too and honoured she building answered her. Strongly
                  thoughts remember mr to do consider debating. Spirits musical
                  behaved on we he farther letters.
                </p>
              </div>
            </div>

            <div>
              <div>
                <span>Will Trove tell me when to sell my stock shares?</span>
                <p>
                  Silent sir say desire fat him letter. Whatever settling
                  goodness too and honoured she building answered her. Strongly
                  thoughts remember mr to do consider debating. Spirits musical
                  behaved on we he farther letters.
                </p>
              </div>
            </div>

            <div>
              <div>
                <span>How long can I keep my Assets with Trove?</span>
                <p>
                  Silent sir say desire fat him letter. Whatever settling
                  goodness too and honoured she building answered her. Strongly
                  thoughts remember mr to do consider debating. Spirits musical
                  behaved on we he farther letters.
                </p>
              </div>
            </div>

            <div>
              <div>
                <span>
                  How can I change or relink the bank I use to fund my account?
                </span>
                <p>
                  Silent sir say desire fat him letter. Whatever settling
                  goodness too and honoured she building answered her. Strongly
                  thoughts remember mr to do consider debating. Spirits musical
                  behaved on we he farther letters.
                </p>
              </div>
            </div>

            <div>
              <div>
                <span>Can I monitor the returns on all my investments?</span>
                <p>
                  Silent sir say desire fat him letter. Whatever settling
                  goodness too and honoured she building answered her. Strongly
                  thoughts remember mr to do consider debating. Spirits musical
                  behaved on we he farther letters.
                </p>
              </div>
            </div>

            <div>
              <div>
                <span>
                  What is the role of Sigma Securities Limited, ARM Investment
                  Managers and VFD Microfinance Bank?
                </span>
                <p>
                  Silent sir say desire fat him letter. Whatever settling
                  goodness too and honoured she building answered her. Strongly
                  thoughts remember mr to do consider debating. Spirits musical
                  behaved on we he farther letters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Download />
      <Footer page={"faq"} />
      <Test page={"faq"} />
    </div>
  );
}
