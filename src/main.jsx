import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './redux/Store.js'
import { ToastContainer, toast } from 'react-toastify';
// import './index.css'


createRoot(document.getElementById('root')).render(
  <Provider store={store}>

      <App />
      <ToastContainer />

  </Provider>
  
)
