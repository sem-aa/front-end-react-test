import ExportBtn from "../button/ExpotrBtn";
import style from "./Search.module.css";
import sprite from "../../img/sprite.svg";
import { CSVLink } from "react-csv";
import { headers } from "../../helpers/headers";

const Search = ({ handleInput, closeStudent, data }) => {
  return (
    <div className={style.container}>
      <h2 onClick={closeStudent} className={style.student}>
        student
      </h2>
      <div className={style.flexSearch}>
        <label className={style.search}>
          <input
            type="text"
            onChange={handleInput}
            className={style.input}
            placeholder="Enter Student Name, Parent or ID here"
          ></input>
        </label>
        <svg className={style.icon}>
          <use href={sprite + "#icon-search"}></use>
        </svg>
      </div>
      <CSVLink headers={headers} data={data} separator={";"}>
        <ExportBtn />
      </CSVLink>
    </div>
  );
};

export default Search;
