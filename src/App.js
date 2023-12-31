import React from "react";
import Navar from "./components/Navar";
import styles from "./styles/Layout.module.css";
import { Outlet } from "react-router-dom";
import { worker } from "./mocks/worker";
// if (process.env.NODE_ENV === "development") {
//   console.log("1");
//   worker.start();
// }

export default function App() {
  return (
    <>
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
    </>
  );
}
