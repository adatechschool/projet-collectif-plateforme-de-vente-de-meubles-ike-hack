import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './Header.jsx';
import App from './App.jsx';
import Footer from './Footer.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Tuto React Router</div>
  },
]);

const rootElement = document.getElementById("root");
const headerElement = document.getElementById('header');
const homeElement = document.getElementById('home');
const footerElement = document.getElementById('footer');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
} else {
  console.error("Element with id 'root' not found");
}

if (headerElement) {
  ReactDOM.createRoot(headerElement).render(
    <React.StrictMode>
      <Header />
    </React.StrictMode>,
  );
} else {
  console.error("Element with id 'header' not found");
}

if (homeElement) {
  ReactDOM.createRoot(homeElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
} else {
  console.error("Element with id 'home' not found");
}

if (footerElement) {
  ReactDOM.createRoot(footerElement).render(
    <React.StrictMode>
      <Footer />
    </React.StrictMode>,
  );
} else {
  console.error("Element with id 'footer' not found");
}
