import Link from "next/link";
import { ArticleItem } from "@/types/articles";

interface Props {
    category: string
    articles: ArticleItem[]
}

const ArticleListItem = ({category, articles}: Props) => {
    return (
        <div className="flex flex-col gap-5">
            <h2 className="font-space-grotesk text-4xl">
                {category}
            </h2>
            <div className="flex flex-col gap-2.5 font-inter text-lg">
                {articles.map((article, id) => (
                    <Link
                    href={`/blog/${article.id}`}
                    key={id}
                    className="text-neutral-50 hover:text-[#D50] transition duration-150"
                    >
                        {article.title}
                    </Link>
                ))}

            </div>
        </div>
    )
}

export default ArticleListItem;