import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, Controller } from "react-hook-form";
import { makeStyles } from '@material-ui/core/styles';
import { accept as apiQueryAccept, cancel as apiQueryCancel } from 'actions/apiQueryActions';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Button, ButtonGroup } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import Loading from 'components/Loading';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  formControl: {
    margin: theme.spacing(1),
    width: '100%',
  },
}));

/**
 * Modal to query the API.
 * {@link https://github.com/react-hook-form/react-hook-form/issues/497}
 */
export default function ApiQuery() {
  const classes = useStyles();
  const apiQueryReducer = useSelector(state => state.apiQueryReducer);
  const dispatch = useDispatch();
  const { control, handleSubmit } = useForm();

  const handleClickCancel = () => {
    dispatch(apiQueryCancel());
  };

  const onSubmitForm = (data) => {
    dispatch(apiQueryAccept());
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={apiQueryReducer.modal.open}
        onClose={handleClickCancel}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={apiQueryReducer.modal.open}>
          <div className={classes.paper}>
            <Typography variant="h5" align="center">
              API Query
            </Typography>
            <Loading loading={apiQueryReducer.loading} />
            <form onSubmit={handleSubmit(onSubmitForm)}>
              <FormControl className={classes.formControl}>
                <InputLabel id="result-label">Result</InputLabel>
                <Controller
                  render={({ field }) => (
                    <Select {...field}>
                      <MenuItem value="1-0">1-0</MenuItem>
                      <MenuItem value="0-1">0-1</MenuItem>
                      <MenuItem value="1/2-1/2">1/2-1/2</MenuItem>
                    </Select>
                  )}
                  name="result"
                  control={control}
                  defaultValue=""
                  required
                />
              </FormControl>
              <FormControl className={classes.formControl}>
                <InputLabel id="limit-label">Limit</InputLabel>
                <Controller
                  render={({ field }) => (
                    <Select {...field}>
                      <MenuItem value="10">10</MenuItem>
                      <MenuItem value="50">50</MenuItem>
                      <MenuItem value="100">100</MenuItem>
                    </Select>
                  )}
                  name="limit"
                  control={control}
                  defaultValue=""
                  required
                />
              </FormControl>
              <ButtonGroup
                style={{ marginTop: 10, marginBottom: 10 }}
                size="small"
                fullWidth
              >
                <Button color="primary" type="submit">Run</Button>
                <Button color="secondary" onClick={ (e) => handleClickCancel(e) }>Cancel</Button>
              </ButtonGroup>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
