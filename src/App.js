import Layout from "./components/Layout";
import ProductDetail from "./components/ProductDetail";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Cart from "./pages/Cart";

export default function App() {
  return (
    <Layout>
      <Home />
      <Store />
      <ProductDetail />
      <Cart />
    </Layout>
  );
}
