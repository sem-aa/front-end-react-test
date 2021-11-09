import React, { useState } from "react";
import style from "./Table.module.css";
import sprite from "../../img/sprite.svg";
import uniqid from "uniqid";

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
  cancelSelect,
}) => {
  const [isCheck, setIsCheck] = useState(false);

  return (
    <>
      <tr
        style={isCheckStudent(cancelSelect && (isCheck || selectAll))}
        key={uniqid()}
      >
        <th
          className={style.check}
          onClick={() => {
            setIsCheck(!isCheck);
            selectStudents(data);
          }}
        >
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
            onClick={(e) => {
              findStudent(e, data.id);
            }}
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
              <svg
                onClick={(e) => {
                  findStudent(e, data.id);
                }}
                id={inx}
                className={style.iconDownStat}
              >
                <use href={sprite + "#icon-down"}></use>
              </svg>
            </div>
          </th>
        </>
      </tr>
    </>
  );
};

export default BodyTable;
