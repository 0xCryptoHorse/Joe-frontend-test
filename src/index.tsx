import React from 'react';
import ReactDOM from 'react-dom/client';
import "./assets/style/global.scss";
import App from './App';
import AllProvider from "./providers";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
        <AllProvider>
          <App />
        </AllProvider>

);
