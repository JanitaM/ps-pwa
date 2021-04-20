import React from "react";
import { useHistory } from "react-router-dom";
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
  links: { margin: "2rem" }
}));

export default function SignupConfirmation() {
  let history = useHistory();
  const classes = useStyles();

  const [code, setCode, resetCode] = useInputState({
    code: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // validation
    resetCode({ code: "" });

    history.push("/");
    console.log(code);
  };

  return (
    <div className={classes.container}>
      <Title />
      <Typography
        className={classes.links}
        variant="body1"
        component="h2"
        color="inherit"
      >
        We emailed you a confirmation code. Please enter it below.
      </Typography>
      <Input
        type="text"
        text="Confirmation Code"
        name="code"
        value={code.code}
        fn={setCode}
      />
      <SolidButton text="Confirm" fn={handleSubmit} />
    </div>
  );
}
