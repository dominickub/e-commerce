import React, { useState } from "react";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {useNavigate} from 'react-router-dom';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    border: "4px",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    if (formData.password === formData.password_confirmation) {
      fetch("/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((formData) => {
          console.log(formData);
          // something to append to the UI the obj created
        });
    } else {
      alert("Password has to be the same");
    }
    setFormData({
      username: "",
      email: "",
      password: "",
      password_confirmation: "",
    });
  }
  const navigate = useNavigate();
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar variant="dense" onClick={() => navigate('/')} >
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} >
          <ShoppingBasketIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" component="div">
         Flata Shop
        </Typography>
      </Toolbar>
    </AppBar>
  </Box>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="userName"
                variant="outlined"
                required
                fullWidth
                id="userName"
                label="Username"
                value={formData.username}
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="email"
                pattern=".+@globex\.com"
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Confirm Password"
                type="password"
                id="confirm_password"
                value={formData.password_confirmation}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    password_confirmation: e.target.value,
                  })
                }
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link variant="body2" href="/signin">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
    </>
  );
}
