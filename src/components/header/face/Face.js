import face from "../../../img/face.png";
import sprite from "../../../img/sprite.svg";
import style from "./Face.module.css";

const Foto = () => {
  return (
    <div className={style.container}>
      <img className={style.foto} src={face} alt={"foto"} />
      <svg className={style.down}>
        <use href={sprite + "#icon-down"}></use>
      </svg>
    </div>
  );
};

export default Foto;
