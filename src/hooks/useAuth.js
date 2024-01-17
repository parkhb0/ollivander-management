import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function useAuth() {
  const { active, loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (active) {
      navigate("/farm");
    } else {
      navigate("/login");
    }
  }, [active]);
}
