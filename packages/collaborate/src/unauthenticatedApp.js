import React from 'react';
import { Router, Link } from "@reach/router";
import { Login, Home, CreateAccount } from './screens';
import { NavBar } from './components';


const UnauthenticatedApp = () => {
    return(
        <>  
            <NavBar login />
            <Routes />
        </>
    )
}

const Routes = () => {
    return (
      <Router>
        <Home path='/' />
        <Login path='/login' />
        <CreateAccount path='/create-account'/>
      </Router>
    );
  };

export default UnauthenticatedApp;