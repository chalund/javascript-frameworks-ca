import { Route, Routes} from "react-router-dom";
// import { Navbar } from "./Components/Navbar";
import { Home, Product, Contact } from "./Pages";
import { Header } from "./Components/Layout/Header";


function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
