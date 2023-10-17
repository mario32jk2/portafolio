import Link from "next/link";
import { Cv } from "../../atoms/cv/cv";
import { Email } from "../../atoms/email/emal";
import { Github } from "../../atoms/github/github";
import { HolaMundo } from "../../atoms/holamundo/holaMundo";
import { ImgLinkedin } from "../../atoms/imgLinkedin/imgLinkedin";
import { Skills } from "../../atoms/skills/skills";
import { Spotify } from "../../atoms/spotify/spotify";
import { AgeInfo } from "../../atoms/titleAge/ageInfo";
import { AboutMe } from "../../molecules/aboutMe/aboutMe";
import { Box } from "../../molecules/box/box";
import { Projecst } from "../../molecules/projects/projects";
import { Counter } from "../../organisms/counter/counter";
import { Hour } from "../../organisms/hour/hour";
import CustomizedSwitches from "../../organisms/themes/theme";

import styles from "./targetLayout.module.css";

export const TargetLayout = () => {
  return (
    <>
      <div class={styles.container}>
        <div class={styles.aboutme}>
          <AboutMe />
        </div>
        <div class={styles.mundo}>
          <Box color={"#5D12D2"}>
            <HolaMundo />
          </Box>
        </div>
        <div class={styles.boxAge}>
          <Box color={"#c9393b"}>
            <AgeInfo />
          </Box>
        </div>
        <div class={styles.linkedin}>
          <a
            href="https://www.linkedin.com/in/mario-alejandro-castaño-vizcaino-871b47269/"
            target="_blank"
          >
            <Box color={"white"}>
              <ImgLinkedin />
            </Box>
          </a>
        </div>
        <div class={styles.email}>
          <a href={'mailto:mariovizcaino21@gmail.com'}  target="_blank">
          <Box color={"#654037"}>
            <Email />
          </Box>
          </a>
        </div>
        <div class={styles.Projects}>
          <Link href={'/projects'}>
          <Box color={"#343366"}>
            <Projecst />
          </Box>
          </Link>
        </div>
        <div class={styles.skills}>
          <Skills />
        </div>
        <div class={styles.github}>
          <a href="https://github.com/mario32jk2" target="_blank">
            <Box color={"black"}>
              <Github />
            </Box>
          </a>
        </div>
        <Link href="curriculum/CV Mario Castaño.pdf" download='CV Mario Castaño.pdf' target="_blank" style={{textDecoration:'none'}}>
        <div class={styles.cv}>
          <Box color={"#12486B"}>
            <Cv />
          </Box>
        </div>
        </Link>
        <div class={styles.hour}>
          <Box color={"#343366"}>
            <Hour />
          </Box>
        </div>
        <div class={styles.spotify}>
          <Spotify />
        </div>
        <div class={styles.contador}>
          <Box color={"#2b8480"}>
            <Counter />
          </Box>
        </div>
        <div class={styles.darck}>
          <Box color={"#343366"}>
            <CustomizedSwitches />
          </Box>
        </div>
      </div>
    </>
  );
};
