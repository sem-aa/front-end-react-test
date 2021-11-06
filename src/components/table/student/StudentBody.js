import style from "./StudentBody.module.css";
import sprite from "../../../img/sprite.svg";
import uniqid from "uniqid";
import { makeColorScore, makeColorSpeed } from "../../../helpers/colors";

const StudentBody = ({ student }) => {


  return (
    <table className={style.table}>
      <thead className={style.head}>
        <tr>
          <th>#</th>
          <th className={style.filter} style={{ width: "250px" }}>
            Test Label
          </th>
          <th>Score</th>
          <th>Speed</th>
          <th>Total Q-ns</th>
          <th className={style.filter}>Exp. Speed</th>
          <th className={style.parents}>Concept</th>
          <th className={style.date}>
            <span>Date</span>

            <svg className={style.iconSort}>
              <use href={sprite + "#icon-up-down"}></use>
            </svg>
          </th>
          <th className={style.parents}>Absent</th>
        </tr>
      </thead>
      <tbody>
        {student.tests?.map(
          ({ label, score, speed, total, expSpeed, concept, date, abcent }) => (
            <tr key={uniqid()}>
              <th className={style.text}>1</th>
              <th className={style.text} style={{ width: "250px" }}>
                {label}
              </th>
              <th
                style={{ color: makeColorScore({ score }) }}
                className={style.text}
              >
                {score}
              </th>
              <th className={style.text}>{speed}</th>
              <th className={style.text}>{total}</th>
              <th className={style.text}>{expSpeed}</th>
              <th className={style.text}>{concept}</th>
              <th className={style.text}>
                <span>{date}</span>
              </th>
              <th className={style.text}>
                <svg className={style.iconSquare}>
                  {abcent ? (
                    <use href={sprite + "#icon-square-yes"}></use>
                  ) : (
                    <use href={sprite + "#icon-square"}></use>
                  )}
                </svg>
              </th>
            </tr>
          )
        )}
        <tr >
          <th></th>
          <th className={style.results}>average</th>
          <th className={style.results} style={{color: makeColorScore(student.score)}}>{student.score}</th>
          <th className={style.results} style={{color: makeColorSpeed(student.speed)}}>{student.speed}</th>
        </tr>
      </tbody>
    </table>
  );
};

export default StudentBody;
