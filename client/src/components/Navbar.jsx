import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <span className="navbar-brand mx-auto">Construction Project Monitoring</span>
        <div>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/bar" className="nav-link">Bar Chart</Link>
            </li>
            <li className="nav-item">
              <Link to="/line" className="nav-link">Line Chart</Link>
            </li>
            <li className="nav-item">
              <Link to="/pie" className="nav-link">Pie Chart</Link>
            </li>
            <li className="nav-item">
              <Link to="/area" className="nav-link">Area Chart</Link>
            </li>
            <li className="nav-item">
              <Link to="/radar" className="nav-link">Radar Chart</Link>
            </li>
            <li className="nav-item">
              <Link to="/scatter" className="nav-link">Scatter Chart</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
