import logo from './logo.svg';
import './App.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import {darkTheme} from './theme/DarkTheme';
import HomePage from './customer/pages/HomePage/HomePage';


function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <div>
        <HomePage/>
      </div>
    </ThemeProvider>
  );
}

export default App;