import React from 'react';
import { GlobalStateProvider } from './Components/State/GlobalState';

import ReactDOM from 'react-dom/client';
import './constant/importedCss'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

