const calculatePaginationData = (
  totalRows: number,
  perPage: number,
  page: number,
) => {
  const totalPages = Math.ceil(totalRows / perPage);
  return {
    totalRows,
    perPage,
    totalPages,
    page,
    hasNext: Boolean(totalPages - page),
  };
};

export default calculatePaginationData;
