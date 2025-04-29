export const checkNumer = (val: string) => {
  const number = Number(val);
  return Number.isInteger(number) && number > 0;
};
