import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Card from './Card.jsx'
import Footer from './Footer.jsx'
import Header from './Header.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <App />
    </>
  </StrictMode>,
)