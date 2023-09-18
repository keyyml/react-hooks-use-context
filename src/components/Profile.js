import React, { useContext } from "react";
import { UserContext } from "../context/User";
import Interests from "./Interests";

function Profile() {

  const { user } = useContext(UserContext)
  // NOW WITH THE USERCONTEXT HOOK WE ACCESS THE VALUE STORED IN OUR CONTEXT PROVIDER IN THE CHILD Component. CONST USER ALLOWS IT TO BE USED LIKE A PROP

  if (!user) return <h2>Please Login To View Profile</h2>;
  return (
    <div>
      <h2>{user.name}'s Profile</h2>
      <Interests interests={user.interests} />
    </div>
  );
}

export default Profile;
