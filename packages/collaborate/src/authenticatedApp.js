import React from 'react';
import { Router, Link } from "@reach/router";
import { Header } from './components';
import { AuthHome } from './screens';

const AuthenticatedApp = () => {   
    return(
        <>
            <Header />
            <Routes />
        </>
    )
}

const Routes = () => {
    return (
      <Router>
        <AuthHome path='/' />
      </Router>
    );
  };

export default AuthenticatedApp;