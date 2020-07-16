import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function Subtotal(result) {
  return (
    <Typography variant="subtitle2" align="center">
      <span style={{ color: "#82ca9d" }}>{result.w.toFixed(2)}</span>&nbsp;
      <span style={{ color: "#ccc" }}>vs</span>&nbsp;
      <span style={{ color: "#8884d8" }}>{result.b.toFixed(2)}</span>
    </Typography>
  );
}
