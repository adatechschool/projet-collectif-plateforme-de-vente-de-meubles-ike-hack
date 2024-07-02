import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import FetchApi from './components/Fetch.jsx';


const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
      <FetchApi />
    </React.StrictMode>,
  );
} else {
  console.error("Element with id 'root' not found");
}
