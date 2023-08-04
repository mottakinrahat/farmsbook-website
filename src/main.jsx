import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main.jsx';
import Home from './component/Home/Home/Home.jsx';
import BuyerBanner from './pages/BuyersConnect/BuyerBanner/BuyerBanner.jsx';
import BuyersContact from './component/Home/BuyersContact/BuyersContact.jsx';
import BuyersConnect from './pages/BuyersConnect/BuyersConnect/BuyersConnect.jsx';
import HarvestManagement from './pages/HarvestMannagement/HarvestMannagement/HarvestManagement.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'buyersConnect',
        element:<BuyersConnect></BuyersConnect>
      },
      {
        path:'harvestManagement',
        element:<HarvestManagement/>

      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
