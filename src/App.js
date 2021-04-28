import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Buttons from 'components/Buttons';
import HeuristicPicture from 'components/plot/heuristic/Picture';
import QueryModal from 'components/modal/Query';

export default function App() {
  return (
    <div>
      <CssBaseline />
      <Buttons />
      <QueryModal />
      <Route exact path="/" render={() => (<Redirect to="/home" />)} />
      <Route
        path="/home"
        render={(props) => <HeuristicPicture />}
      />
    </div>
  );
}
