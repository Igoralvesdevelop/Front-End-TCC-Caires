import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HistoricoProvider } from "./context/HistoricoContext";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HistoricoProvider>
      <App />
    </HistoricoProvider>
  </StrictMode>,
)
