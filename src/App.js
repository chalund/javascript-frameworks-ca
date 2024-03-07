import { Route, Routes} from "react-router-dom";
import { Nav } from "./Components/Nav";
import { Home, Product, Contact } from "./Pages";


function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
