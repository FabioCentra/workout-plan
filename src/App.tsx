import React from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "./components/Home";

function App() {

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


  return (
      <RouterProvider router={router} />
  );
}

export default App;
