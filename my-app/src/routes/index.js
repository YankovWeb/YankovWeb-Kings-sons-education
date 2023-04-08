import {
  ErrorPage,
  Home,
  LoginPage,
  Register,
  Catalog,
  Create,
  CourseDetailsView,
  Edit,
  Profile,
  MyLikes,
} from "../pages";
import Root from "./Root";

export const routerArray = [
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
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/My-likes",
        element: <MyLikes />,
      },
    ],
  },
];
