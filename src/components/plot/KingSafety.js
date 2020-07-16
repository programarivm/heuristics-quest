import React from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import useStyles from 'components/plot/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import SevenTagRoster from 'components/SevenTagRoster';
import Typography from '@material-ui/core/Typography';
import HeuristicChart from 'components/plot/HeuristicChart';
import Subtotal from 'components/plot/Subtotal';
import Total from 'components/plot/Total';
import { filterHeuristic, calcSubtotal } from 'components/plot/utils';

export default function KingSafetyChart() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const apiQueryReducer = useSelector(state => state.apiQueryReducer);
  let total = {
    w: 0,
    b: 0
  };
  let games = [];
  if (apiQueryReducer.games) {
    apiQueryReducer.games.forEach((game, i) => {
      const data = filterHeuristic(JSON.parse(game.king_safety));
      data.forEach((item) => {
        total.w += item.w;
        total.b += item.b;
      });
      games.push(<Grid key={i} container spacing={3}>
        <Grid item xs={12} md={8} lg={9}>
          <Paper className={fixedHeightPaper}>
            <Subtotal {...calcSubtotal(data)} />
            <HeuristicChart axis={data} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <Paper className={fixedHeightPaper}>
            <SevenTagRoster {...game} />
          </Paper>
        </Grid>
      </Grid>);
    });
  }

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumbs}>
        <Typography color="textSecondary">Heuristic</Typography>
        <Typography color="textPrimary">King safety</Typography>
      </Breadcrumbs>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={9}>
          <Total {...total} />
        </Grid>
      </Grid>
      { games }
    </Container>
  );
}
