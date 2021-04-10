import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Avatar, makeStyles, List, ListItem } from "@material-ui/core";
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

const UserMobileNavbar = ({ signedInUser, signOut, profilePic }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleOnClick = (e) => {
    e.preventDefault();

    signOut();
    // navigate("/");
  };

  return (
    <List onClick={handleDrawerClose}>
      <ListItem className={classes.item}>
        <Title />
      </ListItem>
      <ListItem className={classes.item}>
        <OutlineButton text="Add Items" />
      </ListItem>
      <ListItem className={classes.item}>
        <OutlineButton text="Edit Items" />
      </ListItem>
      <ListItem className={classes.item}>
        <OutlineButton text="Account Settings" />
      </ListItem>
      {/* <ListItem
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Avatar
          src={
            signedInUser && profilePic.length > 0
              ? profilePic
              : "https://pagehardware.files.wordpress.com/2018/07/popsicle.jpg"
          }
          alt="user profile picture"
          className={classes.image}
          variant="rounded"
        />
      </ListItem> */}
      <ListItem>
        <SolidButton text="Sign out" />
      </ListItem>
    </List>
  );
};

export default UserMobileNavbar;
