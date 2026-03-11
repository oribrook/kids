import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

const GA_MEASUREMENT_ID = 'G-ZTZD4YV9NF';

// Initialize once
ReactGA.initialize(GA_MEASUREMENT_ID);

export function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: location.pathname,
    });
  }, [location]);
}
