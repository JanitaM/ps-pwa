import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { makeStyles, Typography } from "@material-ui/core";
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
  links: { textDecoration: "none" },
  linkStyle: {
    margin: "2rem",
    color: "#000"
  }
}));

export default function Signup() {
  let history = useHistory();
  const classes = useStyles();
  const [signup, setSignup] = useState({});

  const handleChange = (e) => {
    e.preventDefault();
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("signup clicked");

    history.push("/signupconfirmation");
  };

  console.log(signup);
  return (
    <div className={classes.container}>
      <Title />
      <Input
        type="email"
        text="Email Address"
        name="email"
        value={signup.email}
        fn={handleChange}
      />
      <Input
        type="password"
        text="Password"
        name="password"
        value={signup.password}
        fn={handleChange}
      />
      <SolidButton text="Sign up" fn={handleSubmit} />
      <Link to="/login" className={classes.links}>
        <Typography className={classes.linkStyle}>
          Already have an account? Log in
        </Typography>
      </Link>
    </div>
  );
}
