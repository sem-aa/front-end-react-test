import SetBtn from "../button/SetBtn";
import ClearBtn from "../button/ClearBtn";
import style from "./Settings.module.css";
import id from "uniqid";

const Settings = () => {
  const nameSettings = [
    "show all",
    "All grades",
    "All classes",
    "Av.Score",
    "Av.Speed",
    "All Classes",
  ];

  return (
    <div className={style.container}>
      {nameSettings.map((set) => (
        <SetBtn key={id()} nameFilter={set} />
      ))}
      <ClearBtn clear={"clear all"} />
    </div>
  );
};

export default Settings;
