// import Image from "next/image";
// import certificate from "public/assets/certificate-react.png";
import Link from "next/link";

export function Hero() {
  return (
    <section className="bg-white dark:bg-gray-900" id="about">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7 animate__animated animate__fadeInLeft">
          <h2 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Hi, 👋
            <p className="text-purple-600 border-primary-600 dark:text-purple-600">
              Я Андрей
            </p>
            Frontend developer
          </h2>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Мой стек: React + Typescript + NodeJs. По мимо фронтенд разработки
            развиваюсь в маркетинге и дизайне.
            <br />
            Люблю вино 🍷 и баскетбол 🏀
          </p>
          <Link
            href="#projects"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 transition-colors text-base font-medium text-center text-white rounded-lg bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-900"
          >
            Проекты
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
          <Link
            href="http://t.me/bananawinst"
            target="_blank"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center transition-colors text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            referrerPolicy="no-referrer"
          >
            Написать мне
          </Link>
        </div>
        {/* <div className="hidden lg:mt-0 lg:col-span-5 lg:flex animate__animated animate__fadeInRight">
          <Image src={certificate} className="max-w-[200px] h-auto" alt="Сертификат react" />
        </div> */}
      </div>
    </section>
  );
}
