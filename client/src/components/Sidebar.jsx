import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/Sidebar.css'; // Ensure you create this file for styling

const Sidebar = ({ onLogout }) => {
  const handleLogout = () => {
    toast.success('Logout successful');
    onLogout();
  };

  return (
    <div className="sidebar">
      <h2>Dashboard</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/bar">Bar Chart</Link></li>
        <li><Link to="/line">Line Chart</Link></li>
        <li><Link to="/pie">Pie Chart</Link></li>
        <li><Link to="/area">Area Chart</Link></li>
        <li><Link to="/radar">Radar Chart</Link></li>
      </ul>
      <button onClick={handleLogout} className="btn btn-danger">Logout</button>
    </div>
  );
};

export default Sidebar;
