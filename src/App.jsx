import "./App.css";
// my code
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Resume } from "./pages/Resume";
import { Photos } from "./pages/Photos";
import { Trips } from "./pages/Trips";
import { Layout } from "./components/Layout";

// end my code

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Photos" element={<Photos />} />
          <Route path="/Trips" element={<Trips />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
