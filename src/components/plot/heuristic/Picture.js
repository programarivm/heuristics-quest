import React from 'react';
import useStyles from 'components/plot/styles';
import Container from '@material-ui/core/Container';
import Games from 'components/plot/Games';

export default function HeuristicPicture() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Games />
    </Container>
  );
}
