import './globals.css'
import 'animate.css'
import type {Metadata} from 'next'
import {Montserrat} from 'next/font/google'
import {Header} from '@/components/Header'
import React from "react";
import {Footer} from "@/components/Footer/Footer";
import Script from "next/script";
import {SeoLinks} from "@/components/SeoLinks/SeoLinks";

const font = Montserrat({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Портфолио | Коробка Андрей',
    description: 'Список всех мной реализованных проектов',
    themeColor: "#1F2937"
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="ru">
        <Script src='/ya.metrica.js'/>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-2004SZCNZX"/>
        <Script src="/ga-tag.js"/>
        <SeoLinks/>
        <body className={`${font.className} dark:bg-gray-900 px-2 md:px-6 animate__animated animate__fadeIn`}>
        <Header/>
        <main>
            {children}
        </main>
        <Footer/>
        </body>
        </html>
    )
}
