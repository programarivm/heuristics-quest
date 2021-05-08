import React from 'react';
import { Legend, LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';

export default function Chart(data) {
  return (
    <React.Fragment>
      <ResponsiveContainer>
        <LineChart
          width={500}
          height={300}
          data={data.axis}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <XAxis dataKey="n" />
          <YAxis />
          <Legend />
          <Line type="monotone" dataKey="w" stroke="#82ca9d" fill="#82ca9d" dot={false} strokeWidth={2} />
          <Line type="monotone" dataKey="b" stroke="#8884d8" fill="#8884d8" dot={false} strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
