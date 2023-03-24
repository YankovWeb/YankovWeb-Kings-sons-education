import React from "react";
import {Outlet} from "react-router-dom";
import MainNav from "../components/MainNav";
const Root = () => {
  //   const navigiation = useNavigation();

  return (
    <>
      <MainNav />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Root;
