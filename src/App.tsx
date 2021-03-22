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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Router>
      <Layout>
        <ToastContainer
          className="mt-14 md:mt-16"
          bodyClassName={(param) =>
            `${
              param?.type === "default" && "text-gray"
            } text-sm font-medium  block p-3 `
          }
          autoClose={2000}
        />
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
