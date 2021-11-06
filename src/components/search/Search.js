import ExportBtn from "../button/ExpotrBtn";
import style from "./Search.module.css";
import sprite from "../../img/sprite.svg";

const Search = ({handleInput}) => {

  return (
    <div className={style.container}>
      <h2 className={style.student}>student</h2>
      <div className={style.flexSearch}>
        <label className={style.search}>
          <input type="text"  onChange={handleInput}
            className={style.input}
            placeholder="Enter Student Name, Parent or ID here"
          ></input>
        </label>
        <svg className={style.icon}>
          <use href={sprite + "#icon-search"}></use>
        </svg>
      </div>
      <ExportBtn />
    </div>
  );
};

export default Search;
