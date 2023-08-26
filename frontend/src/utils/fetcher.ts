// useSWRで使用するfetchをラップしたfetcher関数
export const fetcher = async <T>(args: string): Promise<T> => {
  const response = await fetch(args);
  return response.json();
};
