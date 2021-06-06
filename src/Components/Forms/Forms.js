import React, { useState } from "react";
import {
  FormControl,
  TextField,
  makeStyles,
  Button,
  
} from "@material-ui/core";

const useStyles = makeStyles({
  formControl: {
    width: 300,
    margin: "10px  20px 0 20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  button: {
    margin: 30,
  },
});

const RoomDetails = (props) => {
  const classes = useStyles();
  
  return (
    <div className="container">
     <div className="room_details">
        <form className={classes.form}>
          <h2 className={classes.formControl}>Room Details</h2>
          <FormControl className={classes.formControl}>
            <TextField
              id="standard-basic"
              value={props.value}
              onChange={props.functions}
              label={props.label}
            />
          </FormControl>
          <Button
            className={classes.button}
            variant="contained"
            size="medium"
            color="primary"
          >
           Submit
          </Button>
          <Button
            className={classes.button}
            variant="contained"
            size="medium"
            color="primary"
          >
           Clear Values
          </Button>
        </form>
      </div>
    </div>
  );
};
export default RoomDetails;