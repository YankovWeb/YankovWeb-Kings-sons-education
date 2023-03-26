import React from "react";
import {useUserAuth} from "../context/AuthContext";
const Home = () => {
  const {user} = useUserAuth();
  console.log(user?.uid);
  return <div>hello</div>;
};

export default Home;
