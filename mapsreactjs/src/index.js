import ReactDOM from 'react-dom/client';
import App from './App'; // Assuming your main app component is in a file named App.js
import React from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
