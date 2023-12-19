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

const font = Montserrat({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Портфолио | Коробка Андрей",
  description: "Список всех мной реализованных проектов",
  themeColor: "#1F2937",
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
  const currentPageMetadata = pages.data.find((_) => _.attributes.path === currentPath);
  // const previousImages = (await parent).openGraph?.images || []

  return {
    title: currentPageMetadata?.attributes.seo[0].metaTitle || metadata.title,
    colorScheme: "light dark",
    creator: "Андрей Коробка",
    keywords: currentPageMetadata?.attributes.seo[0].keywords,
    description:
      currentPageMetadata?.attributes.seo[0].metaDescription ||
      metadata.description ||
      "",
    alternates: {
      canonical:
        currentPageMetadata?.attributes.seo[0].canonicalURL ||
        "https://andrew-web.ru/",
    },
    openGraph: {
      // images: [currentPageMetadata?.attributes.seo[0]],
      type: "website",
      locale: "ru",
      description:
        currentPageMetadata?.attributes.seo[0].metaDescription ||
        metadata.description ||
        "",
      title:
        currentPageMetadata?.attributes.seo[0].metaTitle ||
        metadata.title ||
        "",
      url:
        currentPageMetadata?.attributes.seo[0].canonicalURL ||
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

  return (
    <html lang="ru">
      <Script src="/ya.metrica.js" />
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-2004SZCNZX"
      />
      <Script src="/ga-tag.js" />
      <SeoLinks />
      <body
        className={`${font.className} dark:bg-gray-900 px-2 md:px-6 animate__animated animate__fadeIn`}
      >
        <Header profile={profile.data.attributes.photo.data.attributes} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
