import React from "react";
import styles from "../styles/Navar.module.css";
import { FaThList } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useIsMobile from "../hooks/useIsMobile";

export default function Navar() {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  console.log("isMobile =", isMobile);

  return (
    <div className={styles.leftMenu}>
      <div onClick={() => navigate("/")}>
        <FaThList className={styles.icon} />
        {!isMobile ? "리스트" : null}
      </div>
      <div onClick={() => navigate("/add")}>
        <FaPlus className={styles.icon} />
        {!isMobile ? "등록" : null}
      </div>
    </div>
  );
}
