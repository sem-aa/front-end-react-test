import style from "./Table.module.css";
import sprite from "../../img/sprite.svg";
import { useState, useEffect } from "react";
import uniqid from "uniqid";
import HeadTable from "./HeadTable";
import Student from "./student/Student";
import { makeColorScore, makeColorSpeed } from "../../helpers/colors";
import Search from "../search/Search";
import { getStudents, findStudentApi } from "../../services/api";

function MainTable() {
  const [state, setState] = useState([]);
  const [isCheck, setIsCheck] = useState(true);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(20);
  const [student, setStudent] = useState();
  const [search, setSearch] = useState();
  const [sort, setSort] = useState([]);
  const [sortDir, setSortDir] = useState(1);

  useEffect(() => {
    setLoading(true);

    getStudents(page, size, sort, sortDir).then((response) => {
      setState(response);
    });

    setLoading(false);
  }, [page, size, sort, sortDir]);

  const findStudent = (id) =>
    setStudent(state.data.find((data) => data.id === id));

  const sortStudents = (e) => {
    setSort(e.currentTarget.id);
    if (sortDir === -1) {
      setSortDir(1);
    } else setSortDir(-1);
  };

  const handleInput = async (e) => {
      if (e.currentTarget.value) {
      setSearch(e.currentTarget.value);
      setLoading(true);
      findStudentApi(page, size, search).then((response) => {
        setState(response);
      });
      setLoading(false);
    } else {
      getStudents(page, size, sort, sortDir).then((response) => {
        setState(response);
      });
    }
  };

  return (
    <div>
      <Search handleInput={handleInput} />
      <table className={style.table}>
        <HeadTable sortStudents={sortStudents} isCheck={isCheck} />
        {loading ? (
          <tbody>
            <tr>
              <th>Loading...</th>
            </tr>
          </tbody>
        ) : (
          <tbody className={style.body}>
            {state.data?.map((data) => (
              <tr onClick={() => findStudent(data.id)} key={uniqid()}>
                <>
                  <th>
                    <svg
                      className={style.checkbox}
                      onClick={() => setIsCheck(!isCheck)}
                    >
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
                  <th style={{ color: makeColorScore(data.score) }}>
                    {data.score}
                  </th>
                  <th style={{ color: makeColorSpeed(data.speed) }}>
                    {data.speed}
                  </th>
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
                </>
              </tr>
            ))}
          </tbody>
        )}
      </table>
      {student && (
        <Student name={student?.name} id={student?.id} student={student} />
      )}
      <div className={style.footer}>
        <p className={style.page}>Rows per page: {size}</p>
        <svg className={style.iconDown}>
          <use href={sprite + "#icon-down"}></use>
        </svg>{" "}
        <p className={style.page}> 1-10 of {state.length} </p>
        <svg className={style.iconLeft}>
          <use href={sprite + "#icon-left"}></use>
        </svg>{" "}
        <svg className={style.iconRight}>
          <use href={sprite + "#icon-right"}></use>
        </svg>{" "}
      </div>

      <button onClick={() => setPage(page + 1)}>page +1 </button>
      <button onClick={() => setPage(page - 1)}>page - 1</button>
      <button onClick={() => setSize(size + 10)}>size + 10</button>
      <button onClick={() => setSize(size - 10)}>size - 10</button>
    </div>
  );
}

export default MainTable;
