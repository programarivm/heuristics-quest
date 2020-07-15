import React from 'react';
import Box from '@material-ui/core/Box';
import loading from 'images/loading.gif';

export default function Loading(show) {
    if (show.loading) {
      return (
        <Box display="flex" justifyContent="center" m={1} p={1}>
          <img src={loading} alt="loading" />
        </Box>
      );
    }

    return null;
}
