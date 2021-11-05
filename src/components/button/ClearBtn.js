import sprite from "../../img/sprite.svg";
import style from "./ClearBtn.module.css";

const ClearBtn = ({clear}) => {
  return (
    <div className={style.clearBtn}>
      <svg className={style.close}>
        <use href={sprite + "#icon-close"} ></use>
      </svg>
      <p>{clear}</p>
    </div>
  );
};

export default ClearBtn;
