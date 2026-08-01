import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import { Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";

import { trackPageView } from "./utils/analytics";

const Home = lazy(() => import("./pages/Home"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Photos = lazy(() => import("./pages/Photos"));
const Trips = lazy(() => import("./pages/Trips"));
const Contact = lazy(() => import("./pages/Contact"));
const TripDetail = lazy(() => import("./pages/TripDetail"));
const Vinyl = lazy(() => import("./pages/Vinyl"));
const NotFound = lazy(() => import("./pages/NotFound"));  
import Layout from "./components/Layout";

function App() {
  const location = useLocation();

  useEffect(() => {
  trackPageView(location);
}, [location]);

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

          <Route path="*" element={<NotFound />} />
          
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
