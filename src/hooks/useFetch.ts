import { useEffect, useState } from "react";

const useFetch = <T>(url: string, initialValue: T, deps: any[] = []) => {
  const [data, setData] = useState<T>(initialValue);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, deps);

  return data;
};

export default useFetch;
