import style from "./Header.module.css";
import Filter from "../button/Filter";
import Face from "./face/Face"

const Header = () => {
  return (
    <header className={style.header}>
      <Filter nameFilter={"school 1"} />
      <nav>
        <ul className={style.navList}>
          <li>Analytics</li>
          <li>gradebooks</li>
          <li>Tests</li>
          <li className={style.active}>Students</li>
          <li>Teachers</li>
          <li>archive</li>
        </ul>
      </nav>
      <Face  />
    </header>
  );
};

export default Header;
