import React, { Component } from 'react';
import NavBar from './components/navbar/NavBar';
import Search from './components/search/Search';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fb8c00',
    },
    secondary: {
      main: '#536dfe',
    },
    tertiary: {
      main: '#ffffff'
    }
  },
  typography: { useNextVariants: true },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <NavBar />
          <Search />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
