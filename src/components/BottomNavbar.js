import React from "react";
import {
  AppBar,
  CssBaseline,
  makeStyles,
  Toolbar,
  IconButton
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";
import { primaryColor } from "./helpers/styleUtils";

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: "auto",
    bottom: 0,
    backgroundColor: primaryColor
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-evenly"
  }
}));

export default function BottomNavbar() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <IconButton color="inherit">
            <AddIcon />
          </IconButton>
          <IconButton color="inherit">
            <EditIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}
