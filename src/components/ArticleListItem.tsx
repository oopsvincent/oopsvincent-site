import Link from "next/link";
import { ArticleItem } from "@/types/articles";

interface Props {
  category: string;
  articles: ArticleItem[];
}

const ArticleListItem = ({ category, articles }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      {/* Category Title */}
      <h2 className="font-space-grotesk text-3xl md:text-4xl font-semibold text-[#D45000] capitalize">
        {category}
      </h2>

      {/* Article Links */}
      <div className="flex flex-col gap-3 font-inter text-base md:text-lg">
        {articles.map((article, id) => (
          <Link
            href={`/blog/${article.id}`}
            key={id}
            className="text-foreground hover:text-[#D45000] transition duration-200 hover:underline underline-offset-2"
          >
            {article.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ArticleListItem;
