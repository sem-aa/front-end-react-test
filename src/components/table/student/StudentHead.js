import sprite from "../../../img/sprite.svg";
import style from "./Student.module.css"
import {COLORS} from '../../../helpers/colors'

const StudentHead = ({ name, id }) => {
  return (
    <div >
      <div className={style.flexContainer}>
        <p className={style.textHead}>student: <span className={style.nameStudent}>{name}</span></p>
        <p className={style.textHead}>id:<span className={style.nameStudent}>{id}</span></p>
      </div>
      <div className={style.flexContainer}>
        <div className={style.button}>
        <p className={style.textHead}>
          all concepts
        </p>
        <svg className={style.down}>
            <use href={sprite + "#icon-down"}></use>
          </svg>
        </div>
        <div className={style.button}>
        <p className={style.textHead}>
        All score
        </p>
        <svg className={style.down}>
            <use href={sprite + "#icon-down"}></use>
          </svg>
        </div>
        <div className={style.button}>
        <p className={style.textHead}>
        All speed
        </p>
        <svg className={style.down}>
            <use href={sprite + "#icon-down"}></use>
          </svg>
        </div>
        <div className={style.calendar}>
        <label>
          <input className={style.input}
            placeholder="Select Period"
          ></input>
        </label>
        <svg className={style.iconCalendar}>
          <use href={sprite + "#icon-calendar"}></use>
        </svg>
        </div>
        <svg className={style.iconRefresh}>
          <use href={sprite + "#icon-refresh"}></use>
        </svg>
      </div>
      <div  className={style.flexContainer}>
        <p className={style.score}>score </p>
        <p className={style.textItem} style={{color: COLORS.blue}}>
          <svg  className={style.ellipse} >
            <use fill={COLORS.blue} href={sprite + "#icon-ellipse"}></use>
          </svg>
          90% + accuracy
        </p>
        <p className={style.textItem} style={{color: COLORS.green}}>
          <svg className={style.ellipse}>
            <use fill={COLORS.green} href={sprite + "#icon-ellipse"}></use>
          </svg>
          80 - 89% accuracy
        </p>
        <p className={style.textItem} style={{color: COLORS.yellow}}>
          <svg className={style.ellipse}>
            <use fill={COLORS.yellow} href={sprite + "#icon-ellipse"}></use>
          </svg>
          50 - 79% accuracy
        </p>
        <p className={style.textItem} style={{color: COLORS.red}}>
          <svg className={style.ellipse}>
            <use fill={COLORS.red} href={sprite + "#icon-ellipse"}></use>
          </svg>
          below 50% accuracy
        </p>
      </div>
      <div className={style.flexContainer}>
        <p className={style.score}>speed </p>
        <p className={style.textItem} style={{color: COLORS.blue}}>
          <svg className={style.ellipse}>
            <use fill={COLORS.blue} href={sprite + "#icon-ellipse"}></use>
          </svg>
          above expected
        </p>
        <p className={style.textItem} style={{color: COLORS.green}}>
          <svg className={style.ellipse}>
            <use fill={COLORS.green} href={sprite + "#icon-ellipse"}></use>
          </svg>
          as expected
        </p>
        <p className={style.textItem} style={{color: COLORS.red}}>
          <svg className={style.ellipse}>
            <use fill={COLORS.red} href={sprite + "#icon-ellipse"}></use>
          </svg>
          below expected
        </p>
        </div>
    </div>
  );
};

export default StudentHead;
