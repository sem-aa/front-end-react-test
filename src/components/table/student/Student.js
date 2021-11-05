import StudentHead from "./StudentHead"
import StudentBody from './StudentBody'
import style from './Student.module.css'

const Student = ({name, id, student}) => {
    return(
        <div className={style.studentContainer}>
        <StudentHead name={name} id={id}/>
        <StudentBody student={student}/>
        </div>
    )
}

export default Student