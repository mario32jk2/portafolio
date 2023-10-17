import { InfoAboutMe } from "../../atoms/titlePAboutMe/infoAboutMe";
import styles from "./aboutMe.module.css";

export const AboutMe = () => {
  return (
    <article className={styles.aboutme}>
        <InfoAboutMe/>
    </article>
  );
};
