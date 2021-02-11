import Layout from "./components/Layout";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Cart from "./pages/Cart";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";

export default function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/store">
            <Store />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/product/:productId">
            <ProductDetail />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}
