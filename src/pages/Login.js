import React, { useState } from "react";
import { makeStyles, Typography, Link } from "@material-ui/core";
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
  linkContainer: { margin: "2rem" },
  links: { margin: "0.5rem 0" }
}));

export default function Login() {
  const classes = useStyles();
  const [login, setLogin] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    e.preventDefault();
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("login clicked");
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
      <SolidButton text="Login" fn={onSubmit} />

      {/* https://material-ui.com/guides/composition/#link */}
      <div className={classes.linkContainer}>
        {["Forgot password?", "Don't have an account? Sign up"].map((route) => (
          <Typography className={classes.links} key={route}>
            <Link
              // component={RouterLink}
              component="button"
              variant="body1"
              underline="none"
              color="inherit"
            >
              {route}
            </Link>
          </Typography>
        ))}
      </div>
    </form>
  );
}
