import sprite from "../../img/sprite.svg";
import style from "./ExportBtn.module.css";

const ExportBtn = () => {
  return (
    <div className={style.exportBtn}>
      <svg className={style.export}>
        <use href={sprite + "#icon-export"} ></use>
      </svg>
      <p>Export CSV</p>
    </div>
  );
};

export default ExportBtn;
