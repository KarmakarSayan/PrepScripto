import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// This component will automatically scroll the window to the top on any route change.
const ScrollToTop = () => {
  // Extracts the pathname from the current URL (e.g., "/", "/doctors", "/appointment/doc1")
  const { pathname } = useLocation();

  // The useEffect hook runs every time the pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // This component doesn't render any visible UI
};

export default ScrollToTop;
