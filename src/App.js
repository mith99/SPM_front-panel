import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Category from "./IT19167992/Components/Categories/category";
import MealList from "./IT19167992/Components/Meals/meal-list";
import SingleMeal from "./IT19167992/Components/Meals/single-meal";
import DeliveryServicePage from "./it19134536/pages/delivery_service";
import OrdersPage from "./it19134536/pages/orders_page";

import ViewOffersFrontPanel from "./IT19136134/components/offers-frontPanel/view-offer-frontpanel";
import Navbar from "./IT19136134/components/offers-frontPanel/navbar";

function App() {
  return (
    <div className="App">

      <Navbar />
      <Router>
        <Switch>
 
        <Route path="/category-list" component={Category} />
        <Route path="/meal-list" component={MealList} />
        <Route path="/single-meal" component={SingleMeal} />
        <Route path="/delivery-service" component={DeliveryServicePage} />
        <Route path="/orders" component={OrdersPage} />
 
          <Route path="/" component={ViewOffersFrontPanel}></Route>           

 
        </Switch>
      </Router>
    </div>
  );
}

export default App;
