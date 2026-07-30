import ReactGA from "react-ga4";

const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

let analyticsInitialized = false;

export const initializeAnalytics = () => {
  if (!import.meta.env.PROD) {
    return;
  }

  if (!measurementId) {
    console.warn("Google Analytics measurement ID is missing.");
    return;
  }

  ReactGA.initialize(measurementId);
  analyticsInitialized = true;
};

export const trackPageView = (location) => {
  if (!analyticsInitialized) {
    return;
  }

  ReactGA.send({
    hitType: "pageview",
    page: location.pathname + location.search,
    title: document.title,
  });
};

export const trackEvent = (
  category,
  action,
  label = "",
  value = undefined,
) => {
  if (!analyticsInitialized) {
    return;
  }

  ReactGA.event({
    category,
    action,
    label,
    value,
  });
};