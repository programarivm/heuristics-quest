import React from 'react';
import { useDispatch } from 'react-redux';
import { query as apiQuery } from 'actions/apiQueryActions';
import { Link } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import ApiQueryModal from 'components/modal/ApiQuery';

const MainNav = () => {
  const dispatch = useDispatch();

  const handleClickApiQuery = (e) => {
    e.preventDefault();
    dispatch(apiQuery());
  };

  return (
    <div>
      <ListItem button onClick={handleClickApiQuery}>
        <ListItemIcon>
          <FlashOnIcon />
        </ListItemIcon>
        <ListItemText secondary="Query" />
      </ListItem>
      <Divider />
      <ListItem button component={Link} to="/heuristic-picture">
        <ListItemIcon>
          <PhotoLibraryIcon />
        </ListItemIcon>
        <ListItemText secondary="Heuristic picture" />
      </ListItem>
      <ApiQueryModal />
    </div>
  );
}

export default MainNav;
