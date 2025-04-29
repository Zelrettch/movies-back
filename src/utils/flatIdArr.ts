type IdArr = {
  id: number;
}[];

export const flatIdArr = (arr: IdArr) => {
  return arr.map((e) => e.id);
};
