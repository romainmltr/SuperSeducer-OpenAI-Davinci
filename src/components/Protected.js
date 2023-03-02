import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Protected = ({ element: Component, ...rest }) => {
  const { user } = UserAuth();
  if (!user) {
    return <Navigate to='/' />;
  }

  return <Route {...rest} element={<Component />} />;
};

export default Protected;
