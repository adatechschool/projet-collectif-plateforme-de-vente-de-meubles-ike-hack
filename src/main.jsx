import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

const homeElement = document.getElementById('home');

if (homeElement) {
  ReactDOM.createRoot(homeElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
} else {
  console.error("Element with id 'home' not found");
}
