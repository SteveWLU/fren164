import React from 'react';
import { Grid } from '@material-ui/core';
import Header from './components/Header';
import Content from './components/Content';

export default function App() {

  return (
    <div className="App">
      <Grid container direction="column">
        <Grid item>
          <Header />
        </Grid>
        <Grid item container>
          <Grid xs={false} sm={2} />
          <Grid item xs={12} sm={8}>
            <Content />
          </Grid>
          <Grid xs={false} sm={2} />
        </Grid>
      </Grid>
    </div>
  );
}