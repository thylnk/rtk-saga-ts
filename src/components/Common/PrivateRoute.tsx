import { useAppSelector } from 'app/hooks';
import { selectIsLoggedIn } from 'features/auth/authSlice';
import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

export type PrivateRouteProps = {
  authenticationPath: string;
  outlet: JSX.Element;
};

export default function PrivateRoute({
  authenticationPath,
  outlet,
}: PrivateRouteProps) {
  // check if user is logged in
  // if yes, show route
  // else redirect to login page

  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  useEffect(() => {}, [isLoggedIn]);

  if (isLoggedIn) {
    return outlet;
  } else {
    return <Navigate to={{ pathname: '/login' }} />;
  }
}
