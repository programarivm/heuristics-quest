import React from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import useStyles from 'components/plot/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import SevenTagRoster from 'components/SevenTagRoster';
import Chart from 'components/plot/Chart';
import Subtotal from 'components/plot/Subtotal';
import { prepareHeuristicPicture, calcSubtotal } from 'components/plot/utils';

export default function Games(params) {
  const apiQueryReducer = useSelector(state => state.apiQueryReducer);
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const items = [];
  const games = [];
  const rows = [];
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
        <Grid key={i} container spacing={2}>
          <Grid item xs={12}>
            <Box mt={3}>
              <SevenTagRoster {...game} />
            </Box>
          </Grid>
          { charts }
        </Grid>
      );
    });

    total.forEach((t, i) => {
      rows.push({
        name: i,
        w: t.w.toLocaleString(),
        b: t.b.toLocaleString(),
        result: (t.w / t.b).toLocaleString()
      });
    });

    games.push(
      <Grid key={0} container spacing={2}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Heuristic</TableCell>
                <TableCell align="right">White</TableCell>
                <TableCell align="right">Black</TableCell>
                <TableCell align="right">White / Black</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">{row.name}</TableCell>
                  <TableCell align="right">{row.w}</TableCell>
                  <TableCell align="right">{row.b}</TableCell>
                  <TableCell align="right">{row.result}</TableCell>
                </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        { items }
      </Grid>
    );
  }

  return games;
}
