import Layout from "./components/Layout";
import NotFound from "./components/NotFound";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Cart from "./pages/Cart";

import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./store/products";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

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
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}
