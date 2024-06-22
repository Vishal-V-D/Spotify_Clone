import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import PlayerContextProvider from './context/PlayerContextProvider'; // Correct import

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PlayerContextProvider> {/* Correct name */}
        <App />
      </PlayerContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
