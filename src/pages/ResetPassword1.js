import React from "react";
import { useHistory } from "react-router-dom";
import useInputState from "../components/helpers/hooks/useInputState";
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
  let history = useHistory();
  const classes = useStyles();
  const [email, setEmail, resetEmail] = useInputState({ email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    // validation
    resetEmail();

    history.push("/resetpassword2");
    console.log(email);
  };

  return (
    <form className={classes.container}>
      <Title />
      <Input
        type="email"
        text="Email Address"
        name="email"
        value={email.email}
        fn={setEmail}
      />
      <SolidButton text="Send Reset Code" fn={handleSubmit} />
    </form>
  );
}
