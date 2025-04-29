const calculatePaginationData = (
  totalItems: number,
  perPage: number,
  page: number,
) => {
  const totalPages = Math.ceil(totalItems / perPage);
  return {
    totalItems,
    perPage,
    totalPages,
    page,
    hasNext: Boolean(totalPages - page),
  };
};

export default calculatePaginationData;
