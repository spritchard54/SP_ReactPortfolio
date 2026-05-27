import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/Home"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Photos = lazy(() => import("./pages/Photos"));
const Trips = lazy(() => import("./pages/Trips"));
const Contact = lazy(() => import("./pages/Contact"));
const TripDetail = lazy(() => import("./pages/TripDetail"));
const Vinyl = lazy(() => import("./pages/Vinyl"));
import Layout from "./components/Layout";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/trips" element={<Trips />} />
          <Route path="/vinyl" element={<Vinyl />} />
          <Route path="/trips/:tripId" element={<TripDetail />} />
          <Route path="/contact" element={<Contact />} />
          
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
