import {ProfileResponse, WorkResponse, PagesResponse} from '@/types/api';

export const API_URL = process.env.API_URL || "http://localhost:1337";
export async function getData(): Promise<WorkResponse[]> {
  const res = await fetch(
    `${API_URL}/api/works/?sort=position&populate[teches][populate][0]=logo&populate=screenshot`,
    { next: { revalidate: 600 } }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return (await res.json()).data;
}

export async function getProfile(): Promise<ProfileResponse> {
  const res = await fetch(
    `${API_URL}/api/profile?populate=*`,
    { next: { revalidate: 600 } }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return (await res.json());
}

export async function getPages(): Promise<PagesResponse> {
  const res = await fetch(
    `${API_URL}/api/pages?populate=*`,
    { next: { revalidate: 600 } }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return (await res.json());
}
// export async function getPage(route: Routes): Promise<any> {
//   const res = await fetch(
//     `${API_URL}/api/pages/?populate=*`,
//     { next: { revalidate: 600 } }
//   );
//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return (await res.json());
// }

