import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DeliveryServicePage from "./it19134536/pages/delivery_service"
import OrdersPage from "./it19134536/pages/orders_page"

function App() {
  return (
    <div className="App">
      <OrdersPage />
      {/* <Router>
        <Switch>
		<Route path="/delivery-service" component={DeliveryServicePage} />
        	<Route path="/orders" component={OrdersPage} />
        	<Route path="/feedback" component={CreateFeedback} />
        	<Route path="/" component={LandingPage} />          
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;
