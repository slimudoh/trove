import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./../assets/css/reset.css";
import "./../assets/css/app.css";

import { Home } from "./../components/contents/home";
import { About } from "./../components/contents/about";
import { Pricing } from "./../components/contents/pricing";
import { Signup } from "./../components/contents/signup";
import { Terms } from "./../components/contents/terms";
import { Faq } from "./../components/contents/faq";
import { Contact } from "./../components/contents/contact";
import { Notfound } from "./../components/contents/notfound";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/signup" component={Signup} />
        <Route path="/terms" component={Terms} />
        <Route path="/faq" component={Faq} />
        <Route path="/contact" component={Contact} />
        <Route component={Notfound} />
      </Switch>
    </Router>
  );
}

export default App;
