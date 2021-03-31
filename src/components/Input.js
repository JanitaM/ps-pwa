import React from "react";
import {
  makeStyles,
  TextField,
  Typography,
  withStyles
} from "@material-ui/core";
import {
  primaryColor,
  primaryHoverColor
} from "../components/helpers/styleUtils";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "2rem"
  },
  title: {
    textAlign: "left"
  }
}));

const CssTextField = withStyles({
  root: {
    "& .MuiOutlinedInput-input": {
      fontSize: "1.15rem",
      padding: "1rem"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: primaryColor
      },
      "&:hover fieldset": {
        borderColor: primaryHoverColor,
        borderWidth: "3px"
      },
      "&.Mui-focused fieldset": {
        borderColor: primaryHoverColor
      }
    }
  }
})(TextField);

export default function Input({ type, text, value, fn }) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography variant="body1" component="h2" className={classes.title}>
        {text}
      </Typography>
      <CssTextField
        type={type}
        name={text}
        value={value}
        onChange={fn}
        fullWidth
        required
        focused
        inputProps={{
          "aria-label": { text }
        }}
        variant="outlined"
      />
    </div>
  );
}
