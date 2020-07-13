import React from 'react';
import { useSelector } from 'react-redux';
import { CartesianGrid, Legend, LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import clsx from 'clsx';
import useStyles from 'components/chart/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import SevenTagRoster from 'components/SevenTagRoster';
import Typography from '@material-ui/core/Typography';
import { filterHeuristic } from 'components/chart/utils';

export default function CenterChart() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const apiQueryReducer = useSelector(state => state.apiQueryReducer);

  let games = [];
  if (apiQueryReducer.games) {
    apiQueryReducer.games.forEach((game, i) => {
      games.push(<Grid key={i} container spacing={3}>
        <Grid item xs={12} md={8} lg={9}>
          <Paper className={fixedHeightPaper}>
            <React.Fragment>
              <ResponsiveContainer>
                <LineChart
                  width={500}
                  height={300}
                  data={filterHeuristic(JSON.parse(game.center))}
                  margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="n" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="w" stroke="#82ca9d" fill="#82ca9d" strokeWidth={2} />
                  <Line type="monotone" dataKey="b" stroke="#8884d8" fill="#8884d8" strokeWidth={2} activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </React.Fragment>
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
        <Typography color="textPrimary">Center</Typography>
      </Breadcrumbs>
      { games }
    </Container>
  );
}
