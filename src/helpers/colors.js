export const COLORS = {
  white: "#ffffff",
  darkGrey: "#5b5b5b",
  light: "#f9f9f9",
  primary: "#828282",
  secondary: "#5b5b5b",
  header: "#777777",
  filter: "#c0c0c0",

  yellow: "#e2b534",
  red: "#db4437",
  blue: "#4285f4",
  green: "#0f9d58",
};

export const makeColorScore = (score) => {
  if (score === null) {
    return COLORS.header;
  }
  const nubmer = Number.parseInt(score);
  if (nubmer >= 90) {
    return COLORS.blue;
  } else if (nubmer >= 80 && nubmer < 90) {
    return COLORS.green;
  } else if (nubmer >= 50 && nubmer < 80) {
    return COLORS.yellow;
  } else return COLORS.red;
};

export const makeColorSpeed = (speed) => {
  const normalize = speed?.toLowerCase();
  let color = "";
  switch (normalize) {
    case "above expected":
      color = COLORS.blue;
      break;
    case "as expected":
      color = COLORS.green;
      break;
    case "below expected":
      color = COLORS.red;
      break;
    default:
      color = COLORS.red;
  }
  return color;
};

export const isCheckStudent = (isCheck) => {
  if (isCheck) {
    const style = {
      background: "#F2F2F2",
      outline: "1px solid #C0C0C0",
      boxShadow: "0px 1px 4px rgba(60, 52, 135, 0.15)",
      fill: "#323232",
    };
    return style;
  }
};

export const comparesTime = (testTime, expTime) => {
  if (testTime === null) {
    return COLORS.header;
  }

  const toSeconds = (time) => {
    const toTime = time.split(" ").map((item) => item.slice(0, -1));
    const seconds = +toTime[0] * 60 * 60 + +toTime[1] * 60 + +toTime[2];
    return seconds;
  };
  const color =
    toSeconds(testTime) < toSeconds(expTime) ? COLORS.green : COLORS.red;
  return color;
};
