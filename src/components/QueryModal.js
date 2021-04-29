import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, Controller } from "react-hook-form";
import { accept as queryAccept, cancel as queryCancel } from 'actions/queryActions';
import useStyles from 'styles/queryModal';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Button, ButtonGroup } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
                <InputLabel id="dataset-label">Player</InputLabel>
                <Controller
                  render={({ field }) => (
                    <Select {...field}>
                      <MenuItem value="capablanca_jose_raul">Capablanca, Jose Raul</MenuItem>
                      <MenuItem value="carlsen_m">Carlsen, Magnus</MenuItem>
                      <MenuItem value="chiburdanidze_maia">Chiburdanidze, Maia</MenuItem>
                      <MenuItem value="fischer_robert_james">Fischer, Robert James</MenuItem>
                      <MenuItem value="gaprindashvili_nona">Gaprindashvili, Nona</MenuItem>
                      <MenuItem value="hou_yifan">Hou Yifan</MenuItem>
                      <MenuItem value="karpov_anatoly">Karpov, Anatoly</MenuItem>
                      <MenuItem value="kasparov_gary">Kasparov, Gary</MenuItem>
                      <MenuItem value="polgar_judit">Polgar, Judit</MenuItem>
                      <MenuItem value="xie_jun">Xie Jun</MenuItem>
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
                <Button color="primary" type="submit">Accept</Button>
                <Button color="secondary" onClick={ (e) => handleClickCancel(e) }>Cancel</Button>
              </ButtonGroup>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
