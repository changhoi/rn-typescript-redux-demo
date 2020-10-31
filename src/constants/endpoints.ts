export const BASE = "https://www.themealdb.com/api/json/v1/1";
export const SEARCH = (term: string) => `/search.php?s=${term}`;
export const DETAIL = (id: number) => `/lookup.php?i=${id}`;
