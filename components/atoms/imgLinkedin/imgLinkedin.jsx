
import styes from "./imgLinkedin.module.css";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export const ImgLinkedin = () => {
  return (
    <>
    <div className={styes.container}>
      <div className={styes.imgLinkedin}></div>
    <div className={styes.arrow}><ArrowOutwardIcon color="black" fontSize="medium"/></div>
      </div>
    </>
  );
};
