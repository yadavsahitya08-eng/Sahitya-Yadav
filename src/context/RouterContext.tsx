import React, { createContext, useContext, useEffect, useState } from 'react';

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

interface RouterState {
  currentRoute: RouteName;
  slug?: string;
}

interface RouterContextType {
  route: RouteName;
  slug?: string;
  navigate: (to: RouteName, slugParam?: string) => void;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

function parseHash(hash: string): RouterState {
  const clean = hash.replace(/^#\/?/, '').trim();
  if (!clean || clean === '' || clean === 'home') {
    return { currentRoute: 'home' };
  }

  const parts = clean.split('/');
  const main = parts[0];

  if (main === 'writings' && parts[1]) {
    return { currentRoute: 'writing-detail', slug: parts[1] };
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
    return { currentRoute: main as RouteName };
  }

  return { currentRoute: 'home' };
}

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<RouterState>(() => {
    if (typeof window !== 'undefined') {
      return parseHash(window.location.hash);
    }
    return { currentRoute: 'home' };
  });

  useEffect(() => {
    const handleHashChange = () => {
      setState(parseHash(window.location.hash));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (to: RouteName, slugParam?: string) => {
    let newHash = '';
    if (to === 'home') {
      newHash = '';
    } else if (to === 'writing-detail' && slugParam) {
      newHash = `#/writings/${slugParam}`;
    } else {
      newHash = `#/${to}`;
    }

    if (window.location.hash !== newHash) {
      window.location.hash = newHash;
    } else {
      setState({ currentRoute: to, slug: slugParam });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <RouterContext.Provider value={{ route: state.currentRoute, slug: state.slug, navigate }}>
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
