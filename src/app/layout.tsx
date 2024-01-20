import "./globals.css";
import "animate.css";

import type { Metadata, ResolvingMetadata } from "next";
import { Montserrat } from "next/font/google";
import { Header } from "@/components/Header";
import React from "react";
import { Footer } from "@/components/Footer/Footer";
import Script from "next/script";
import { SeoLinks } from "@/components/SeoLinks/SeoLinks";
import { getPages, getProfile } from "@/$api/getData";
import { headers } from "next/dist/client/components/headers";
import { BACKEND_URL } from "@/constant/back-route";

const font = Montserrat({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Портфолио | Коробка Андрей",
  description: "Список всех мной реализованных проектов",
  themeColor: "#1F2937",
  verification: {
    yandex: "40b6db3c7c4d4795"
  }
};
type Props = {
  params: {};
  searchParams: { [key: string]: string | string[] | undefined };
};
export async function generateMetadata(
  props: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const currentPath = headers().get("x-next-path-page");
  const pages = await getPages();
  const currentPageMetadata = pages.data.find(
    (_) => _.attributes.path === currentPath
    );

  return {
    metadataBase: new URL('https://andrew-web.ru/'),
    title: currentPageMetadata?.attributes.seo?.metaTitle || metadata.title || "Андрей Коробка",
    creator: "Андрей Коробка",
    keywords: currentPageMetadata?.attributes.seo?.keywords || "",
    description:
      currentPageMetadata?.attributes.seo?.metaDescription ||
      metadata.description ||
      "",
    alternates: {
      canonical:
        currentPageMetadata?.attributes.seo?.canonicalURL ||
        `https://andrew-web.ru${currentPath}`,
    },
    openGraph: {
      images: [
        `${BACKEND_URL}${currentPageMetadata?.attributes.seo?.metaImage.data?.attributes.url}`,
      ],
      type: "website",
      locale: "ru",
      description:
        currentPageMetadata?.attributes.seo?.metaDescription ||
        metadata.description ||
        "",
      title:
        currentPageMetadata?.attributes.seo?.metaTitle ||
        metadata.title ||
        "",
      url:
        currentPageMetadata?.attributes.seo?.canonicalURL ||
        "https://andrew-web.ru/",
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const profile = await getProfile();
  const currentPath = headers().get("x-next-path-page");
  return (
    <html lang="ru">
      <Script async src="/ya.metrica.js" />
      <meta name="color-scheme" content="light dark" />
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-2004SZCNZX"
      />
      <Script async src="/ga-tag.js" />
      <SeoLinks />
      <body
        className={`${font.className} dark:bg-gray-900 px-2 md:px-6 animate__animated animate__fadeIn`}
      >
        <Header profile={profile.data.attributes.photo.data.attributes}/>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
