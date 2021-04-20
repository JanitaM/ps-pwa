import React, { useState } from "react";
import { makeStyles, List, ListItem } from "@material-ui/core";
import Input from "./Input";
import SolidButton from "./SolidButton";
import useInputState from "./helpers/hooks/useInputState";

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

export default function AddItem({ handleDrawerClose }) {
  const classes = useStyles();
  const [item, setItem, resetItem] = useInputState({
    title: "",
    description: ""
  });

  const handleOnClick = (e) => {
    e.preventDefault();
    resetItem({
      title: "",
      description: ""
    });

    handleDrawerClose();
    console.log(item);
  };

  return (
    <List>
      <ListItem className={classes.item}>
        <Input
          type="text"
          text="Title"
          name="title"
          value={item.title}
          fn={setItem}
        />
      </ListItem>
      <ListItem className={classes.item}>
        <Input
          type="text"
          text="Description"
          name="description"
          value={item.description}
          fn={setItem}
        />
      </ListItem>
      <ListItem>
        <SolidButton text="Save" fn={handleOnClick} />
      </ListItem>
    </List>
  );
}
