import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useAuth from "./hooks/useAuth";
import { fetchUserLogin, login, logout } from "./reducers/user";
// if (process.env.NODE_ENV === "development") {
//   console.log("1");
//   worker.start();
// }

export default function App() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuth = useAuth();

  const handelSubmit = async (e) => {
    e.preventDefault();
    console.log(userEmail);
    console.log(userPassword);
    dispatch(login());
  };

  return (
    <>
      <form onSubmit={handelSubmit}>
        <input type="text" onChange={(e) => setUserEmail(e.target.value)} />
        <input type="text" onChange={(e) => setUserPassword(e.target.value)} />
        <button>Login</button>
      </form>
    </>
  );
}
