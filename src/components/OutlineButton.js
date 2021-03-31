import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import {
  primaryColor,
  primaryHoverColor
} from "../components/helpers/styleUtils";

const useStyles = makeStyles({
  btn: {
    backgroundColor: "#FFF",
    border: `2px solid ${primaryColor}`,
    fontSize: "1rem",
    fontWeight: "bold",
    marginTop: "2rem",
    padding: "1rem 2rem",
    width: "100%",
    "&:hover": {
      borderColor: primaryHoverColor,
      backgroundColor: primaryHoverColor
    }
  }
});

export default function OutlineButton({ text, fn }) {
  const classes = useStyles();
  return <Button className={classes.btn}>{text}</Button>;
}
