import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { getNomMois } from '../../_services/formate.service';

const BarChartAnnonce = ({ data }) => {
  return (
    <BarChart
      width={900}
      height={300}
      data={data}
      margin={{ top: 20, right: 30, left: 50, bottom: 5 }}
    >
      <XAxis dataKey="mois" tickFormatter={(value) => `${getNomMois(value)}`} />
      <YAxis tickFormatter={(value) => `${value}`} />
      <Tooltip />
      <Legend />
      <Bar dataKey="nombre" fill="#8884d8" />
    </BarChart>
  );
};

export default BarChartAnnonce;
