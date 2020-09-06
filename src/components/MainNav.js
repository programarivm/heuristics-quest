import React from 'react';
import { useDispatch } from 'react-redux';
import { query as apiQuery } from 'actions/apiQueryActions';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Collapse from '@material-ui/core/Collapse';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import CloudIcon from '@material-ui/icons/Cloud';
import BarChartIcon from '@material-ui/icons/BarChart';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import ApiQueryModal from 'components/modal/ApiQuery';

const useStyles = makeStyles((theme) => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const MainNav = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const handleClickApiSubmenu = () => {
    setOpen(!open);
  };

  const handleClickApiQuery = (e) => {
    e.preventDefault();
    dispatch(apiQuery());
  };

  return (
    <div>
      <div>
        <ListItem button onClick={handleClickApiSubmenu}>
          <ListItemIcon>
            <CloudIcon />
          </ListItemIcon>
          <ListItemText secondary="API" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested} onClick={handleClickApiQuery}>
              <ListItemIcon>
                <FlashOnIcon />
              </ListItemIcon>
              <ListItemText secondary="Query" />
            </ListItem>
          </List>
        </Collapse>
        <Divider />
        <ListItem button component={Link} to="/visualization">
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText secondary="Visualization" />
        </ListItem>
      </div>
      <ApiQueryModal />
    </div>
  );
}

export default MainNav;
