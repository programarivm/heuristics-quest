import React from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import useStyles from 'components/plot/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import SevenTagRoster from 'components/SevenTagRoster';
import Chart from 'components/plot/Chart';
import Subtotal from 'components/plot/Subtotal';
import { prepareHeuristicPicture, calcSubtotal } from 'components/plot/utils';

export default function Games(params) {
  const apiQueryReducer = useSelector(state => state.apiQueryReducer);
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  let games = [];

  apiQueryReducer.games.forEach((game, i) => {
    const data = prepareHeuristicPicture(JSON.parse(game.heuristic_picture));
    data.forEach((item, j) => {
      games.push(<Grid key={`${i}${j}`} container spacing={3}>
        <Grid item xs={12} md={8} lg={9}>
          <Paper className={fixedHeightPaper}>
            <Subtotal {...calcSubtotal(data[j])} />
            <Chart axis={data[j]} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <Paper className={fixedHeightPaper}>
            <SevenTagRoster {...game} />
          </Paper>
        </Grid>
      </Grid>);
    })
  });

  return games;
}
