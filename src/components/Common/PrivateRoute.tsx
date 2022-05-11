import React from 'react';
import { Navigate } from 'react-router-dom';

export interface PrivateRouteProps {
  children: React.ReactNode;
}

export default function PrivateRoute(props: any) {
  // check if user is logged in
  // if yes, show route
  // else redirect to login page

  const isLoggedIn = Boolean(localStorage.getItem('access_token'));

  if (!isLoggedIn) return <Navigate to="/login" replace />;

  return { ...props };
}
