import ReactGA from "react-ga4";

export const initializeAnalytics = () => {
  if (import.meta.env.PROD) {
    ReactGA.initialize(import.meta.env.VITE_GA_MEASUREMENT_ID);
  }
};

export const trackPageView = (location) => {
  if (import.meta.env.PROD) {
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search,
      title: document.title,
    });
  }
};

export const trackEvent = (
  category,
  action,
  label = "",
  value = undefined
) => {
  if (import.meta.env.PROD) {
    ReactGA.event({
      category,
      action,
      label,
      value,
    });
  }
};