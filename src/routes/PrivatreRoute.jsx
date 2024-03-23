import { useAuth } from 'providers';
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivatreRoute = ({ children, redirectTo = '/' }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to={redirectTo} replace />;
};

export default PrivatreRoute;
