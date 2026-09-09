import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'
import LanguageProvider from './i18n/LanguageProvider.jsx'
import { LightboxProvider } from './components/ui/Lightbox.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <LanguageProvider>
        <BrowserRouter future={{ v7_startTransition: true }}>
          <LightboxProvider>
            <App />
          </LightboxProvider>
        </BrowserRouter>
      </LanguageProvider>
    </HelmetProvider>
  </React.StrictMode >,
)
