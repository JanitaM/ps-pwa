import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { makeStyles, List, ListItem } from "@material-ui/core";
import Title from "./Title";
import SolidButton from "./SolidButton";
import OutlineButton from "./OutlineButton";

const useStyles = makeStyles((theme) => ({
  item: { display: "flex", justifyContent: "center", alignItems: "center" },
  image: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "80%",
    textAlign: "center",
    padding: "1rem",
    width: "80%"
  },
  mobileLink: {
    color: "#333",
    fontSize: "1.75rem",
    lineHeight: "1.43",
    letterSpacing: "0.01071em",
    width: "50vw"
  }
}));

export default function TopMenu({ handleDrawer }) {
  const classes = useStyles();

  const handleOnClick = (e) => {
    e.preventDefault();
    // navigate("/");
  };

  return (
    <List onClick={handleDrawer}>
      <ListItem className={classes.item}>
        <Title fontSize="2rem" />
      </ListItem>
      <ListItem className={classes.item}>
        <OutlineButton text="Account" />
      </ListItem>
      <ListItem>
        <SolidButton text="Sign out" />
      </ListItem>
    </List>
  );
}
