import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ChartComponentPie = ({ data }) => {
  const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#8dd1e1', '#a4de6c', '#d0ed57'];

  const pieData = data.map((project, index) => ({
    name: project.name,
    value: project['Milestone Months'], // or any other value you want to represent
    fill: COLORS[index % COLORS.length]
  }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={150} fill="#8884d8">
          {pieData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.fill} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default ChartComponentPie;
