// src/routes/PrivateRoute.js
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './Context/AuthContext'; // Adjust the path if necessary

const PrivateRoute = ({ element }) => {
  const { isLoggedIn } = useContext(AuthContext);

  return isLoggedIn ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
