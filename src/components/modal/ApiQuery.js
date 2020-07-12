import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from "react-hook-form";
import { makeStyles } from '@material-ui/core/styles';
import { accept as apiQueryAccept } from 'actions/apiQueryActions';
import { cancel as apiQueryCancel } from 'actions/apiQueryActions';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Button, ButtonGroup, TextField } from '@material-ui/core';

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
}));

export default function ApiQuery() {
  const classes = useStyles();
  const apiQueryReducer = useSelector(state => state.apiQueryReducer);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const handleClickCancel = () => {
    dispatch(apiQueryCancel());
  };

  const onSubmitForm = (data) => {
    dispatch(apiQueryAccept(data));
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
            <form onSubmit={handleSubmit(onSubmitForm)}>
              <TextField
                required
                fullWidth
                multiline
                id="sql"
                label="SQL Query"
                name="sql"
                margin="normal"
                InputLabelProps={{ shrink: true }}
                inputRef={register}
                rows={3}
              />
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
