"use client"
import React, {type FC, useState} from 'react';
import Image from 'next/image'
import Link from "next/link";

export const Header: FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        //   <header className="header animate__animated animate__fadeInDown">
        //   <div className="header__wrapper">
        //     <div className="header-content">
        //       <img className="w-20 h-20 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="/36032455.jpeg" alt="Bordered avatar"/>
        //       <div>
        //         <h1 className="font-medium text-2xl dark:text-white">Андрей Коробка</h1>
        //         <div className="inline-flex items-center justify-center w-full py-2">
        //           <ul className="flex gap-2">
        //             <li className="header__item">
        //               <a target="_blank" href="https://github.com/gertyhiler" className="header__link">
        //                 <Image src="/github.svg" alt="Логотип гитхаб"  width={100} height={100} className="header__image"/>
        //
        //               </a>
        //             </li>
        //             <li className="header__item">
        //               <a target="_blank" href="https://t.me/bananawinst" className="header__link">
        //                 <Image src="/telegram-1.svg" alt="Логотип телеграмма"  width={100} height={100} className="header__image"/>
        //               </a>
        //             </li>
        //             <li className="header__item">
        //               <a target="_blank" href="mailto:tryuserrus@gmail.com" className="header__link">
        //                 <Image src="/gmail-icon.svg" alt="Логотип почты"  width={100} height={100} className="header__image"/>
        //               </a>
        //             </li>
        //           </ul>
        //         </div>
        //       </div>
        //     </div>
        //     <Navigation navLinks={[{href: '/', name: 'Проекты'}]}/>
        //   </div>
        // </header>

        <header className="animate__animated animate__fadeInDown">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 rounded-b-lg">
                <div className="header__wrapper">
                    <Link href="/" className="flex items-center gap-4">
                        <img
                            className="lg:w-20 lg:h-20 w-10 h-10 p-1 rounded-full ring-2 ring-purple-300 dark:ring-purple-500"
                            src="/36032455.jpeg" alt="Bordered avatar"/>
                        <h1 className="self-center lg:text-xl font-semibold whitespace-nowrap dark:text-white">Андрей
                            Коробка</h1>
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <ul className="flex gap-2">
                            <li className="header__item">
                                <a target="_blank" href="https://github.com/gertyhiler" className="header__link">
                                    <Image src="/github.svg" alt="Логотип гитхаб" width={100} height={100}
                                           className="header__image dark:invert"/>

                                </a>
                            </li>
                            <li className="header__item">
                                <a target="_blank" href="https://t.me/bananawinst" className="header__link">
                                    <Image src="/telegram-1.svg" alt="Логотип телеграмма" width={100} height={100}
                                           className="header__image"/>
                                </a>
                            </li>
                            <li className="header__item">
                                <a target="_blank" href="mailto:hello@andrew-web.ru" className="header__link">
                                    <Image src="/gmail-icon.svg" alt="Логотип почты" width={100} height={100}
                                           className="header__image"/>
                                </a>
                            </li>
                        </ul>
                        <button data-collapse-toggle="mobile-menu-2" type="button"
                                onClick={(e) => setIsMenuOpen(!isMenuOpen)}
                                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                aria-controls="mobile-menu-2" aria-expanded="false">
                            <span className="sr-only">Открыть меню</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                      clipRule="evenodd"></path>
                            </svg>
                            <svg className={`hidden w-6 h-6`} fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                      clipRule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                    <div
                        className={`${isMenuOpen ? 'block' : 'hidden'} transition-all justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
                        id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <Link href={"/"}
                                      className={"block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"}>
                                    Проекты
                                </Link>
                            </li>
                            <li>
                                <a href="#about"
                                      className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                                    Обо мне
                                </a>
                            </li>
                            <li>
                                <a href="#aboutProject"
                                   className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">О проекте</a>
                            </li>
                            {/*<li>*/}
                            {/*    <a href="#"*/}
                            {/*       className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Features</a>*/}
                            {/*</li>*/}
                            {/*<li>*/}
                            {/*    <a href="#"*/}
                            {/*       className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Team</a>*/}
                            {/*</li>*/}
                            {/*<li>*/}
                            {/*    <a href="#"*/}
                            {/*       className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact</a>*/}
                            {/*</li>*/}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}