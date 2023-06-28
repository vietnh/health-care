export const fetcher = async <T>(
  url: string,
  params: Record<string, string> = {}
) => {
  const res = await fetch(url + "?" + new URLSearchParams(params));
  return res.json() as T;
};
