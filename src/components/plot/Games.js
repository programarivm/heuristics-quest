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

  let items = [];
  apiQueryReducer.games.forEach((game, i) => {
    const data = prepareHeuristicPicture(JSON.parse(game.heuristic_picture));
    const games = [];
    data.forEach((item, j) => {
      games.push(<Grid key={`${i}${j}`} item xs={12}>
        <Paper className={fixedHeightPaper}>
          <Subtotal {...calcSubtotal(data[j])} />
          <Chart axis={data[j]} />
        </Paper>
      </Grid>);
    });
    items.push(<Grid key={i} container spacing={3}>
      <Grid item xs={12}>
        <Paper className={fixedHeightPaper}>
          <SevenTagRoster {...game} />
        </Paper>
      </Grid>
      { games }
    </Grid>);
  });

  return items;
}
