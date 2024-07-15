import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Home from '../pages/Home'; 
import ChartComponentBar from '../components/ChartComponentBar';
import ChartComponentLine from '../components/ChartComponentLine';
import ChartComponentPie from '../components/ChartComponentPie';
import ChartComponentArea from '../components/ChartComponentArea';
import ChartComponentRadar from '../components/ChartComponentRadar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/Dashboard.css'; // Ensure you create this file for styling

const Dashboard = ({ onLogout }) => {
  const projectData = [
    { name: 'Project 1', 'Milestone Months': 20, 'Planned Progress': 60, 'Financial Actual Progress': 40 },
    { name: 'Project 2', 'Milestone Months': 30, 'Planned Progress': 70, 'Financial Actual Progress': 50 },
    { name: 'Project 3', 'Milestone Months': 25, 'Planned Progress': 65, 'Financial Actual Progress': 45 },
    { name: 'Project 4', 'Milestone Months': 35, 'Planned Progress': 80, 'Financial Actual Progress': 55 },
    { name: 'Project 5', 'Milestone Months': 40, 'Planned Progress': 90, 'Financial Actual Progress': 60 },
  ];

  useEffect(() => {
    toast.success('Welcome to the Dashboard!');
  }, []);

  return (
    <div className="dashboard-container">
      <ToastContainer />
      <Sidebar onLogout={onLogout} />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bar" element={<ChartComponentBar data={projectData} />} />
          <Route path="/line" element={<ChartComponentLine data={projectData} />} />
          <Route path="/pie" element={<ChartComponentPie data={projectData} />} />
          <Route path="/area" element={<ChartComponentArea data={projectData} />} />
          <Route path="/radar" element={<ChartComponentRadar data={projectData} />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
