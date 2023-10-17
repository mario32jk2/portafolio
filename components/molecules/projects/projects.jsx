import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import styles from "./projecst.module.css";

export const Projecst = () => {
  return (
    <>
      <div className={styles.father}>
        <div className={styles.bacgroundgift}></div>
        <div className={styles.contenedorTitle}>
          <div>
          <h2 className={styles.title}>Proyectos</h2>
          <p className={styles.p}>
            Aquí puedes encontrar algunos de mis proyectos, pruebas o
            experimentos.
          </p>
          </div>
          <div>
          <ArrowOutwardIcon />
        </div>
        </div>
       
      </div>
    </>
  );
};
