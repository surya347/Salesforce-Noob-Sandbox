import { createTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';


// Create a theme instance.
const theme = createTheme({ 
  palette: {
    primary: {
      main:  '#16325c',
    },
    secondary: {
      main:  '#11cb5f',
    },
    error: {
      main: red.A400,
    },
  
  },
});

export default theme;