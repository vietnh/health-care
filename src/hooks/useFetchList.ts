import { useState, useEffect } from "react";
import { fetcher } from "./utils";

const useFetchList = <T>(
  url: string,
  params: Record<string, string> = {},
  initialValue: T[] = []
) => {
  const [data, setData] = useState<T[]>(initialValue);
  const [page, setPage] = useState(1);

  const fetch = async (
    params: Record<string, string> = {},
    isLoadMore: boolean = false
  ) => {
    const newPage = isLoadMore ? page + 1 : page;
    const res = await fetcher<T[]>(url, {
      page: String(newPage),
      perPage: "8",
      ...params,
    });

    setPage(newPage);
    setData((prev) => (isLoadMore ? [...prev, ...res] : res));
  };

  useEffect(() => {
    fetch(params);
  }, []);

  return { data, fetch };
};

export default useFetchList;
