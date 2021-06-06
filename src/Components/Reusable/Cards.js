import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    margin: "10px 10px",
    borderRadius:"20px",
    
    
    
  },
});

const Cards = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography variant="h6">{props.title}</Typography>
        </CardContent>
        <CardContent>
          <Typography variant="h6">{props.description}</Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
  );
};

export default Cards;