import React from "react";

import {useUserAuth} from "../../context/AuthContext";
const Profile = () => {
  const {user} = useUserAuth();
  console.log(user?.uid);
  return (
    <>
      <div>Profile</div>
      <h1> {user?.uid} </h1>
      <h1> {user?.email} </h1>
      <h1> {user?.metadata?.lastSignInTime} </h1>
      <h1> {user?.metadata?.creationTime} </h1>
      <h1> {user?.displayName} </h1>
    </>
  );
};

export default Profile;
