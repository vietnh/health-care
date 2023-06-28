export function paginate<T>(array: T[], searchParams: URLSearchParams) {
  const page = Number(searchParams.get("page")) || 1;
  const perPage = Number(searchParams.get("perPage")) || 8;

  return array.slice((page - 1) * perPage, page * perPage);
}
