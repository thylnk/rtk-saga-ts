import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from 'components/Common/NotFound';
import LoginPage from 'features/auth/pages/LoginPage';
import './App.css';
import PrivateRoute from 'components/Common/PrivateRoute';
import AdminLayout from 'components/Layout/AdminLayout';

function App() {
  return (
    <div>
      <Routes>
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
