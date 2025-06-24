import fs from "fs";
import matter from "gray-matter";
import path from "path";
import moment from "moment";
import { remark } from "remark";
import html from "remark-html";
import { ArticleItem } from "@/types/articles";

const articlesDirectory = path.join(process.cwd(), "src", "content");

const getSortedArticle = (): ArticleItem[] => {
  const fileNames = fs.readdirSync(articlesDirectory);

  const allArticlesData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.mdx$/, "");

    const fullPath = path.join(articlesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf-8");

    const matterResult = matter(fileContents);

    return {
      id,
      title: matterResult.data.title,
      date: new Date(matterResult.data.date), // convert to actual Date object
      category: matterResult.data.category,
    };
  });

  return allArticlesData.sort((a, b) => b.date.getTime() - a.date.getTime()); // newest first
};

export const getCategorisedArticles = (): Record<string, ArticleItem[]> => {
  const sortedArticles = getSortedArticle();
  const categorisedArticles: Record<string, ArticleItem[]> = {};

  sortedArticles.forEach((article) => {
    if (!categorisedArticles[article.category]) {
      categorisedArticles[article.category] = [];
    }
    categorisedArticles[article.category].push(article);
  });

  return categorisedArticles;
};

export const getArticlesData = async (id: string) => {
  const fullPath = path.join(articlesDirectory, `${id}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf-8");

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const contentHTML = processedContent.toString();

  return {
    id,
    contentHTML,
    title: matterResult.data.title,
    date: moment(matterResult.data.date).format("MMMM D, YYYY"), // display format
    category: matterResult.data.category,
  };
};
