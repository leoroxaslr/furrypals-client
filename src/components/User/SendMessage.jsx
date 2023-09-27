import React from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useState, useContext, useEffect } from "react";
import { auth, db } from "../../firebase";
import { AuthProvider } from "../auth/AuthContext";

const SendMessage = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [value, setValue] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

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
        name: currentUser.email,
        avatar:
          "https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-user-web-flaticons-flat-flat-icons-3.png",
        createdAt: serverTimestamp(),
        uid,
      });
    } catch (error) {
      console.log(error);
    }
    setValue("");
  };

  return (
    <>
      <div className="fixed bottom-0 w-full py-10 shadow-lg bg-gray-200">
        <form className="containerWrap flex px-2" onSubmit={handleSendMessage}>
          <input
            className="input w-full focus:outline-none bg-gray-100 rounded-r-none"
            type="text"
            value={value}
            avatar="https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-user-web-flaticons-flat-flat-icons-3.png"
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="w-auto bg-gray-500 text-white rounded-r-lg px-5 text-sm">
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default SendMessage;
