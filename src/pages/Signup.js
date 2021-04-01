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
  divider: {
    backgroundColor: "#038C4C",
    margin: "2rem 0",
    height: "2px",
    width: "100%"
  },
  links: { margin: "2rem" }
}));

export default function Signup() {
  const classes = useStyles();
  const [signup, setSignup] = useState({});

  const handleChange = (e) => {
    e.preventDefault();
    setSignup({ ...signup, [e.target.name]: e.target.value });
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
      <SolidButton text="Log in" />

      {/* https://material-ui.com/guides/composition/#link */}
      <Typography className={classes.links}>
        <Link
          // component={RouterLink}
          component="button"
          variant="body1"
          underline="none"
          color="inherit"
        >
          Already have an account? Log in
        </Link>
      </Typography>
    </div>
  );
}
