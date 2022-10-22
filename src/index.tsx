import React, {FC, useState} from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import './index.css';

import reportWebVitals from './reportWebVitals';
import Home from "./components/Home";
import {ThemeProvider} from "@mui/material";
import globaltheme from "./theme/globaltheme";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement:<div>Sorry, an unexpected error has occurred</div>
  },
  {
    path: "*",
    element: <Home/>,
  }
]);



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


const ThemeManager:FC<{children: JSX.Element}> = ({children}) => {

  /**
   * Utilizzo questa funzione per poter consentire lo switch del tema in futuro
   */

  const [theme] = useState(globaltheme);
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;

}


root.render(
  <React.StrictMode>
    <ThemeManager>
      <RouterProvider router={router}  />
    </ThemeManager>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
