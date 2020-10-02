import React from 'react';
import { Route } from 'react-router';
import { Redirect, RouteComponentProps } from 'react-router-dom';

interface Props {
  Component: React.FunctionComponent<RouteComponentProps>;
  path: string;
  exact?: boolean;
}

const PrivateRoute: React.FunctionComponent<Props> = ({
  Component,
  path,
  exact = false,
}: Props): JSX.Element => {
  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <Route
      exact={exact}
      path={path}
      render={(props: RouteComponentProps) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/' }} />
        )
      }
    />
  );
};

export default PrivateRoute;
