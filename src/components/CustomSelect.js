import React from "react";
import {
  FormControl,
  InputBase,
  makeStyles,
  MenuItem,
  Select,
  Typography,
  withStyles
} from "@material-ui/core";
import { primaryColor, primaryHoverColor } from "./helpers/styleUtils";

const CssInput = withStyles((theme) => ({
  input: {
    borderRadius: "4px",
    position: "relative",
    backgroundColor: "#FFF",
    border: `2px solid ${primaryColor}`,
    fontSize: "1.15rem",
    padding: "0.8rem",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    textAlign: "left",
    "&:focus": {
      borderColor: primaryHoverColor,
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
    },
    "&:hover": {
      borderColor: primaryHoverColor,
      borderWidth: "3px"
    }
  }
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  errorMsg: {
    color: "#A61003",
    textAlign: "right"
  },
  inputContainer: {
    width: "100%",
    marginTop: "2rem"
  },
  title: { textAlign: "left" }
}));

export default function CustomSelect({ text, value, name, fn, arr }) {
  const classes = useStyles();
  const handleChange = (event) => {
    fn(event);
  };

  return (
    <FormControl className={classes.inputContainer}>
      <Typography variant="body1" component="h2" className={classes.title}>
        {text}
      </Typography>
      <Select
        type="text"
        name={name}
        value={value}
        onChange={handleChange}
        input={<CssInput />}
      >
        {arr.map((item) => (
          <MenuItem value={item} aria-label={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
      <Typography variant="body1" component="h2" className={classes.errorMsg}>
        Error here
      </Typography>
    </FormControl>
  );
}
