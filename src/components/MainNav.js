import React from 'react';
import { useDispatch } from 'react-redux';
import { query } from 'actions/queryActions';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import QueryModal from 'components/modal/Query';

const MainNav = () => {
  const dispatch = useDispatch();

  const handleClickQuery = (e) => {
    e.preventDefault();
    dispatch(query());
  };

  return (
    <div>
      <ListItem button onClick={handleClickQuery}>
        <ListItemIcon>
          <FlashOnIcon />
        </ListItemIcon>
        <ListItemText secondary="Query" />
      </ListItem>
      <QueryModal />
    </div>
  );
}

export default MainNav;
