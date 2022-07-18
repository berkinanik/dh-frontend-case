import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface ScrollToTopProps {
  children: React.ReactNode;
}

export const ScrollToTop: React.FC<ScrollToTopProps> = ({ children }) => {
  const location = useLocation();

  useLayoutEffect(() => {
    console.log('🚀 ~ file: index.tsx ~ line 14 ~ location', location);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [location]);

  return <>{children}</>;
};
