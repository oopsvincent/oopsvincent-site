import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";
import { getArticlesData } from "@/lib/blog";

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export default async function Article({ params }: ArticlePageProps) {
  const articleData = await getArticlesData(params.slug);

  return (
    <section className="mx-auto w-10/12 md:w-1/2 mt-20 flex flex-col gap-5">
      <div className="flex justify-between font-inter">
        <Link href="/blog" className="flex flex-row gap-1 place-items-center">
          <ArrowLeftIcon size={20} />
          <p>Back to Blogs</p>
        </Link>
        <p>{articleData.date.toString()}</p>
      </div>
      <article
        className="article"
        dangerouslySetInnerHTML={{ __html: articleData.contentHTML }}
      />
    </section>
  );
}
