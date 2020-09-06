import React from 'react';
import { Route, Switch } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import MainNav from 'components/MainNav';
import HeuristicAttack from 'components/plot/heuristic/Attack';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: 240,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        className="classes.drawerPaper"
        classes={{
          paper: clsx(classes.drawerPaper),
        }}
      >
        <MainNav />
      </Drawer>
      <main className={classes.content}>
        <Switch>
          <Route exact path="/" component={HeuristicAttack} />
          <Route path="/attack" component={HeuristicAttack} />
        </Switch>
      </main>
    </div>
  );
}
