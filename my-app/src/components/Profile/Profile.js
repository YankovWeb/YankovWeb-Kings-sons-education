import React from "react";
import {useFireStoreUser} from "../../context/UserContext";
const Profile = () => {
  const {getUserData} = useFireStoreUser();
  const currentUser = getUserData();

  return (
    <>
      <div>Profile</div>
      <h1> {currentUser?.id} </h1>
      <h1> {currentUser?.email} </h1>
      <h1> {currentUser?.lastSignIn} </h1>
      <h1> {currentUser?.creatAt} </h1>
    </>
  );
};

export default Profile;
