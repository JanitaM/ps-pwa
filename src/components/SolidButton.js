import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import {
  primaryColor,
  primaryHoverColor
} from "../components/helpers/styleUtils";

const useStyles = makeStyles({
  btn: {
    backgroundColor: primaryColor,
    border: `2px solid ${primaryColor}`,
    fontSize: "1rem",
    marginTop: "2rem",
    padding: "1rem 2rem",
    width: "100%",
    "&:hover": {
      backgroundColor: primaryHoverColor
    }
  }
});

export default function SolidButton({ text, fn }) {
  const classes = useStyles();
  return <Button className={classes.btn}>{text}</Button>;
}
