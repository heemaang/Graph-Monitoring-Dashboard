import React from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ChartComponentRadar = ({ data }) => {
  const radarData = data.map((d) => ({
    name: d.name,
    Milestone: d['Milestone Months'],
    Planned: d['Planned Progress'],
    Financial: d['Financial Actual Progress'],
  }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <RadarChart data={radarData}>
        <PolarGrid />
        <PolarAngleAxis dataKey="name" />
        <PolarRadiusAxis />
        <Tooltip />
        <Legend />
        <Radar name="Milestone Months" dataKey="Milestone" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        <Radar name="Planned Progress" dataKey="Planned" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
        <Radar name="Financial Actual Progress" dataKey="Financial" stroke="#ffc658" fill="#ffc658" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default ChartComponentRadar;
