import React, { useState } from "react";
import { makeStyles, List, ListItem } from "@material-ui/core";
import Input from "../components/Input";
import SolidButton from "../components/SolidButton";
import OutlineButton from "../components/OutlineButton";
import CustomSelect from "../components/CustomSelect";
import useInputState from "../components/helpers/hooks/useInputState";
import UploadImgModal from "../components/UploadImgModal";
import SimpleModal from "../components/UploadImgModal";

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

export default function AddItem({ handleDrawer }) {
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

  const uploadPicture = () => {
    // open modal
    console.log("open modal");
    <SimpleModal openModal={true} />;
  };

  const handleOnClick = (e) => {
    e.preventDefault();
    resetItem();

    handleDrawer();
    console.log(item);
  };

  return (
    <form className={classes.container}>
      <Input text="Title" name="title" value={item.title} fn={setItem} />
      <Input
        text="Location"
        name="location"
        value={item.location}
        fn={setItem}
      />
      <Input
        text="Description"
        name="description"
        value={item.description}
        fn={setItem}
      />
      <Input text="URL" name="url" value={item.url} fn={setItem} />
      <CustomSelect
        text="Price"
        value={item.price}
        name="price"
        fn={setItem}
        arr={[" ", "$", "$$", "$$$"]}
      />
      <CustomSelect
        text="Indoor/Outdoor"
        value={item.indoorOrOutdoor}
        name="indoorOrOutdoor"
        fn={setItem}
        arr={[" ", "Indoor", "Outdoor"]}
      />
      <CustomSelect
        text="Weather"
        value={item.weather}
        name="weather"
        fn={setItem}
        arr={[" ", "Sunny", "Raining", "Cold"]}
      />
      <Input text="Tag" name="tag" value={item.tag} fn={setItem} />
      <OutlineButton text="Add Image" fn={uploadPicture} />
      <SolidButton text="Save" fn={handleOnClick} />
    </form>
  );
}
