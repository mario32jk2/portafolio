import styles from './holaMundo.module.css'

export const HolaMundo = () => {
  return (
    <>
      <div className={styles.containerInfo}>
      <h1 className={styles.title}>Hola mundo </h1>
        
        <p className={styles.infoP}>
          Mario Castaño <strong>desarrollador frontend junior</strong> creador de experiencias
          web atractivas. Mi objetivo es diseñar interfaces de usuario
          envolventes con <strong>HTML</strong>, <strong>CSS </strong> y
          <strong> JavaScript</strong>.
        </p>
      </div>
    </>
  );
};
