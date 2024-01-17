import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { fetchUserLogin, login, logout } from "../reducers/user";

export default function Login() {
  //   const { user, active, loading, error } = useSelector((state) => state.user);
  //   const [isActive, setAcive] = useState(active);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const dispatch = useDispatch();
  const isAuth = useAuth();
  //   const navigate = useNavigate();

  //   const handelSubmit = async (e) => {
  //     e.preventDefault();
  //     console.log(userEmail);
  //     console.log(userPassword);
  //     dispatch(login());
  //     console.log("active =", active);
  //     if (active) {
  //       navigate("/farm");
  //     }
  //   };

  //   useEffect(() => {
  //     if (active) {
  //       navigate("/farm");
  //     }
  //   }, [active]);

  const handelSubmit = useCallback((e) => {
    e.preventDefault();
    console.log(userEmail);
    console.log(userPassword);
    return dispatch(login());
  }, []);

  return (
    <div>
      <form onSubmit={handelSubmit}>
        <input type="text" onChange={(e) => setUserEmail(e.target.value)} />
        <input type="text" onChange={(e) => setUserPassword(e.target.value)} />
        <button>Login</button>
      </form>
    </div>
  );
}
