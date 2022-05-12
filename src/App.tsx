import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from 'components/Common/NotFound';
import LoginPage from 'features/auth/pages/LoginPage';
import './App.css';
import PrivateRoute from 'components/Common/PrivateRoute';
import AdminLayout from 'components/Layout/AdminLayout';
import Dashboard from 'features/dashboard';
import StudentFeature from 'features/student';

function App() {
  return (
    <div>
      <Routes>
        <Route path="" />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/admin"
          element={
            <PrivateRoute
              authenticationPath="/admin"
              outlet={<AdminLayout />}
            />
          }
        >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="student" element={<StudentFeature />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
