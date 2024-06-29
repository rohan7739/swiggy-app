import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider } from 'react-router-dom';
import appRoutes from './constants/PublicRoutes';
// import routes from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <RouterProvider router={appRoutes} /> */}
  </React.StrictMode>
);