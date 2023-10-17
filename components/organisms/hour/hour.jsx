'use client'
import { useState, useEffect  } from "react"
import styles from './hour.module.css'

export const Hour = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(interval);
  }, []);

 function amPm (hour){
    if (hour <= 12) {
        return 'a.m'
    }else{
        return 'p.m'
    }
 }

  return (
    <div className={styles.hourContainer}>
      <h2 className={styles.titleTime}>Reloj:</h2>
      <p className={styles.hourP}>
        {time.toLocaleTimeString()}
      </p>
      <p>{amPm(time.getHours())}</p>
    </div>
  );
};
