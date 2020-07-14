import React from 'react';
import Typography from '@material-ui/core/Typography';

const isHeuristic = (key) => {
  return key === 'attack' || key === 'center' || key === 'connectivity' || key === 'king_safety' || key === 'material' ||  key === 'space'
};

export default function SevenTagRoster(game) {
  const items = [];
  Object.keys(game).forEach((key, index) => {
    if (!isHeuristic(key)) {
      if (key === 'movetext') {
        items.push(
          <Typography key={index} variant="subtitle2" color="textSecondary">
            {game[key]}
          </Typography>
        );
      } else {
        items.push(
          <Typography key={index} variant="subtitle2" color="textSecondary">
            {key}: {game[key]}
          </Typography>
        );
      }
    }
  });

  return (
    <React.Fragment>
      {items}
    </React.Fragment>
  );
}
