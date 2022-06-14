import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import StoreFetched from './StoreFetched';

const root = ReactDOM.createRoot(document.getElementById('root'));
StoreFetched();

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
