import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function Total(result) {
  let color;
  const ratio = (result.w / result.b).toFixed(2);
  ratio >=1 ? color = "#82ca9d" : color = "#8884d8";
  return (
    <Typography variant="subtitle1" align="center">
      <span style={{ color: "#82ca9d" }}>{result.w.toFixed(2)} </span>
      <span style={{ color: "#ccc" }}>/</span>&nbsp;
      <span style={{ color: "#8884d8" }}>{result.b.toFixed(2)} </span>
      <span style={{ color: "#ccc" }}> = </span>
      <span style={{ color: color }}>{ratio}</span>
    </Typography>
  );
}
