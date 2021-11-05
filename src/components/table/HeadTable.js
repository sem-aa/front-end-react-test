import sprite from '../../img/sprite.svg'
import style from './Table.module.css'


const HeadTable = ({isCheck}) => {
  return (
    <thead className={style.head}>
      <tr>
        <th>
          <svg className={style.checkbox}>
            {isCheck ? (
              <use href={sprite + "#icon-square"}></use>
            ) : (
              <use href={sprite + "#icon-square-yes"}></use>
            )}
          </svg>
        </th>
        <th className={style.filter} style={{ width: "250px" }}>
          <span>Name</span>
          <svg className={style.iconSort}>
            <use href={sprite + "#icon-a-z"}></use>
          </svg>
        </th>
        <th>ID</th>
        <th>
          <div className={style.filter}>
            <svg className={style.iconSort}>
              <use href={sprite + "#icon-up-down"}></use>
            </svg>
            <span>Class</span>
          </div>
        </th>
        <th>
          <div className={style.filter}>
            <span>Av. Score, % </span>
            <svg className={style.iconSort}>
              <use href={sprite + "#icon-up-down"}></use>
            </svg>
          </div>
        </th>
        <th className={style.filter}>
          <span>Av. Speed</span>
          <svg className={style.iconSort}>
            <use href={sprite + "#icon-up-down"}></use>
          </svg>
        </th>
        <th className={style.parents} style={{ width: "500px" }}>
          Parents
        </th>
      </tr>
    </thead>
  );
};

export default HeadTable;