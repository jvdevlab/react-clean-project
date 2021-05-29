import "./App.css";
import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));
export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{ padding: 15 }}>
      Hello World!
    </div>
  );
}
