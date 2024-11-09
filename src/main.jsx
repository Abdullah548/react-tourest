import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
  integrity="sha384-k6RqeWeci5ZR/Lv4MR0sA0FfDOMTn6p+3d5tfElxrD3jyzt8m2Q3cgV7G5Rr47TO"
  crossorigin="anonymous"
/>


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
