import { getArticles } from "@/$api/getData";
import { type FC } from "react";
import { WorkCard } from "@/components/WorkCard";
import { BACKEND_URL } from "@/constant/back-route";

interface BlogPageProps {}

const BlogPage: FC<BlogPageProps> = async () => {
  const articles = await getArticles();
  return (
    <section className="work">
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
          Блог
        </h2>
        {/* <p className="mt-1 text-gray-600 dark:text-gray-400">
          Выбирай, что хочешь почитать сегодня
        </p> */}
      </div>
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.data.map((article) => (
          <WorkCard variant="blog" key={article.id} headline={article.attributes.title} description={article.attributes.seo.metaDescription || ""} link={`/blog/${article.attributes.slug}`} screenshot={`${BACKEND_URL}${article.attributes.seo.metaImage.data.attributes.formats.medium.url}`} tech={[]}/>
        ))}
      </ul>
    </section>
  );
};

export default BlogPage;
