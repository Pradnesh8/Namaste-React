import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Store from './utils/Store';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Body from './components/Body';
import SearchResult from './components/SearchResult';
import ErrorPage from './components/ErrorPage';
import WatchPage from './components/WatchPage';
import WatchLivePage from './components/WatchLivePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/results",
        element: <SearchResult />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/watchlive",
        element: <WatchLivePage />,
        errorElement: <ErrorPage />,
      }
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
