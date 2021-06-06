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

const RoomDetails = () => {
  const classes = useStyles();

  const[WashRoom,setWashRoom]=useState("");
  const[People,setPeople]=useState("");
  const[Type,setType]=useState("");
  const[Price,setPrice]=useState("");
  const[Size,setSize]=useState("");
  const[Floor,setFloor]=useState("");
  
  

  
  return (
    <div className="container">
     <div className="room_details">
        <form className={classes.form}>
          <h2 className={classes.formControl}>Room Details</h2>
          <FormControl className={classes.formControl}>
            <TextField
              id="standard-basic"
              value={People}
              onChange={(e) => setPeople(e.target.value)}
              label="No.Of People per Room"
            />
          </FormControl>
          <br />
          <FormControl className={classes.formControl}>
          <TextField
              id="standard-basic"
              value={WashRoom}
              onChange={(e) => setWashRoom(e.target.value)}
              label="No.Of Wash Rooms"
            />
          </FormControl>
          <FormControl className={classes.formControl}>
          <TextField
              id="standard-basic"
              value={Type}
              onChange={(e) => setType(e.target.value)}
              label="Room Type"
            />
            </FormControl>
            <FormControl className={classes.formControl}>
          <TextField
              id="standard-basic"
              value={Price}
              onChange={(e) => setPrice(e.target.value)}
              label="Price"
            />
            </FormControl>
            <FormControl className={classes.formControl}>
            <TextField
              id="standard-basic"
              value={Size}
              onChange={(e) => setSize(e.target.value)}
              label="Room Size"
            />
            </FormControl>
            <FormControl className={classes.formControl}>
            <TextField
              id="standard-basic"
              value={Floor}
              onChange={(e) => setFloor(e.target.value)}
              label="No.Of Floors"
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