import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './Header.jsx'
import App from './App.jsx'
import Footer from './Footer.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Tuto React Router</div>
  }
])

ReactDOM.createRoot(document.getElementById('header')).render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('home')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('footer')).render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>,
)
