import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './pages/Home.jsx';
import Problems from './pages/Problems.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path: "/",
        element: <Home/>
      },
       {
        path: "/problems",
        element: <Problems/>
      },

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
