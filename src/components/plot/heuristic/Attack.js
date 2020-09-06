import React from 'react';
import useStyles from 'components/plot/styles';
import Container from '@material-ui/core/Container';
import Games from 'components/plot/Games';

export default function HeuristicAttack() {
  const name = 'attack';
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Games heuristic={name} />
    </Container>
  );
}
