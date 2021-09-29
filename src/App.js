import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Category from "./IT19167992/Components/Categories/category";
import MealList from "./IT19167992/Components/Meals/meal-list";
import SingleMeal from "./IT19167992/Components/Meals/single-meal";
import DeliveryServicePage from "./it19134536/pages/delivery_service";
import OrdersPage from "./it19134536/pages/orders_page";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/category-list" component={Category} />
        <Route path="/meal-list" component={MealList} />
        <Route path="/single-meal" component={SingleMeal} />
        <Route path="/delivery-service" component={DeliveryServicePage} />
        <Route path="/orders" component={OrdersPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
