import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import ChatRoom from "./ChatRoom";
import Navibar from "../pages/Navibar";

const userSignOut = () => {
  signOut(auth)
    .then(() => {
      console.log("sign out successful");
    })
    .catch((error) => console.log(error));
};

const Userdash = () => {
  return (
    <>
      <Navibar />
      <ChatRoom />
    </>
  );
};

export default Userdash;
