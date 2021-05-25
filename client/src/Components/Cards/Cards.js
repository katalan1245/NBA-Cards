import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

import NBACard from "./Card/Card";

import useStyles from "./styles";

const Form = ({ setCurrentId }) => {
  const cards = useSelector((state) => state.cards);
  const classes = useStyles();

  return !cards.length ? (
    <CircularProgress
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    />
  ) : (
    <Grid>
      {cards.map((card) => (
        <Grid key={card._id} item xs={12} sm={6}>
          <NBACard card={card} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Form;
