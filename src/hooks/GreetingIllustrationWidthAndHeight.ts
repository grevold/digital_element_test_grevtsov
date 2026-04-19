/**
 *
 */
export const GreetingIllustrationWidthAndHeight = () => {
  const result = { width: 688, height: 623 };
  const currentHeightWindow = window.innerWidth;

  if (currentHeightWindow < 1130 && currentHeightWindow > 820) {
    result.width = 488;
    result.height = 423;
    return result;
  } if (currentHeightWindow < 820 && currentHeightWindow > 700) {
    result.width = 388;
    result.height = 323;
    return result;
  }
  if (currentHeightWindow < 700 && currentHeightWindow > 360) {
    result.width = 288;
    result.height = 223;
    return result;
  }
  if (currentHeightWindow < 370 && currentHeightWindow >= 360) {
    result.width = 288;
    result.height = 223;
    return result;
  }
  return result;
};
