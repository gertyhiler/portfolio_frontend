"use client";
import React, { type FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { type DefaultImageType } from "@/types/api";
import { BACKEND_URL } from "@/constant/back-route";

interface HeaderProps {
  profile: DefaultImageType;
}

export const Header: FC<HeaderProps> = ({ profile }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="animate__animated animate__fadeInDown flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
      <nav
        className="mt-6 max-w-screen-2xl relative w-full bg-white border border-purple-500 rounded-[36px] mx-2 py-3 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto dark:bg-gray-800 dark:border-gray-700"
        aria-label="Меню"
      >
        <div className="flex items-center justify-between gap-4">
          <Image
            className="lg:w-14 lg:h-14 w-10 h-10 p-1 rounded-full"
            src={`${BACKEND_URL}${profile.formats.medium.url}`}
            alt={profile.alternativeText || "Фото профиля"}
            width={profile.formats.medium.width}
            height={profile.formats.medium.height}
            placeholder="blur"
            priority
            blurDataURL={`${BACKEND_URL}${profile.formats.thumbnail.url}`}
          />
          <h1 className="self-center lg:text-xl font-semibold whitespace-nowrap dark:text-white">
            Андрей Коробка
          </h1>
          <div className="md:hidden">
            <button
              type="button"
              className="w-8 h-8 flex justify-center items-center text-sm font-semibold rounded-full border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              aria-label="Переключить меню"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <svg
                className="flex-shrink-0 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <svg
                className="hidden flex-shrink-0 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } overflow-hidden transition-all duration-300 basis-full grow md:block`}
        >
          <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:ps-7">
            <Link
              href="/"
              className="block font-medium py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
            >
              Проекты
            </Link>
            <Link
              href="/blog"
              className="block font-medium py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
            >
              Блог
            </Link>
            <div className="flex w-full justify-center gap-4 md:w-[initial] md:justify-normal md:flex-row md:gap-5 md:border-l md:pl-2 border-purple-500 dark:border-white">
              <Link
                target="_blank"
                href="https://github.com/gertyhiler"
                className="header__link "
              >
                <Image
                  src="/github.svg"
                  alt="Логотип гитхаб"
                  width={100}
                  height={100}
                  className="header__image dark:invert"
                />
              </Link>
              <Link
                target="_blank"
                href="mailto:hello@andrew-web.ru"
                className="header__link"
              >
                <Image
                  src="/gmail-icon.svg"
                  alt="Логотип почты"
                  width={100}
                  height={100}
                  className="header__image"
                />
              </Link>
              <Link
                target="_blank"
                href="https://t.me/bananawinst"
                className="header__link"
              >
                <Image
                  src="/telegram-1.svg"
                  alt="Логотип телеграмма"
                  width={100}
                  height={100}
                  className="header__image"
                />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
