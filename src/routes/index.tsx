import React from 'react';
import { Route } from 'react-router';
import LoginPageContainer from '../pages/loginPage/LoginPageContainer';
import PrivateRoute from '../components/PrivateRoute';
import PatientsPageContainer from '../pages/patientsPage/PatientsPageContainer';

export const Routes: React.FunctionComponent = () => {
  return (
    <>
      <Route exact path="/" component={LoginPageContainer} />
      <PrivateRoute path="/patients" Component={PatientsPageContainer} />
    </>
  );
};
