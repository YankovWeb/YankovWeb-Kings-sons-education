import React from "react";
import {Outlet} from "react-router-dom";
import ResponsiveAppBar from "../components/Navigation/ResponsiveAppBar";

const Root = () => (
  <>
    <ResponsiveAppBar />
    <Outlet />
  </>
);
export default Root;
