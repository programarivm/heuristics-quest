import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, Controller } from "react-hook-form";
import { makeStyles } from '@material-ui/core/styles';
import { accept as queryAccept, cancel as queryCancel } from 'actions/queryActions';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Button, ButtonGroup } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';

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
export default function Query() {
  const classes = useStyles();
  const queryReducer = useSelector(state => state.queryReducer);
  const dispatch = useDispatch();
  const { control, handleSubmit } = useForm();

  const handleClickCancel = () => {
    dispatch(queryCancel());
  };

  const onSubmitForm = (data) => {
    dispatch(queryAccept(data));
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={queryReducer.modal.open}
        onClose={handleClickCancel}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={queryReducer.modal.open}>
          <div className={classes.paper}>
            <Typography variant="h5" align="center">
              Query
            </Typography>
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
                <InputLabel id="dataset-label">Dataset</InputLabel>
                <Controller
                  render={({ field }) => (
                    <Select {...field}>
                      <MenuItem value="01">1</MenuItem>
                      <MenuItem value="02">2</MenuItem>
                      <MenuItem value="03">3</MenuItem>
                      <MenuItem value="04">4</MenuItem>
                      <MenuItem value="05">5</MenuItem>
                    </Select>
                  )}
                  name="dataset"
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