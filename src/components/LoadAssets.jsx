import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const LoadAssets = () => {
  const location = useLocation();

  useEffect(() => {
    // Run this whenever route changes
    const initPlugins = () => {
      // Example for Swiper
      if (window.Swiper) {
        new window.Swiper('.swiper-container', {
          loop: true,
          autoplay: true,
          // your config
        });
      }

      // Example for WOW.js
      if (window.WOW) {
        new window.WOW().init();
      }

      // If you use jQuery-based animations:
      if (window.$ && window.$.fn.magnificPopup) {
        window.$('.popup-link').magnificPopup({ type: 'image' });
      }
    };

    initPlugins();

  }, [location]);

  return null;
};

export default LoadAssets;
