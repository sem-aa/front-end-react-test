import React, { useState, useEffect } from "react";
import uniqid from "uniqid";

import style from "./Table.module.css";
import sprite from "../../img/sprite.svg";
import HeadTable from "./HeadTable";
import BodyTable from "./BodyTable";
import Student from "./student/Student";
import Search from "../search/Search";
import { getStudents, findStudentApi } from "../../services/api";

function MainTable() {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(5);
  const [student, setStudent] = useState(false);
  const [search, setSearch] = useState();
  const [sort, setSort] = useState([]);
  const [sortDir, setSortDir] = useState(1);
  const [indexStudent, setIndexStudent] = useState();
  const [selectAll, setSelectAll] = useState(false)


  useEffect(() => {
    setLoading(true);
    getStudents(page, size, sort, sortDir).then((response) => {
      setState(response)


    });
    setLoading(false);
  }, [page, size, sort, sortDir]);

  const findStudent = (e, id) => {
    setIndexStudent(Number(e.currentTarget.id));
    setStudent(state.data.find((data) => data.id === id));
  };

  const closeStudent = () => {
    if(student) {
      setStudent(false)
    }
  }

  const sortStudents = (e) => {
    setSort(e.currentTarget.id);
    if (sortDir === -1) {
      setSortDir(1);
    } else setSortDir(-1);
  };

  const handleInput = (e) => {
    if (e.currentTarget.value.length > 2) {
      setSearch(e.currentTarget.value);
      setLoading(true);
      setPage(1);
      setSize(20);
      findStudentApi(page, size, search).then((response) => {
        setState(response);
      });
      setLoading(false);
    } else {
      setLoading(true);
      getStudents(page, size, sort, sortDir).then((response) => {
        setState(response);
      });
      setLoading(false);
    }
  };

  const setRowsPage = () => {
    if (size >= 20) {
      setSize(5);
    } else setSize(size + 5);
  };

  const incrementPage = () => {
    const currentStudents = size * page;
    const maxStudents = state.totalPages * state.data.length;

    if (currentStudents >= maxStudents) {
      setPage(1);
    } else {
      setPage(page + 1);
    }
  };

  const decrementPage = () => {
    const currentStudents = size * page;
    const maxStudents = state.totalPages * state.data.length;
    if (currentStudents < maxStudents) {
      setPage(1);
    } else setPage(page - 1);
  };

  const choseAllStudents = () => {

    setSelectAll(!selectAll)
    console.log(selectAll);
  }

const data =  state.data || "no students"

  return (
    <div>
      <Search  data={data} closeStudent={closeStudent}  handleInput={handleInput} />
      <table className={style.table}>
        <HeadTable 
        isCheck={selectAll}
        selectAll={choseAllStudents}
        sortStudents={sortStudents} />
        {loading ? (
          <tbody>
            <tr>
              <th>Loading...</th>
            </tr>
          </tbody>
        ) : (
          <tbody className={style.body}>
            {state.data?.map((data, inx) =>  {
              return (
                <>
                  <BodyTable
                    key={uniqid()}
                    inx={inx}
                    data={data}
                    findStudent={findStudent}
                    selectAll={selectAll}
                  />
                  {student && inx === indexStudent && (
                      <tr>
                        <th colSpan="7">
                          {" "}
                          <Student
                            name={student?.name}
                            id={student?.id}
                            student={student}
                          />
                        </th>
                        <th></th>
                      </tr>
                  )}
                </>
              );
            })}
          </tbody>
        )}
      </table>
      <div className={style.footer}>
        <p className={style.page}>Rows per page: {size}</p>
        <svg onClick={setRowsPage} className={style.iconDown}>
          <use href={sprite + "#icon-down"}></use>
        </svg>{" "}
        <p className={style.page}>
          {" "}
          {size * page} of {state.data && state.totalPages * state.data.length}{" "}
        </p>
        <svg onClick={decrementPage} className={style.iconLeft}>
          <use href={sprite + "#icon-left"}></use>
        </svg>{" "}
        <svg onClick={incrementPage} className={style.iconRight}>
          <use href={sprite + "#icon-right"}></use>
        </svg>{" "}
      </div>
    </div>
  );
}

export default MainTable;
