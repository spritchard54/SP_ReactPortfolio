import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
// my code
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Portfolio } from "./pages/Portfolio";
import { Photos } from "./pages/Photos";
import { Trips } from "./pages/Trips";
import { Contact } from "./pages/Contact";
import { Layout } from "./components/Layout";

// end my code

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Photos" element={<Photos />} />
        <Route path="/Trips" element={<Trips />} />
        <Route path="/Contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
