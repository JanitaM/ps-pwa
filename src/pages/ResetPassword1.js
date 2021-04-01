import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import Title from "../components/Title";
import Input from "../components/Input";
import SolidButton from "../components/SolidButton";

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
  divider: {
    backgroundColor: "#038C4C",
    margin: "2rem 0",
    height: "2px",
    width: "100%"
  },
  links: { margin: "2rem" }
}));

export default function ResetPassword1() {
  const classes = useStyles();
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  console.log(email);
  return (
    <div className={classes.container}>
      <Title />
      <Input
        type="email"
        text="Email Address"
        name="email"
        value={email}
        fn={handleChange}
      />
      <SolidButton text="Send Reset Code" />
    </div>
  );
}
