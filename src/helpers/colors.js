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
    const normalize = speed?.toLowerCase()
           let color = '';
        switch (normalize) {
          case 'above expected':
            color = COLORS.blue;
            break;
          case 'as expected':
            color = COLORS.green;
            break;
          case 'below expected':
            color = COLORS.red;
            break;
          default:
            color = COLORS.red;
        }
        return color;


}


