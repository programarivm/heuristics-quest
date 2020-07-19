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
import VerticalAlignCenterIcon from '@material-ui/icons/VerticalAlignCenter';
import WidgetsIcon from '@material-ui/icons/Widgets';
import SportsKabaddiIcon from '@material-ui/icons/SportsKabaddi';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import SecurityIcon from '@material-ui/icons/Security';
import GrainIcon from '@material-ui/icons/Grain';
import NetworkWifiIcon from '@material-ui/icons/NetworkWifi';
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
        <ListItem button component={Link} to="/attack">
          <ListItemIcon>
            <SportsKabaddiIcon />
          </ListItemIcon>
          <ListItemText secondary="Attack" />
        </ListItem>
        <ListItem button component={Link} to="/center">
          <ListItemIcon>
            <VerticalAlignCenterIcon />
          </ListItemIcon>
          <ListItemText secondary="Center" />
        </ListItem>
        <ListItem button component={Link} to="/check">
          <ListItemIcon>
            <AnnouncementIcon />
          </ListItemIcon>
          <ListItemText secondary="Check" />
        </ListItem>
        <ListItem button component={Link} to="/connectivity">
          <ListItemIcon>
            <NetworkWifiIcon />
          </ListItemIcon>
          <ListItemText secondary="Connectivity" />
        </ListItem>
        <ListItem button component={Link} to="/king-safety">
          <ListItemIcon>
            <SecurityIcon />
          </ListItemIcon>
          <ListItemText secondary="King safety" />
        </ListItem>
        <ListItem button component={Link} to="/material">
          <ListItemIcon>
            <GrainIcon />
          </ListItemIcon>
          <ListItemText secondary="Material" />
        </ListItem>
        <ListItem button component={Link} to="/space">
          <ListItemIcon>
            <WidgetsIcon />
          </ListItemIcon>
          <ListItemText secondary="Space" />
        </ListItem>
      </div>
      <ApiQueryModal />
    </div>
  );
}

export default MainNav;
