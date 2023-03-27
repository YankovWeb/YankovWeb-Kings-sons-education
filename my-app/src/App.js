import React from "react";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Rgiegister from "./components/Register";
import Root from "./routes/Root";
import ProtectedRoute from "./routes/ProtectedRoute";
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
        element: <Rgiegister />,
      },
      {
        path: "/catalog",
        element: <Home />,
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
