import { StrictMode } from 'React'
import { createRoot } from 'React-dom/client'
import './assets/style/index.css'
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
