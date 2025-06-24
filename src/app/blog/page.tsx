// app/blog/page.tsx
import { getCategorisedArticles } from "@/lib/blog";
import { Metadata } from "next";

import ArticleListItem from "@/components/ArticleListItem";

export const metadata: Metadata = {
  title: "Blog | oopsvincent",
  description: "Read thoughts, insights, and development stories from Vincent.",
};

export default function BlogPage() {
    const articles = getCategorisedArticles()

    // console.log(articles);
    

  return (
    <main className="min-h-screen px-5 md:px-20 py-14">
  <h1 className="text-5xl md:text-6xl font-bold font-space-grotesk mb-6 tracking-tight leading-tight">
    Blog
  </h1>
  <p className="text-gray-500 text-base md:text-lg max-w-2xl mb-12 leading-relaxed">
    Here you’ll find reflections, tutorials, devlogs, and explorations—documenting a journey of building games and growing as a creator.
  </p>

  <div className="flex flex-col gap-16">
    {articles != null &&
      Object.keys(articles).map((article) => (
        <ArticleListItem
          category={article}
          articles={articles[article]}
          key={article}
        />
      ))}
  </div>
</main>

  );
}
