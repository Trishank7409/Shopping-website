import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from 'react-redux'
import { store } from './redux/Store.jsx'
import { BrowserRouter } from 'react-router-dom'
// import { ToastContainer } from 'react-toastify'
import {Toaster} from 'react-hot-toast'
ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
  {/* <ToastContainer> */}
  <Provider store ={store}>
<App />
<Toaster />
  </Provider>
  {/* </ToastContainer> */}
  
</BrowserRouter>
)
