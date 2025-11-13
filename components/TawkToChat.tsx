'use client';

import { useEffect } from 'react';

const TawkToChat = () => {
  useEffect(() => {
    try {
      const s1 = document.createElement("script");
      const s0 = document.getElementsByTagName("script")[0];
      
      s1.async = true;
      s1.src = 'https://embed.tawk.to/6813a2531239291913da34c2/1iq6b468o';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      
      s0.parentNode?.insertBefore(s1, s0);
    } catch (error) {
      console.warn('Tawk.to chat widget initialization error:', error);
    }
  }, []);

  return null;
};

export default TawkToChat;
