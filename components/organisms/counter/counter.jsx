"use client";
import { useState } from "react";
import styles from "./counter.module.css";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  function plus() {
    return setCounter(counter + 1);
  }


  return (
    <>
      <div className={styles.title}>
        
        <h1 className={styles.titleH1}>Contador</h1>

        <div className={styles.nuber}>
          <h2>{counter}</h2>
        </div>
        <div className={styles.buttons}>
          <button onClick={plus} className={styles.buttonSumar}>Sumar</button>
        </div>
      </div>
    </>
  );
};
