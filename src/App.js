import React from 'react';
import './App.css';
import { ThemeProvider } from '@material-ui/styles';
import { createBrowserHistory } from 'history';
import theme from './theme';
import Routes from './Routes';
import { Router } from 'react-router-dom';

const browserHistory = createBrowserHistory();

function App() {
  return (

    <ThemeProvider theme={theme}>
      <Router history={browserHistory}>
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
