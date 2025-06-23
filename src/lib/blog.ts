import fs from "fs";
import matter from "gray-matter";
import path from "path";
import moment from "moment";
import { remark } from "remark";
import html from "remark-html";
import { ArticleItem } from "@/types/articles";
// import { title } from "process";

const articlesDirectory = path.join(process.cwd(), "src", "content");

const getSortedArticle = (): ArticleItem[] => {
    const fileNames = fs.readdirSync(articlesDirectory)

    const allArticlesData = fileNames.map((fileName) => {
        const id = fileName.replace(/\.mdx$/, "")

        const fullPath = path.join(articlesDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, "utf-8")

        const matterResult = matter(fileContents)

        return {
            id,
            title: matterResult.data.title,
            date: matterResult.data.date,
            category: matterResult.data.category,
        }
    })

    return allArticlesData.sort((a, b) => {
        const format = "MM-DD-YYYY"
        const dateOne = moment(a.date, format)
        const dateTwo = moment(b.date, format)

        if (dateOne.isBefore(dateTwo)) {
            return -1
        } else if (dateTwo.isAfter(dateOne)) {
            return 1
        } else {
            return 0
        }
    })
}

export const getCategorisedArticles = (): Record<string, ArticleItem[]> => {
    const sortedArticles = getSortedArticle()
    const catergorisedArticles: Record<string, ArticleItem[]> = {}

    sortedArticles.forEach((article) => {
        if (!catergorisedArticles[article.category]) {
            catergorisedArticles[article.category] = []
        }
        catergorisedArticles[article.category].push(article)
    })

    return catergorisedArticles;
}

export const getArticlesData = async (id: string) => {
    const fullPath = path.join(articlesDirectory, `${id}.mdx`);

    const fileContents = fs.readFileSync(fullPath, "utf-8");

    const matterResult = matter(fileContents)

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content)

    const contentHTML = processedContent.toString()

    return{
        id,
        contentHTML,
        title: matterResult.data.title,
        date: moment(matterResult.data.date).format("MMMM DD, YYYY"),
        category: matterResult.data.category,
    }

}