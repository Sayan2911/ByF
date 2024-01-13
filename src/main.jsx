import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,createRoutesFromElements,Route} from 'react-router-dom'
import {RouterProvider} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Portal from './components/Portal.jsx'
import Layout from './Layout.jsx'
import BuyPortalContainer from './components/BuyPortalContainer.jsx'
import { store } from './redux/store.js'
import { Provider } from 'react-redux'

const router=createBrowserRouter(createRoutesFromElements(
  
  <Route path='/' element={<Layout/>}>
    
    <Route path='' element={<Home/>}/>
    <Route path='/Portal' element={<BuyPortalContainer/>}/>

  </Route>

))

ReactDOM.createRoot(document.getElementById('root')).render(
<Provider store={store}>
  <React.StrictMode>
    <RouterProvider router={router}/> 
  </React.StrictMode>
  </Provider>,
)
