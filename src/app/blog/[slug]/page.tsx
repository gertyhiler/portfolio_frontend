import { getArticle, getArticles } from "@/$api/getData";
import MDX from "@/components/MDX";
import { type FC } from "react";
import { serialize } from "next-mdx-remote/serialize";
import { Metadata, ResolvingMetadata } from "next";
import { BACKEND_URL } from "@/constant/back-route";
import Image from "next/image";
import Link from "next/link";
import remarkGfm from "remark-gfm";

interface ArticlePageProps {
  params: {
    slug: string;
  };
  searchParams: {} | string | string[];
}

export async function generateMetadata(
  props: ArticlePageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const {
    data: { attributes },
  } = await getArticle(props.params.slug);

  const { seo } = attributes;
  const parentMetadata = await parent;
  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    keywords: seo.keywords,
    openGraph: {
      title: seo.metaTitle || undefined,
      description: seo.metaDescription || undefined,
      modifiedTime: attributes.updatedAt,
      type: "article",
      images: [`${BACKEND_URL}${seo.metaImage.data.attributes.url}`],
    },
  };
}

export async function getStaticPaths() {
  const articles = await getArticles();
  return {
    paths: articles.data.map((article) => `/blog/${article.attributes.slug}`),
    fallback: true,
  };
}

const ArticlePage: FC<ArticlePageProps> = async ({ params: { slug } }) => {
  const article = await getArticle(slug);
  const mdxSource = await serialize(article.data.attributes.content, {
    parseFrontmatter: true,
    mdxOptions: {
      remarkPlugins: [remarkGfm]
    }
  });

  return (
    <>
    <section className="max-w-screen-md mx-auto py-20 px-5 sm:px-0">
      {article.data.attributes.seo.metaImage !== null ? (
        <div className="flex-shrink-0 relative w-full rounded-xl overflow-hidden h-[350px] before:absolute before:inset-x-0 before:w-full before:h-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]">
          <Image
            className="w-full h-full absolute top-0 start-0 object-cover"
            src={`${BACKEND_URL}${article.data.attributes.seo.metaImage.data.attributes.formats.large.url}`}
            width={
              article.data.attributes.seo.metaImage.data.attributes.formats
                .large.width
            }
            height={
              article.data.attributes.seo.metaImage.data.attributes.formats
                .large.height
            }
            alt={
              article.data.attributes.seo.metaImage.data.attributes
                .alternativeText || "изображение в блоге"
            }
          />
          <Link href={"/blog"} className="absolute top-4 left-4 p-2 cursor-pointer z-10 border-white flex items-center justify-center">
            <svg
              className="w-6 h-6 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 8 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
              />
            </svg>
          </Link>
          <div className="absolute bottom-0 inset-x-0 z-10">
            <div className="flex flex-col h-full p-4 sm:p-6">
              <h1 className="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/[.8]">
                {article.data.attributes.title}
              </h1>
              <p className="mt-2 text-white/[.8]">
                {article.data.attributes.seo.metaDescription}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <>
          <h1 className="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/[.8]">
            {article.data.attributes.title}
          </h1>
          <p className="mt-2 text-white/[.8]">
            {article.data.attributes.seo.metaDescription}
          </p>
        </>
      )}
      <article className="prose md:prose-lg lg:prose-xl dark:prose-invert mt-5">
        <MDX source={mdxSource} />
      </article>
    </section>
    <hr />
    </>
  );
};

export default ArticlePage;
