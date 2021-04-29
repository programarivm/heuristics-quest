import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  a: {
    color: '#2980b9',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  box: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));
