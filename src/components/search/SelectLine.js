import style from "./SelectLine.module.css";
import sprite from "../../img/sprite.svg";
import { CSVLink } from "react-csv";
import { headers } from "../../helpers/headers";


const SelectLine = ({ archiveSelected, cancelSelection, choseStudet }) => {
 console.log(choseStudet);
  return (
    <div className={style.selectLine}>
      <p className={style.text}> {choseStudet.length} Student selected </p>

      <div className={style.flex}>
        <div onClick={() => cancelSelection()} className={style.flex}>
          <svg className={style.icon}>
            <use href={sprite + "#icon-close"}></use>
          </svg>
          <p className={style.text}>cancel selection</p>
        </div>

        <CSVLink headers={headers} data={choseStudet} separator={";"}>
          <div className={style.flex}>
            <svg className={style.icon}>
              <use href={sprite + "#icon-export"}></use>
            </svg>
            <p className={style.text}>export csv</p>
          </div>
        </CSVLink>

        <div onClick={() => archiveSelected()} className={style.flex}>
          <svg className={style.archiveIcon}>
            <use href={sprite + "#icon-archive"}></use>
          </svg>
          <p className={style.archiveText}> archive selected</p>
        </div>
      </div>
    </div>
  );
};

export default SelectLine;
