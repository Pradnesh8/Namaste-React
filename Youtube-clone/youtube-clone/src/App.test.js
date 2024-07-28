import { render, screen } from '@testing-library/react';
import App from './App';
import AppContext from './utils/AppContext';
import { Provider } from 'react-redux';
import Store from './utils/Store';
import { StaticRouter } from 'react-router-dom/server';

test('renders App component', () => {
  const theme = 'light'
  render(
    <StaticRouter>
      <AppContext.Provider value={{ theme: theme, setTheme: () => { } }}>
        <Provider store={Store}>
          <App />
        </Provider>
      </AppContext.Provider>
    </StaticRouter>
  );
  expect(document.title).toBe('');
});
