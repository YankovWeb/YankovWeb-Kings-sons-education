import React from "react";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";
import Root from "./routes/Root";
import Catalog from "./pages/Catalog";
import MyCatalog from "./pages/MyCatalog";
import Create from "./pages/Create";
import Profile from "./components/Profile/Profile";
import {UserAuthContextProvider} from "./context/AuthContext";
import {FirestoreContextUsersProvider} from "./context/UserContext";
import Home from "./pages/Home";
import CourseDetail from "./Atoms/Details";

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
        path: "/my-catalog",
        element: <MyCatalog />,
      },
      {
        path: "/create-class",
        element: <Create />,
      },
      {
        path: "/view",
        element: <CourseDetail />,
      },
      {path: "/profile", element: <Profile />},
    ],

    // errorElement: <ErrorPage />,
  },
]);

const App = () => {
  return (
    <UserAuthContextProvider>
      <FirestoreContextUsersProvider>
        <RouterProvider router={router} />
      </FirestoreContextUsersProvider>
    </UserAuthContextProvider>
  );
};

export default App;
