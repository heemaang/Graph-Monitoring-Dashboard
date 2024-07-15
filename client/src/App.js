import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './pages/Dashboard';

const App = () => {
  const [token, setToken] = useState(null);
  const [isLogin, setIsLogin] = useState(true);

  const handleToggleForm = () => {
    setIsLogin(!isLogin);
  };

  // Load token from localStorage when the app initializes
  useEffect(() => {
    const savedToken = localStorage.getItem('token');
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  const handleSetToken = (token) => {
    setToken(token);
    localStorage.setItem('token', token); // Save token to localStorage
  };

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem('token'); // Remove token from localStorage
  };

  return (
    <Router>
      <div className="container">
        {token ? (
          <Dashboard onLogout={handleLogout} />
        ) : (
          <Login setToken={handleSetToken} isLogin={isLogin} toggleForm={handleToggleForm} />
        )}
      </div>
    </Router>
  );
};

export default App;
