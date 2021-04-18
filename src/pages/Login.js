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
  links: { textDecoration: "none" },
  linkContainer: { margin: "2rem" },
  linkStyle: {
    margin: "2rem",
    color: "#000"
  }
}));

export default function Login() {
  let history = useHistory();
  const classes = useStyles();
  const [login, setLogin] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    e.preventDefault();
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("login clicked");

    history.push("/");
  };

  console.log(login);
  return (
    <form className={classes.container}>
      <Title />
      <Input
        type="email"
        text="Email Address"
        name="email"
        value={login.email}
        fn={handleChange}
      />
      <Input
        type="password"
        text="Password"
        name="password"
        value={login.password}
        fn={handleChange}
      />
      <SolidButton text="Login" fn={handleSubmit} />
      <div className={classes.linkContainer}>
        <Link to="/resetpassword" className={classes.links}>
          <Typography className={classes.linkStyle}>
            Forgot password?
          </Typography>
        </Link>
        <Link to="/signup" className={classes.links}>
          <Typography className={classes.linkStyle}>
            <div style={{ display: "block" }}>Don't have an account?</div>
            Sign up
          </Typography>
        </Link>
      </div>
    </form>
  );
}
