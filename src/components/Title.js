import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { primaryColor } from "../components/helpers/styleUtils";

const useStyles = makeStyles((theme) => ({
  title: {
    color: primaryColor,
    fontSize: "1.75rem",
    fontWeight: "bold",
    padding: "10px 0",
    textTransform: "uppercase"
  }
}));

export default function Landing({ fontSize }) {
  const classes = useStyles();

  return (
    <Typography
      variant="body1"
      component="h1"
      className={classes.title}
      style={{ fontSize: fontSize }}
    >
      Popsicle Sticks
    </Typography>
  );
}
