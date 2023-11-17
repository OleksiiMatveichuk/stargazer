import style from "./GameScreen.module.css";

export const GameScreen = () => {
  return (
    <div className={style.game}>
      <div className={style.player}></div>
      <div className={style.star}></div>
    </div>
  );
};
