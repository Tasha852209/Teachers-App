import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from 'components/App';
import { AuthProvider } from 'providers';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter basename="/Teachers-App">
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
