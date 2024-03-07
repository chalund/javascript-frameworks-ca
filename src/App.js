import { Route, Routes} from "react-router-dom";

import { Home, Product, Contact } from "./Pages";
import Navbar from "./Components/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
