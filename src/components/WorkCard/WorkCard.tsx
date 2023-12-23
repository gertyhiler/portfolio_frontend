import React, { type FC } from "react";
import { Tech } from "@/components/Tech/Tech";
import Link from "next/link";
import Image from "next/image";
import { Technology } from "@/types/api";

export interface WorkCardProps {
  headline: string;
  description: string;
  link: string;
  screenshot: string;
  tech: Technology[];
  variant: "work" | "blog"
}

export const WorkCard: FC<WorkCardProps> = ({
  headline,
  description,
  link,
  screenshot,
  tech,
  variant
}) => {
  const target = link.includes('http') ? "_blank" : "_self"
  return (
    <li className={variant === "work" ? "animate__animated animate__fadeInUp" : ""}>
      <div className="max-w-3xl h-full flex flex-col mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link href={link} target={target}>
          <Image className={`rounded-t-lg ${variant === "work" ? "" : "aspect-video object-cover"} w-full h-auto`} src={screenshot} alt={headline} width={512} height={400} />
        </Link>
        <div className="p-5 flex-grow inline-flex flex-col">
          <a href={link} target={target}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {headline}
            </h5>
          </a>
          <p className="mb-auto font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
          <ul className="flex w-full gap-x-1 items-center flex-wrap mb-2.5">
            {tech.map((i) => (
              <Tech key={i.attributes.logo.data.id} attributes={i.attributes} />
            ))}
          </ul>
          <Link
            href={link}
            target={target}
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-900 transition-colors"
          >
            Go to
            <svg
              aria-hidden="true"
              className="max-w-[1.5rem] ml-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
            </svg>
          </Link>
        </div>
      </div>
    </li>
  );
};
