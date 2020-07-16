import React from 'react';
import useStyles from 'components/plot/styles';
import Container from '@material-ui/core/Container';
import Breadcrumbs from 'components/plot/Breadcrumbs';
import Games from 'components/plot/Games';

export default function HeuristicMaterial() {
  const name = 'material';
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Breadcrumbs heuristic={name} />
      <Games heuristic={name} />
    </Container>
  );
}
