import React, { useState } from "react";
import { makeStyles, List, ListItem } from "@material-ui/core";
import Input from "../components/Input";
import SolidButton from "../components/SolidButton";
import useInputState from "../components/helpers/hooks/useInputState";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "0 auto",
    minWidth: "85%",
    maxHeight: "100vh",
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      maxWidth: "50%"
    }
  }
}));

export default function AddItem({ handleDrawerClose }) {
  const classes = useStyles();
  const [item, setItem, resetItem] = useInputState({
    title: "",
    location: "",
    description: "",
    price: "",
    indoorOrOutdoor: "",
    tag: "",
    url: "",
    picture: "",
    weather: ""
  });

  const handleOnClick = (e) => {
    e.preventDefault();
    resetItem();

    handleDrawerClose();
    console.log(item);
  };

  return (
    <form className={classes.container}>
      <Input
        type="text"
        text="Title"
        name="title"
        value={item.title}
        fn={setItem}
      />
      <Input
        type="text"
        text="Location"
        name="location"
        value={item.location}
        fn={setItem}
      />
      <Input
        type="text"
        text="Description"
        name="description"
        value={item.description}
        fn={setItem}
      />
      <Input
        type="text"
        text="Price"
        name="price"
        value={item.price}
        fn={setItem}
      />
      <Input
        type="text"
        text="Indoor/Outdoor"
        name="indoorOrOutdoor"
        value={item.indoorOrOutdoor}
        fn={setItem}
      />
      <Input type="text" text="Tag" name="tag" value={item.tag} fn={setItem} />
      <Input type="text" text="URL" name="url" value={item.url} fn={setItem} />

      <SolidButton text="Save" fn={handleOnClick} />
    </form>
  );
}
