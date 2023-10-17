import Image from "next/image";
import styles from "./github.module.css";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export const Github = () => {
  return (
    <div className={styles.containerFather}>
      <div className={styles.backgroundGitHub}></div>
      <div className={styles.containerImg}>
        <div>
          <Image src={"/imgs/github-mark.svg"} width={50} height={50} />
        </div>

        <div>
          <ArrowOutwardIcon color="black" fontSize="medium" />
        </div>
      </div>
    </div>
  );
};
