import { useDispatch } from "react-redux";
import { query } from 'actions/queryActions';
import { Button, ButtonGroup } from '@material-ui/core';
import CameraAltIcon from '@material-ui/icons/CameraAlt';

const Buttons = () => {
  const dispatch = useDispatch();

  return (
    <ButtonGroup>
      <Button
        variant="contained"
        color="primary"
        startIcon={<CameraAltIcon />}
        onClick={() => dispatch(query())}
      >
        Take pictures
      </Button>
    </ButtonGroup>
  );
};

export default Buttons;
