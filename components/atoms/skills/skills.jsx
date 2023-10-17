import Image from "next/image";
import styles from "./skills.module.css";
import { Box } from "../../molecules/box/box";

export const Skills = () => {
  return (
    <>
    <Box color={'#393E46'}>
      <div className={styles.container}>
        
          <div className={styles.html}>
            <Image
              src={"/programminglanguage/html.webp"}
              alt="html logo"
              width={95}
              height={95}
              className={styles.image}
              
            />
          </div>

          <div className={styles.css}>
            <Image
              src={"/programminglanguage/css.png"}
              alt="css log"
              width={100}
              height={100}
              className={styles.image}
              
            />
          </div>

          <div className={styles.js}>
            <Image
              src={"/programminglanguage/js.png"}
              alt="JavaScript logo"
              width={100}
              height={100}
              className={styles.image}
              
            />
          </div>

          <div className={styles.node}>
            <Image
              src={"/programminglanguage/node.webp"}
              alt="NodeJS logo"
              width={100}
              height={100}
              className={styles.image}
              
            />
          </div>

          <div className={styles.react}>
            <Image
              src={"/programminglanguage/react.webp"}
              alt="React logo"
              width={100}
              height={100}
              className={styles.image}
              
            />
          </div>

          <div className={styles.next}>
            <Image
              src={"/programminglanguage/next.png"}
              alt="imagen de nex logo"
              width={100}
              height={100}
              className={styles.image}
              
            />
          </div>

          <div className={styles.git}>
            <Image
              src={"/programminglanguage/git.webp"}
              alt="git logo"
              width={100}
              height={100}
              className={styles.image}
              
            />
          </div>

          <div className={styles.github}>
            <Image
              src={"/programminglanguage/github.png"}
              alt="git hub logo"
              width={100}
              height={100}
              className={styles.image}
              
            />
          </div>
        
      </div>
      </Box>
    </>
  );
};
