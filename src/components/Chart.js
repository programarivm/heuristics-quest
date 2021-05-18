import React from 'react';
import { Legend, LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';

export default function Chart(data) {
  return (
    <React.Fragment>
      <ResponsiveContainer>
        <LineChart
          width={500}
          data={data.axis}
        >
          <XAxis dataKey="n" />
          <YAxis />
          <Legend />
          <Line type="monotone" dataKey="w" stroke="#a8a8a8" dot={false} strokeWidth={2} />
          <Line type="monotone" dataKey="b" stroke="#404040" dot={false} strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
      <ResponsiveContainer>
        <LineChart
          width={500}
          data={data.axis}
        >
          <XAxis dataKey="n" />
          <YAxis />
          <Legend />
          <Line type="monotone" dataKey="balance" stroke="#007a99" dot={false} strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
