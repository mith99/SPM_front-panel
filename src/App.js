import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ViewOffersFrontPanel from "./IT19136134/components/offers-frontPanel/view-offer-frontpanel";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={ViewOffersFrontPanel}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
