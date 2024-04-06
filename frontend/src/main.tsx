import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {CssBaseline, ThemeProvider} from '@mui/material';
import theme from './theme.ts';
import {Provider} from 'react-redux';
import {store} from './app/store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>,
  </Provider>
)
