import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import ForgotPassword from './Forgot-password';
import Projects from './Projects';
import Create_Project from './Create_project';
import Select_perimeter from './Select_perimeter';
import TutorialUserManual from './TutorialUserManual';
import BuildingInfoTabs from './building-info-tabs/BuildingInfoTabs';
import MaterialContent from './building-info-tabs/material-content/MaterialContent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<PrivateRoute component={Dashboard} />} />
        <Route path="*" element={<Navigate to="/login" />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/projects" element={<PrivateRoute component={Projects} />} />
        <Route path="/create-project" element={<PrivateRoute component={Create_Project} />} />
        <Route path="/select_perim" element={<PrivateRoute component={Select_perimeter} />} />
        <Route path="/tutorial" element={<PrivateRoute component={TutorialUserManual} />} />
        <Route path="/buildingTabs" element={<PrivateRoute component={BuildingInfoTabs} />} />
      </Routes>
    </Router>
  );
}

function PrivateRoute({ component: Component }) {
  const isAuthenticated = localStorage.getItem('isAuthenticated');

  return isAuthenticated ? <Component /> : <Navigate to="/login" />;
}

export default App;
