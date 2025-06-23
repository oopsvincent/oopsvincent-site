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

    console.log(articles);
    

  return (
    <main className="min-h-screen px-5 md:px-20 py-10">
      <h1 className="text-4xl font-bold font-space-grotesk mb-6">Blog</h1>
      <p className="text-gray-400 max-w-xl mb-10">
        Here you’ll find reflections, tutorials, devlogs, and explorations—documenting a journey of building games and growing as a creator.
      </p>

      {/* Placeholder for future blog posts */}
      <div className="flex flex-wrap gap-10">
        {articles != null && Object.keys(articles).map((article) => (
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
