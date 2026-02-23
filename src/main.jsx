import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./assets/css/index.css"
import App from './App.jsx'
// APP - React Component
// createRoot - API do React para renderizar o conteúdo
// SPA - Single Page Application - Conteúdo é carregado dinamicamente sem a necessidade de recarregar a página

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
