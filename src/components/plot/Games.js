import React from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import useStyles from 'components/plot/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import SevenTagRoster from 'components/SevenTagRoster';
import Chart from 'components/plot/Chart';
import Subtotal from 'components/plot/Subtotal';
import Total from 'components/plot/Total';
import { filterHeuristic, calcSubtotal } from 'components/plot/utils';

export default function Games(params) {
  const apiQueryReducer = useSelector(state => state.apiQueryReducer);
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  let total = { w: 0, b: 0 };
  let games = [];
  apiQueryReducer.games.forEach((game, i) => {
    const data = filterHeuristic(JSON.parse(game[params.heuristic]));
    data.forEach((item) => {
      total.w += item.w;
      total.b += item.b;
    });
    games.push(<Grid key={i} container spacing={3}>
      <Grid item xs={12} md={8} lg={9}>
        <Paper className={fixedHeightPaper}>
          <Subtotal {...calcSubtotal(data)} />
          <Chart axis={data} />
        </Paper>
      </Grid>
      <Grid item xs={12} md={4} lg={3}>
        <Paper className={fixedHeightPaper}>
          <SevenTagRoster {...game} />
        </Paper>
      </Grid>
    </Grid>);
  });

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={9}>
          <Total {...total} />
        </Grid>
      </Grid>
      { games }
    </div>
  );
}
