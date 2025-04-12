import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { CartProvider } from './context/CartContext'; // ⬅️ Add this

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider> {/* ⬅️ Wrap your App */}
        <App />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
