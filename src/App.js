import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { CssBaseline, Container, Grid } from '@material-ui/core';
import Buttons from 'components/Buttons';
import Games from 'components/plot/Games';
import QueryModal from 'components/QueryModal';

export default function App() {
  return (
    <div>
      <CssBaseline />
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12} style={{ marginTop: 15 }}>
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
