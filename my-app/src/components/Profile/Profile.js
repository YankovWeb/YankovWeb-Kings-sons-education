import React from "react";

import {useUserAuth} from "../../context/AuthContext";
const Profile = () => {
  const {user} = useUserAuth();

  return (
    <>
      <div>Profile</div>
      <h1> {user?.user?.uid} </h1>
      <h1> {user?.user?.email} </h1>
      <h1> {user?.user?.metadata?.lastSignInTime} </h1>
      <h1> {user?.user?.metadata?.creationTime} </h1>
      <h1> {user?.user?.displayName} </h1>
    </>
  );
};

export default Profile;
