import sprite from "../../img/sprite.svg";
import style from "./Table.module.css";

const HeadTable = ({ sortStudents, selectAll, isCheck }) => {
  return (
    <thead className={style.head}>
      <tr>
        <th>
          <svg onClick={selectAll} className={style.checkbox}>
            {isCheck ? (
              <use href={sprite + "#icon-square-yes"}></use>
            ) : (
              <use href={sprite + "#icon-square"}></use>
            )}
          </svg>
        </th>
        <th
          onClick={sortStudents}
          id="name"
          className={style.filter}
          style={{ width: "250px" }}
        >
          <span>Name</span>
          <svg className={style.iconSort}>
            <use href={sprite + "#icon-a-z"}></use>
          </svg>
        </th>
        <th>ID</th>
        <th onClick={sortStudents} id="class">
          <div className={style.filter}>
            <svg className={style.iconSort}>
              <use href={sprite + "#icon-up-down"}></use>
            </svg>
            <span>Class</span>
          </div>
        </th>
        <th onClick={sortStudents} id="score">
          <div className={style.filter}>
            <span>Av. Score, % </span>
            <svg className={style.iconSort}>
              <use href={sprite + "#icon-up-down"}></use>
            </svg>
          </div>
        </th>
        <th onClick={sortStudents} id="speed" className={style.filter}>
          <span>Av. Speed</span>
          <svg className={style.iconSort}>
            <use href={sprite + "#icon-up-down"}></use>
          </svg>
        </th>
        <th className={style.parents} style={{ width: "500px" }}>
          <div className={style.filter}>
            <span>Parents </span>
            {isCheck && <span className={style.actions}>Actions</span>}
          </div>
        </th>
      </tr>
    </thead>
  );
};

export default HeadTable;
