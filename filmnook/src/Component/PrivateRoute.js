import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
  const isAuthenticated = localStorage.getItem('userToken');

  return isAuthenticated && isAuthenticated !== 'null' ? (
   {children}
  ) : (
    <Navigate to="/signup" />
  );
};

export default PrivateRoute;
