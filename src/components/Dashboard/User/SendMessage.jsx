import React from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { createContext, useState, useContext, useEffect } from "react";
import { auth, db } from "../../../firebase";
import { UserAuth } from "../../auth/AuthContext";

const SendMessage = () => {
  const { currentUser } = UserAuth();
  // const [currentUser, setCurrentUser] = useState(null);
  const [value, setValue] = useState("");

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     setCurrentUser(user);
  //   });

  //   return unsubscribe;
  // }, []);

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (value.trim() === "") {
      alert("enter valid Message");
      return;
    }
    try {
      const { uid, displayName, photoURL } = currentUser;
      await addDoc(collection(db, "messages"), {
        text: value,
        name: displayName,
        avatar: photoURL,
        createdAt: serverTimestamp(),
        uid,
      });
    } catch (error) {}
    setValue("");
  };

  return (
    <>
      <div className="rounded-full py-2 my-2 bg-neutral">
        <form className="containerWrap flex px-2" onSubmit={handleSendMessage}>
          <input
            className="input w-full focus:outline-none bg-gray-100 rounded-r-none"
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="w-auto bg-neutral text-white rounded-r-lg px-3 text-sm">
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default SendMessage;
