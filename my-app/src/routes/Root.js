import React from "react";
import {Outlet} from "react-router-dom";
import MainNav from "../components/MainNav";
const Root = () => {
  //   const navigiation = useNavigation();

  return (
    <div style={{display: "contents"}}>
      <MainNav />

      <Outlet />
    </div>
  );
};

export default Root;
