import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { makeStyles, List, ListItem } from "@material-ui/core";
import SolidButton from "../components/SolidButton";
import OutlineButton from "../components/OutlineButton";

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

export default function EditItem({ handleDrawerClose }) {
  const classes = useStyles();

  const handleOnClick = (e) => {
    e.preventDefault();
    handleDrawerClose();
  };

  return (
    <List>
      <ListItem className={classes.item}>
        <OutlineButton text="Display items" />
      </ListItem>
      <ListItem>
        <SolidButton text="Save" fn={handleOnClick} />
      </ListItem>
    </List>
  );
}
