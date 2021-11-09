import style from "./Archive.module.css";
import sprite from "../../img/sprite.svg";

const Archive = ({ data }) => {
  return (
    <>
      <tr className={style.archive}>
        <th className={style.check}>
          <svg className={style.checkbox}>
            <use href={sprite + "#icon-square"}></use>
          </svg>
        </th>
        <>
          <th>{data.name} </th>
          <th> {data.id}</th>
          <th>{data.class}</th>
          <th>{data.score}</th>
          <th>{data.speed}</th>
          <th className={style.filter} style={{ width: "500px" }}>
            <div className={style.infoLine}>
              <svg className={style.iconInfo}>
                <use href={sprite + "#icon-info"}></use>
              </svg>
              <span>{data.parents}</span>
            </div>
            <div className={style.flexIcon}>
              <svg className={style.iconDownStat}>
                <use href={sprite + "#icon-down"}></use>
              </svg>
            </div>
          </th>
        </>
      </tr>
    </>
  );
};

export default Archive;
