import React from "react";
import "./App.css";

import { Link, Switch, Route, BrowserRouter } from "react-router-dom";

import Category from "./pages/category/Category";
import CategoryCreate from "./pages/category/CategoryCreate";
import CategoryEdit from "./pages/category/CategoryEdit";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/category">Category</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/category" component={Category} />
          <Route exact path="/category/create" component={CategoryCreate} />
          <Route exact path="/category/:id/edit" component={CategoryEdit} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
