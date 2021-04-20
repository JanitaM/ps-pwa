import React from "react";
import { Link, useHistory } from "react-router-dom";
import useInputState from "../components/helpers/hooks/useInputState";
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
  const [signup, setSignup, resetSignup] = useInputState({
    email: "",
    password: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // validation
    resetSignup({
      email: "",
      password: ""
    });

    history.push("/signupconfirmation");
    console.log(signup);
  };

  return (
    <div className={classes.container}>
      <Title />
      <Input
        type="email"
        text="Email Address"
        name="email"
        value={signup.email}
        fn={setSignup}
      />
      <Input
        type="password"
        text="Password"
        name="password"
        value={signup.password}
        fn={setSignup}
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
