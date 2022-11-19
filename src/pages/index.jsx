
import {useLocalStorage} from 'react-use'

import {
    createBrowserRouter,
    RouterProvider,
    Route,
  } from "react-router-dom"
import { Dashboard } from "./Dashboard";
import { Home } from "./Home"
import { Login } from "./Login";
import { Signup } from "./Signup";
import { Profile } from "./Profile";
import { Privacidade } from "./PoliticaPrivacidade";
import { Regras } from "./Regras";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/signup",
      element: <Signup/>,
    },
    {
      path: "/dashboard",
      element: <Dashboard/>,
    },
    {
      path: "/politicaPrivacidade",
      element: <Privacidade/>,
    },
    {
      path: "/regras",
      element: <Regras/>,
    },
    {
      path: "/:username",
      element: <Profile/>,
    },
  ]);

  export const Router = () => (
    <RouterProvider router={router} />
  )