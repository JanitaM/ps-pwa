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

export default function ResetPassword2() {
  const classes = useStyles();
  let history = useHistory();

  const [values, setValues, resetValues] = useInputState({
    email: "",
    code: "",
    password: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // validation
    resetValues();

    history.push("/login");
    console.log(values);
  };

  return (
    <form className={classes.container}>
      <Title />
      <Input
        type="email"
        text="Email Address"
        name="email"
        value={values.email}
        fn={setValues}
      />
      <Input
        type="code"
        text="Reset Code"
        name="code"
        value={values.code}
        fn={setValues}
      />
      <Input
        type="password"
        text="New Password"
        name="password"
        value={values.password}
        fn={setValues}
      />
      <SolidButton text="Reset Password" fn={handleSubmit} />
    </form>
  );
}
