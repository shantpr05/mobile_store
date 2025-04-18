import ReactGA from 'react-ga4';

const TRACKING_ID = "G-7PJ0WJKQQX"; // ✅ Replace with your own ID
ReactGA.initialize(TRACKING_ID);

export const trackPageView = (path) => {
  ReactGA.send({ hitType: "pageview", page: path });
};
