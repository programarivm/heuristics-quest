import { useDispatch } from "react-redux";
import { query } from 'actions/queryActions';
import { Button, ButtonGroup } from '@material-ui/core';
import FlashOnIcon from '@material-ui/icons/FlashOn';

const Buttons = () => {
  const dispatch = useDispatch();

  return (
    <ButtonGroup>
      <Button
        variant="contained"
        color="default"
        startIcon={<FlashOnIcon />}
        onClick={() => dispatch(query())}
      >
        Query
      </Button>
    </ButtonGroup>
  );
};

export default Buttons;
