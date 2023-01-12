import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/Style/main/index.css'
import { Provider } from 'react-redux'
import { storeExample } from './assets/Redux/storeIndex'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={storeExample}>
      <App />
    </Provider>
  </React.StrictMode>,
)
