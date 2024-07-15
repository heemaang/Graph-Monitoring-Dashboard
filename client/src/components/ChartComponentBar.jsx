import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ChartComponentBar = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Milestone Months" fill="#8884d8" />
        <Bar dataKey="Planned Progress" fill="#82ca9d" />
        <Bar dataKey="Financial Actual Progress" fill="#ffc658" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ChartComponentBar;
