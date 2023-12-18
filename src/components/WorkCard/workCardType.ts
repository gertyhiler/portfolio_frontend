import { Technology } from "@/types/api";

export interface IWorkCard {
  headline: string;
  description: string;
  link: string;
  screenshot: string;
  tech: Technology[];
}
