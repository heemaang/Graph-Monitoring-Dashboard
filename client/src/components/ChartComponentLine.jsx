import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ChartComponentLine = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Milestone Months" stroke="#8884d8" />
        <Line type="monotone" dataKey="Planned Progress" stroke="#82ca9d" />
        <Line type="monotone" dataKey="Financial Actual Progress" stroke="#ffc658" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ChartComponentLine;
