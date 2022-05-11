import { selectIsLoggedIn } from 'features/auth/authSlice';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
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

  const isLoggedIn = useSelector(selectIsLoggedIn);

  // console.log(typeof isLoggedIn);

  // const isLoggedIn = Boolean(localStorage.getItem('access_token'));

  useEffect(() => {}, [isLoggedIn]);

  if (isLoggedIn) {
    return outlet;
  } else {
    return <Navigate to={{ pathname: '/login' }} />;
  }
}
