import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { CssBaseline, Container, Grid, Paper, Typography } from '@material-ui/core';
import Buttons from 'components/Buttons';
import Games from 'components/Games';
import QueryModal from 'components/QueryModal';
import useStyles from 'styles/app';

export default function App() {
  const classes = useStyles();
  return (
    <div>
      <CssBaseline />
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12} style={{ marginTop: 15 }}>
            <Paper className={classes.paper}>
              <Typography variant="h4" gutterBottom>
                <a href="https://github.com/programarivm/heuristics-quest" className={classes.a}>Heuristics Quest</a>
              </Typography>
              <Typography variant="h5" gutterBottom>
                Chess Data Visualization for Further Supervised MLP Learning
              </Typography>
              <Typography variant="body1" style={{ marginBottom: 10 }}>
                At this moment, a machine learning model is being built at <a href="https://github.com/programarivm/chess-data" className={classes.a}>programarivm/chess-data</a> with <a href="https://github.com/programarivm/php-chess" className={classes.a}>PHP Chess</a> and <a href="https://github.com/RubixML/ML" className={classes.a}>Rubix ML</a>.
                The supervised learning process is all about using suitable heuristics.
                A so-called heuristic picture consists of a group of snapshots such as attack, center or material, among others, intended to capture the state of a chess game at any given time, and can be plotted on a chart for visual study.
              </Typography>
              <Typography variant="body1" style={{ marginBottom: 10 }}>
                How can the efficiency of a chess heuristic be measured? This is where plotting data on nice charts comes to the rescue!
              </Typography>
            </Paper>
            <Buttons />
          </Grid>
          <Grid item xs={12} style={{ marginTop: 15 }}>
            <Route exact path="/" render={() => (<Redirect to="/home" />)} />
            <Route
              path="/home"
              render={(props) => <Games />}
            />
          </Grid>
        </Grid>
      </Container>
      <QueryModal />
    </div>
  );
}
