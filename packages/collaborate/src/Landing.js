import React from 'react'
import { Router, Link } from "@reach/router"
import Login from './screens/Login';



import Home from './screens/Home';
import ForgotPassword from './screens/ForgotPassword';
import CheckYourInbox from './screens/CheckYourInbox';
import ResetPassword from './screens/ResetPassword';
import SuccessfullyReset from './screens/SuccessfullyReset';
import CreateAccount from './screens/CreateAccount';
import TermsOfService from './screens/TermsOfService';
import AccountType from './screens/AccountType-1';
import AccountType2 from './screens/AccountType-2';
import AccountType3 from './screens/AccountType-3';
import DataCapture1 from './screens/DataCapture-1';
import DataCapture2 from './screens/DataCapture-2';
import DataCapture3 from './screens/DataCapture-3';
import DataCapture4 from './screens/DataCapture-4';
import DataCapture5 from './screens/DataCapture-5';
import DataCaptureComplete from './screens/DataCaptureComplete';
import Subscription from './screens/Subscription';
import PaymentRecieved from './screens/PaymentRecieved';
import CreateProject from './screens/CreateProject';
import ProjectView from './screens/ProjectView';

const Landing = () => {

    return(
      <div className="App">
        <Routes />
      </div>
    )

}

const Routes = () => {
  return (
    <Router>
      <Home path='/' />
      <Login path='/login' />
      <ForgotPassword path='/forgot-password' />
      <CheckYourInbox path='/check-your-inbox' />
      <ResetPassword path='/reset-password' />
      <SuccessfullyReset path='/successful-reset' />
      <CreateAccount path='/create-account' />
      <TermsOfService path='/terms-of-service' />
      <AccountType path='/account-type' />
      <AccountType2 path='/account-type-2' />
      <AccountType3 path='/account-type-3' />
      <DataCapture1 path='/datacapture-1' />
      <DataCapture2 path='/datacapture-2' />
      <DataCapture3 path='/datacapture-3' />
      <DataCapture4 path='/datacapture-4' />
      <DataCapture5 path='/datacapture-5' />
      <DataCaptureComplete path='/datacapture-complete' />
      <Subscription path='/subscription' />
      <PaymentRecieved path='/payment-recieved' />
      <CreateProject path='/create-project' />
      <ProjectView path='/project-view' />
    </Router>
  );
};

export default Landing;