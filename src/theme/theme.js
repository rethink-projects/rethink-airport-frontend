import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#086788' }, // azul sofisticado
    secondary: { main: '#F6AE2D' }, // acento dourado
    background: { default: '#F0F4F8', paper: '#ffffff' },
    text: { primary: '#0D1B2A', secondary: '#1B263B' },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h4: { fontWeight: 700, letterSpacing: '0.2rem' },
    h5: { fontWeight: 600 },
    button: { textTransform: 'none' },
  },
  components: {
    MuiAppBar: { styleOverrides: { root: { backgroundColor: '#ffffff', boxShadow: 'none' } } },
    MuiCard: { styleOverrides: { root: { borderRadius: 16, boxShadow: '0 4px 20px rgba(0,0,0,0.1)' } } },
  },
});

export default theme;