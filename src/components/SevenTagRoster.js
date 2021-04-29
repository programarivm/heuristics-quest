import React from 'react';
import Typography from '@material-ui/core/Typography';

const isBlacklist = (key) => {
  return key === 'id' ||
    key === 'heuristic_picture' ||
    key === 'heuristic_evaluation' ||
    key === 'Event' ||
    key === 'Site' ||
    key === 'Date' ||
    key === 'White' ||
    key === 'Black' ||
    key === 'WhiteElo' ||
    key === 'BlackElo' ||
    key === 'ECO';
};

export default function SevenTagRoster(game) {
  const items = [];
  Object.keys(game).forEach((key, index) => {
    if (!isBlacklist(key)) {
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
