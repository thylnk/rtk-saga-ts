import {
  Box,
  Button,
  CircularProgress,
  Paper,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import React from 'react';
import { Navigate } from 'react-router-dom';
import { authActions, selectIsLoggedIn, selectIsLogging } from '../authSlice';

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
  const dispatch = useAppDispatch();
  const logging = useAppSelector(selectIsLogging);
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  const handleLogin = () => {
    dispatch(
      authActions.login({
        username: '',
        password: '',
      })
    );
  };

  if (isLoggedIn) {
    return <Navigate to={{ pathname: '/admin' }} />;
  }

  return (
    <div className={classes.root}>
      <Paper elevation={1} className={classes.box}>
        <Typography variant="h5" component="h1">
          Student Management
        </Typography>
        <Box mt={4}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleLogin}
          >
            {logging && (
              <CircularProgress
                size={20}
                color="secondary"
                style={{ marginRight: 10 }}
              />
            )}
            Fake login
          </Button>
        </Box>
      </Paper>
    </div>
  );
}
