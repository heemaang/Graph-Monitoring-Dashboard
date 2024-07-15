import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ChartComponentArea = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="Milestone Months" stroke="#8884d8" fill="#8884d8" />
        <Area type="monotone" dataKey="Planned Progress" stroke="#82ca9d" fill="#82ca9d" />
        <Area type="monotone" dataKey="Financial Actual Progress" stroke="#ffc658" fill="#ffc658" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default ChartComponentArea;
