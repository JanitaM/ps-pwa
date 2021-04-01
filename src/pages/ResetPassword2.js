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

export default function ResetPassword2() {
  const classes = useStyles();
  const [resetValues, setResetValues] = useState({
    email: "",
    code: "",
    password: ""
  });

  const handleChange = (e) => {
    e.preventDefault();
    setResetValues({ ...resetValues, [e.target.name]: e.target.value });
  };

  console.log(resetValues);
  return (
    <div className={classes.container}>
      <Title />
      <Input
        type="email"
        text="Email Address"
        name="email"
        value={resetValues.email}
        fn={handleChange}
      />
      <Input
        type="code"
        text="Reset Code"
        name="code"
        value={resetValues.code}
        fn={handleChange}
      />
      <Input
        type="password"
        text="New Password"
        name="password"
        value={resetValues.password}
        fn={handleChange}
      />
      <SolidButton text="Reset Password" />
    </div>
  );
}
