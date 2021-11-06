import style from "./Table.module.css";
import sprite from "../../img/sprite.svg";
import uniqid from "uniqid";

import { makeColorScore, makeColorSpeed } from "../../helpers/colors";
import { useState } from "react";

const BodyTable = ({ data, findStudent, inx }) => {
  const [isCheck, setIsCheck] = useState(false);
  return (
    <>
      <tr
        key={uniqid()}
        onClick={(e) => {
          findStudent(e, data.id);
        }}
        id={inx}
      >
        <th>
          <svg className={style.checkbox} onClick={() => setIsCheck(!isCheck)}>
            {isCheck ? (
              <use href={sprite + "#icon-square"}></use>
            ) : (
              <use href={sprite + "#icon-square-yes"}></use>
            )}
          </svg>
        </th>
        <th style={{ width: "250px" }}>{data.name} </th>
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
          <svg className={style.iconDown}>
            <use href={sprite + "#icon-down"}></use>
          </svg>
        </th>
      </tr>
    </>
  );
};

export default BodyTable;
