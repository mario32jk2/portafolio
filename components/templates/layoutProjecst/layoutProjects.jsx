import styles from "./layoutProyects.module.css";
import { Inicio } from "../../atoms/inicio/inicio";
import MediaCard from "../../molecules/cards/cards";

export const LayoutProyects = () => {
  return (
    <>
      <div className={styles.containerBOxesProjects}>
        <div className={styles.navLink}>
          <Inicio/>
        </div>
        <div className={styles.hotel}>
          <MediaCard img='/imgs/hotel.png' title='Hotel' description='HTML CSS y JavasCript' color='#654037'
          link='https://github.com/mario32jk2/Hotel' linkWeb='https://mario32jk2.github.io/Hotel/'/>
        </div>
        
        <div className={styles.swip}>
          <MediaCard img='/imgs/swip.png' title='Swip' description='HTML y CSS' color='#12486B' 
          link='https://github.com/mario32jk2/swip' linkWeb='https://mario32jk2.github.io/swip/'/>
        </div>

        <div className={styles.antMan}>
          <MediaCard img='/imgs/antman.png' title='Ant-Man' description='HTML y CSS' color='#343366' link='https://github.com/mario32jk2/target-ant-man-quantumania' linkWeb='https://mario32jk2.github.io/target-ant-man-quantumania/'/>
        </div>
      </div>
    </>
  );
};
