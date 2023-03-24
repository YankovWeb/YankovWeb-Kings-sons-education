import React from "react";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Login from "./components/Login";
import Rgiegister from "./components/Register";
// import Home from "./components/Home";
// import Img from "./pages/Img";
// import Root from "./pages/Root";
// import Chat from "./pages/Chat";
// import ErrorPage from "./pages/ErrorPage";

import Root from "./routes/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {path: "/login", element: <Login />},
      {path: "/register", element: <Rgiegister />},
    ],

    // errorElement: <ErrorPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
