import React from "react";
import { Link, useHistory } from "react-router-dom";
import { makeStyles, Typography } from "@material-ui/core";
import useInputState from "../components/helpers/hooks/useInputState";
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
  const [login, setLogin, resetLogin] = useInputState({
    email: "",
    password: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // validation
    resetLogin({
      email: "",
      password: ""
    });

    history.push("/");
    console.log(login);
  };

  return (
    <form className={classes.container}>
      <Title />
      <Input
        type="email"
        text="Email Address"
        name="email"
        value={login.email}
        fn={setLogin}
      />
      <Input
        type="password"
        text="Password"
        name="password"
        value={login.password}
        fn={setLogin}
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
