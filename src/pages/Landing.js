import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, Typography } from "@material-ui/core";
import SolidButton from "../components/SolidButton";
import OutlineButton from "../components/OutlineButton";
import Title from "../components/Title";
import Signup from "./Signup";
import Login from "./Login";
import Routes from "../components/Routes";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "10% auto",
    maxWidth: "85%",
    maxHeight: "100vh",
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      maxWidth: "50%"
    }
  },
  title: {
    color: "#038C4C",
    fontSize: "2rem",
    padding: "10px 0",
    textTransform: "uppercase"
  },
  versionTitle: {
    marginTop: "10%"
  }
}));

export default function Landing() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Link to="/signup">
        <SolidButton text="Sign up" />
      </Link>
      <Link to="/login">
        <OutlineButton text="Login" />
      </Link>

      <Typography
        variant="body2"
        component="h2"
        className={classes.versionTitle}
      >
        Version 2.0
      </Typography>
    </div>
  );
}
