import { apiResponse } from "@/types/api";

export const API_URL = process.env.API_URL || "http://localhost:1337";
export async function getData(): Promise<apiResponse[]> {
  const res = await fetch(
    `${API_URL}/api/works/?populate[teches][populate][0]=logo&populate=screenshot`,
    { next: { revalidate: 600 } }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return (await res.json()).data;
}
