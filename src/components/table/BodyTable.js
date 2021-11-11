import style from "./Table.module.css";
import sprite from "../../img/sprite.svg";

import {
  makeColorScore,
  makeColorSpeed,
  isCheckStudent,
} from "../../helpers/colors";

const BodyTable = ({
  data,
  findStudent,
  inx,
  selectAll,
  selectStudents,
  isCheck,
}) => {
  const clickSelect = () => {
    selectStudents(data);
  };
  const clickStudent = (e) => {
    findStudent(e, data.id);
  };

  return (
    <tr style={isCheckStudent(isCheck || selectAll)}>
      <th className={style.check} onClick={clickSelect}>
        <svg className={style.checkbox}>
          {isCheck || selectAll ? (
            <use fill="#323232" href={sprite + "#icon-square-yes"}></use>
          ) : (
            <use href={sprite + "#icon-square"}></use>
          )}
        </svg>
      </th>
      <>
        <th
          onClick={clickStudent}
          id={inx}
          style={{ width: "250px", cursor: "pointer" }}
        >
          {data.name}{" "}
        </th>
        <th> {data.id}</th>
        <th>{data.class}</th>
        <th style={{ color: makeColorScore(data.score) }}>{data.score}</th>
        <th style={{ color: makeColorSpeed(data.speed) }}>{data.speed}</th>
        <th className={style.filter} style={{ width: "500px" }}>
          <div className={style.infoLine}>
            <svg className={style.iconInfo}>
              <use href={sprite + "#icon-info"}></use>
            </svg>
            <span>{data.parents}</span>
          </div>
          <div className={style.flexIcon}>
            {isCheck && (
              <>
                <svg className={style.iconStat}>
                  <use href={sprite + "#icon-edit"}></use>
                </svg>
                <svg className={style.iconStat}>
                  <use href={sprite + "#icon-stat"}></use>
                </svg>
              </>
            )}
            <svg onClick={clickStudent} id={inx} className={style.iconDownStat}>
              <use href={sprite + "#icon-down"}></use>
            </svg>
          </div>
        </th>
      </>
    </tr>
  );
};

export default BodyTable;
