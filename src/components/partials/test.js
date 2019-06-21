import React from "react";
import { Link } from "react-router-dom";

export function Test(props) {
  console.log(props.page);
  return (
    <div className="footer__test">
      <ul>
        <li>{props.page === "home" ? "Home" : <Link to="/">Home</Link>}</li>
        <li>
          {props.page === "about" ? "About" : <Link to="/about">About</Link>}
        </li>
        <li>{props.page === "faq" ? "FAQ" : <Link to="/faq">FAQ</Link>}</li>
        <li>
          {props.page === "pricing" ? (
            "Pricing"
          ) : (
            <Link to="/pricing">Pricing</Link>
          )}
        </li>
        <li>
          {props.page === "signin" ? (
            "Signin"
          ) : (
            <Link to="/signin">Signin</Link>
          )}
        </li>
        <li>
          {props.page === "signup" ? (
            "Signup"
          ) : (
            <Link to="/signup">Signup</Link>
          )}
        </li>
        <li>
          {props.page === "terms" ? "Terms" : <Link to="/terms">Terms</Link>}
        </li>
        <li>
          {props.page === "contact" ? (
            "Contact"
          ) : (
            <Link to="/contact">Contact</Link>
          )}
        </li>
      </ul>
    </div>
  );
}
