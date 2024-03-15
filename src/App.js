import { Route, Routes } from "react-router-dom";
import { Home, Product, Contact } from "./Pages";
import { Layout } from "./Components/Layout";
import { ProductDetails } from "./Components/productDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails /> } />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
