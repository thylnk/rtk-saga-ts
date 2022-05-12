import * as React from 'react';
import { Box } from '@mui/material';
import { Theme } from '@mui/material/styles/experimental_extendTheme';
import { makeStyles } from '@mui/styles';
import { Header, Sidebar } from 'components/Common';
import { Outlet, Route } from 'react-router-dom';
import Dashboard from 'features/dashboard';

const useStyles = makeStyles<Theme>((theme) => ({
  root: {
    display: 'grid',
    gridTemplateRows: 'auto 1fr',
    gridTemplateColumns: '300px 1fr',
    gridTemplateAreas: '"header header" "sidebar main" ',
    minHeight: '100vh',
  },
  header: {
    gridArea: 'header',
  },
  sidebar: {
    gridArea: 'sidebar',
    borderRight: `1px solid ${theme.palette.divider}`,
    bgcolor: 'background.paper',
  },
  main: {
    gridArea: 'main',
    bgcolor: 'background.paper',
    padding: theme.spacing(2, 3),
  },
}));

function AdminLayout() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.header}>
        <Header />
      </Box>
      <Box className={classes.sidebar}>
        <Sidebar />
      </Box>
      <Box className={classes.main}>
        <Outlet />
      </Box>
    </Box>
  );
}

export default AdminLayout;
