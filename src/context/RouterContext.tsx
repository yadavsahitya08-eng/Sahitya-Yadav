import React, { createContext, useContext, useEffect } from 'react';
import { useLocation, useNavigate as useRRNavigate } from 'react-router-dom';

export type RouteName =
  | 'home'
  | 'about'
  | 'academic-journey'
  | 'interests'
  | 'philosophy'
  | 'literature'
  | 'projects'
  | 'writings'
  | 'writing-detail'
  | 'personal-outlook'
  | 'reading-list'
  | 'contact'
  | 'privacy';

interface RouterContextType {
  route: RouteName;
  slug?: string;
  navigate: (to: RouteName, slugParam?: string) => void;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

function parsePath(pathname: string): { route: RouteName; slug?: string } {
  const clean = pathname.replace(/^\//, '').trim();
  if (!clean || clean === '' || clean === 'home') {
    return { route: 'home' };
  }

  const parts = clean.split('/');
  const main = parts[0];

  if (main === 'writings' && parts[1]) {
    return { route: 'writing-detail', slug: parts[1] };
  }

  const validRoutes: RouteName[] = [
    'home',
    'about',
    'academic-journey',
    'interests',
    'philosophy',
    'literature',
    'projects',
    'writings',
    'personal-outlook',
    'reading-list',
    'contact',
    'privacy'
  ];

  if (validRoutes.includes(main as RouteName)) {
    return { route: main as RouteName };
  }

  return { route: 'home' };
}

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const rrNavigate = useRRNavigate();

  const { route, slug } = parsePath(location.pathname);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const navigate = (to: RouteName, slugParam?: string) => {
    if (to === 'home') {
      rrNavigate('/');
    } else if (to === 'writing-detail' && slugParam) {
      rrNavigate(`/writings/${slugParam}`);
    } else {
      rrNavigate(`/${to}`);
    }
  };

  return (
    <RouterContext.Provider value={{ route, slug, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = () => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
};
