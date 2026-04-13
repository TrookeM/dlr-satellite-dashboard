import { StrictMode } from 'react'
import { useState } from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'
import './components/SatelliteCard.js';
import App from './App.jsx'
import '@kor-ui/kor';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
