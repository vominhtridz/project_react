import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom"
import './index.css';
import App from './App';
import { CartProvider } from './context/cart';
import store from './store/store'
import { Provider } from 'react-redux'
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
      <Provider store={store}>
        <App />
      </Provider>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
