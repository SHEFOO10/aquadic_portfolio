import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ClickSpark from './components/reactAnimations/SpotlightCard/ClickSpark';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClickSpark sparkColor='#000' sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
      <App />
    </ClickSpark>
  </StrictMode>,
)
