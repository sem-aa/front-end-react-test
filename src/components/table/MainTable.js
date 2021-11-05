import style from "./Table.module.css";
import sprite from "../../img/sprite.svg";
import { useState, useEffect } from "react";
import uniqid from "uniqid";
import axios from "axios";
import HeadTable from "./HeadTable";
import Student from "./student/Student";
import { makeColorScore, makeColorSpeed } from "../../helpers/colors";

function Head() {
  const [state, setState] = useState([]);
  const [isCheck, setIsCheck] = useState(true);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(20);
  const [student, setStudent] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://test-task-j.herokuapp.com/data?page=${page}&size=${size}`)
      .then((response) => {
        setState({ students: response.data });
        setLoading(false);
      });
  }, [page, size]);

  const students = state.students?.data || [];

  const findStudent = (id) =>
    setStudent(students.find((data) => data.id === id));
console.log(student);


  return (
    <div>
      <table className={style.table}>
        <HeadTable isCheck={isCheck} />
        {loading ? (
          <tbody>
            <tr>
              <th>Loading...</th>
            </tr>
          </tbody>
        ) : (
          <tbody className={style.body}>
            {students?.map((data) => (
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
        <p className={style.page}> 1-10 of {students.length} </p>
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

export default Head;
