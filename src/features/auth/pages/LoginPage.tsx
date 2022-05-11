import { Box, Button, Paper, ThemeProvider, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { Component } from 'react';

type Props = {};

type State = {};

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },

  box: {
    padding: '24px',
  },
});

export default function LoginPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={1} className={classes.box}>
        <Typography variant="h5" component="h1">
          Student Management
        </Typography>
        <Box mt={4}>
          <Button fullWidth variant="contained" color="primary">
            Fake login
          </Button>
        </Box>
      </Paper>
    </div>
  );
}
