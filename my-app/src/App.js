import React from "react";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";
import Root from "./routes/Root";
import Catalog from "./pages/Catalog";
import Create from "./pages/Create";
import Profile from "./components/Profile/Profile";
import {UserAuthContextProvider} from "./context/AuthContext";
import Home from "./pages/Home";
import CourseDetailsView from "./components/CourseDetailsView/CourseDetailsView";
import Edit from "./components/Edit/Edit";
import MyLikes from "./pages/MyLikes";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <Home />},
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
        path: "/create-class",
        element: <Create />,
      },
      {
        path: "/catalog/view/:id",
        element: <CourseDetailsView />,
      },
      {
        path: "/catalog/edit/:id",
        element: <Edit />,
      },
      {path: "/profile", element: <Profile />},
      {path: "/My-likes", element: <MyLikes />},
    ],
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
