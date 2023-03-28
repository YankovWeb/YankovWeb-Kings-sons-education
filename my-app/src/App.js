import React from "react";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";
import Root from "./routes/Root";
import Catalog from "./pages/Catalog";
import MyCatalog from "./pages/MyCatalog";
import Create from "./pages/Create";
import {UserAuthContextProvider} from "./context/AuthContext";
import {FirestoreContextUsersProvider} from "./context/UserContext";
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
      {
        path: "/my catalog",
        element: <MyCatalog />,
      },
      {
        path: "/create class",
        element: <Create />,
      },
    ],

    // errorElement: <ErrorPage />,
  },
]);

const App = () => {
  return (
    <UserAuthContextProvider>
      <FirestoreContextUsersProvider>
        <RouterProvider router={router} />{" "}
      </FirestoreContextUsersProvider>
    </UserAuthContextProvider>
  );
};

export default App;
