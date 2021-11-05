import sprite from "../../img/sprite.svg";
import style from "./Filter.module.css";

const Filter = ({nameFilter}) => {
  return (
    <div className={style.filter}>
      <p>{nameFilter} </p>
      <svg className={style.down}>
        <use href={sprite + "#icon-down"}></use>
      </svg>
    </div>
  );
};

export default Filter;
