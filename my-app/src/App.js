import React from "react";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";
import Root from "./routes/Root";
import Catalog from "./pages/Catalog";
import {UserAuthContextProvider} from "./context/AuthContext";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/catalog",
        element: <Catalog />,
      },
    ],

    // errorElement: <ErrorPage />,
  },
]);

const App = () => {
  return (
    <UserAuthContextProvider>
      <RouterProvider router={router} />
    </UserAuthContextProvider>
  );
};

export default App;
