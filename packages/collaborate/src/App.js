import React, { lazy, Suspense, useEffect} from 'react';
import { useUser } from './context/userContext';

const loadAuthenticatedApp = () => import('./authenticatedApp');
const AuthenticatedApp = lazy(loadAuthenticatedApp);
const UnauthenticatedApp = lazy(() => import('./unauthenticatedApp'));

const App =() => {
  const user = useUser();

  useEffect(() => {
    loadAuthenticatedApp();
  }, []);

  return <Suspense fallback='HI'>{user ? <AuthenticatedApp /> : <UnauthenticatedApp />}</Suspense>;
}

export default App;
