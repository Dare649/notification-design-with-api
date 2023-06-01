import React from 'react'
import ReactDOM from 'react-dom/client'
import Apps from './Apps.jsx'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:5175/'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Apps />
  </React.StrictMode>,
)
