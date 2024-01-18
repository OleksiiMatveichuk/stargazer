import { useState } from "react";
import style from "./GameScreen.module.css";
// import { random50 } from "../utlits/random50";

export const GameScreen = () => {
  const [control, setControl] = useState(false);

  const random50 = () => Math.random() < 0.5;
  console.log("random50", random50());

  const handleClickLeft = () => {
    if (!control) {
      setControl(true);
      console.log("control", control);
    }
    console.log("(Math.random() < 0.5)", Math.random() < 0.5);
  };

  const handleClickRight = () => {
    if (control) {
      setControl(false);
      console.log("control", control);
    }
  };

  return (
    <div className={style.game}>
      <div className={control ? style.playerLeft : style.playerRight}></div>
      <div className={random50() ? style.star : style.starLeft}></div>
      <div className={style.blockControlLeft} onClick={handleClickLeft}></div>
      <div className={style.blockControlRight} onClick={handleClickRight}></div>
    </div>
  );
};
