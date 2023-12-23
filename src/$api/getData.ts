import {ProfileResponse, WorkResponse, PagesResponse, ArticlesResponse, Article, ArticleResponse} from '@/types/api';

export const API_URL = process.env.API_URL || "http://localhost:1337";
const REVALIDATE_TIME = 600;

export async function getData(): Promise<WorkResponse[]> {
  const res = await fetch(
    `${API_URL}/api/works/?sort=position&populate[teches][populate][0]=logo&populate=screenshot`,
    { next: { revalidate: REVALIDATE_TIME } }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return (await res.json()).data;
}

export async function getProfile(): Promise<ProfileResponse> {
  const res = await fetch(
    `${API_URL}/api/profile?populate=*`,
    { next: { revalidate: REVALIDATE_TIME } }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return (await res.json());
}

export async function getPages(): Promise<PagesResponse> {
  const res = await fetch(
    `${API_URL}/api/pages?populate[seo][populate]=*`,
    { next: { revalidate: REVALIDATE_TIME } }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return (await res.json());
}

export async function getArticles(): Promise<ArticlesResponse> {
  const res = await fetch(
    `${API_URL}/api/articles/?populate[seo][populate]=*`,
    { next: { revalidate: REVALIDATE_TIME } }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return (await res.json());
}
export async function getArticle(slug: string): Promise<ArticleResponse> {
  const res = await fetch(
    `${API_URL}/api/articles/${slug}`,
    { next: { revalidate: REVALIDATE_TIME } }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return (await res.json());
}

