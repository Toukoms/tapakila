import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
const api = axios.create({
  baseURL: baseURL!,
});
export const fetcher = (url: string) => api.get(url).then((res) => res.data);
