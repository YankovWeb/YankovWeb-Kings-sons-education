import {RouterProvider, createBrowserRouter} from "react-router-dom";
import {UserAuthContextProvider} from "./context/AuthContext";
import {routerArray} from "./routes";

const router = createBrowserRouter(routerArray);

const App = () => (
  <UserAuthContextProvider>
    <RouterProvider router={router} />
  </UserAuthContextProvider>
);

export default App;
