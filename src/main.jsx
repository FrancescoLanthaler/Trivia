import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Root from './root.jsx'
import About from './about.jsx'
import Contact from './contact.jsx'
import Error from "./error-page";
import './index.css'
import {
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: (
      <Error />
    ),
    children: [
      { index: true, element: <App /> },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

