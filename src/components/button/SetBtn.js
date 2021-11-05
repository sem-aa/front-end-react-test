import sprite from "../../img/sprite.svg";
import style from "./SetBtn.module.css";

const SetBtn = ({nameFilter}) => {
  return (
    <div className={style.setBtn}>
      <p>{nameFilter} </p>
      <svg className={style.down}>
        <use href={sprite + "#icon-down"}></use>
      </svg>
    </div>
  );
};

export default SetBtn;