import React from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import useStyles from 'components/plot/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import SevenTagRoster from 'components/SevenTagRoster';
import Typography from '@material-ui/core/Typography';
import Chart from 'components/plot/Chart';
import Subtotal from 'components/plot/Subtotal';
import { prepareHeuristicPicture, calcSubtotal } from 'components/plot/utils';

export default function Games(params) {
  const apiQueryReducer = useSelector(state => state.apiQueryReducer);
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const overview = [];
  const items = [];
  const games = [];

  if (apiQueryReducer.games[0]) {
    const dimension = JSON.parse(apiQueryReducer.games[0].heuristic_picture).w[0].length;
    const total = new Array(dimension).fill(null).map(() => ({ w: 0, b: 0 }));

    apiQueryReducer.games.forEach((game, i) => {
      let subtotal = {};
      const heuristicPicture = JSON.parse(game.heuristic_picture);
      const data = prepareHeuristicPicture(heuristicPicture);
      const charts = [];

      data.forEach((item, j) => {
        subtotal = calcSubtotal(data[j]);
        total[j].w += subtotal.w;
        total[j].b += subtotal.b;
        charts.push(<Grid key={i+j} item xs={4}>
          <Paper className={fixedHeightPaper}>
            <Subtotal {...subtotal} />
            <Chart axis={data[j]} />
          </Paper>
        </Grid>);
      });

      items.push(
        <Grid key={i} container spacing={3}>
          <Grid item xs={12}>
            <SevenTagRoster {...game} />
          </Grid>
          { charts }
        </Grid>
      );
    });

    total.forEach((t, i) => {
      overview.push(
        <Grid key={i}>
          <Typography variant="h4" gutterBottom>
            <span style={{ color: "#82ca9d" }}>
              {t.w.toFixed(2)}
            </span>&nbsp;
            <span style={{ color: "#ccc" }}>vs</span>&nbsp;
            <span style={{ color: "#8884d8" }}>
              {t.b.toFixed(2)}
            </span>&nbsp;
          </Typography>
        </Grid>
      );
    });

    games.push(
      <Grid key={0} container spacing={3}>
        { overview }
        { items }
      </Grid>
    );
  }

  return games;
}
