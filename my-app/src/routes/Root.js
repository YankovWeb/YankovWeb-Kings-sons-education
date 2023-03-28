import React from "react";
import {Outlet} from "react-router-dom";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
const Root = () => {
  //   const navigiation = useNavigation();

  return (
    <>
      <ResponsiveAppBar />

      <Outlet />
    </>
  );
};

export default Root;
