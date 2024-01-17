import React, { useEffect } from "react";
import Navar from "../../components/Navar";
import styles from "../../styles/Layout.module.css";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import theme from "../../lib/styles/theme";

export default function ProtectedRoutes() {
  const { user, active, loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!active) {
      navigate("/");
    }
  });

  return (
    <>
      {active ? (
        <div className={styles.container}>
          <div className={styles.leftSectionWrapper}>
            <section className={styles.leftSection}>
              <div className={styles.leftSectionFixed}>
                <Navar />
              </div>
            </section>
          </div>
          <div className={styles.rightSectionWrapper}>
            <div className={styles.rightSectionInner}>
              <Outlet />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
