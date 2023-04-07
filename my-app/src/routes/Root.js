import React from "react";
import {Outlet} from "react-router-dom";
import ResponsiveAppBar from "../components/Navigation/ResponsiveAppBar";
const Root = () => {
  //   const navigiation = useNavigation();

  return (
    <>
      <ResponsiveAppBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Root;
