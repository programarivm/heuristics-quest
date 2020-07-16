import React from 'react';
import useStyles from 'components/plot/styles';
import MaterialBreadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';

export default function Breadcrumbs(params) {
  const classes = useStyles();

  return (
    <MaterialBreadcrumbs aria-label="breadcrumb" className={classes.breadcrumbs}>
      <Typography color="textSecondary">Heuristic</Typography>
      <Typography color="textPrimary">{params.heuristic[0].toUpperCase() + params.heuristic.slice(1)}</Typography>
    </MaterialBreadcrumbs>
  );
}
