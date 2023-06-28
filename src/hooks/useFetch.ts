import { useEffect, useState } from "react";
import { fetcher } from "./utils";

const useFetch = <T>(url: string, initialValue: T, deps: any[] = []) => {
  const [data, setData] = useState<T>(initialValue);
  useEffect(() => {
    fetcher<T>(url).then((data) => setData(data));
  }, deps);

  return data;
};

export default useFetch;
