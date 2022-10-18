import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import './index.css';

import reportWebVitals from './reportWebVitals';
import Home from "./components/Home";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement:<div>Sorry, an unexpected error has occurred</div>
  },
  {
    path: "*",
    element: <div>Pagina non trovata</div>
  }
]);



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
