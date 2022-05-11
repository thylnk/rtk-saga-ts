import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from 'components/Common/NotFound';
import LoginPage from 'features/auth/pages/LoginPage';
import './App.css';
import PrivateRoute from 'components/Common/PrivateRoute';
import AdminLayout from 'components/Layout/AdminLayout';
import { Button } from '@mui/material';
import { useAppDispatch } from 'app/hooks';
import { authActions } from 'features/auth/authSlice';

function App() {
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(authActions.logout());
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleLogout}>
        Logout
      </Button>
      <Routes>
        <Route path="" />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminLayout />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
