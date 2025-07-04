// src/app/blog/[slug]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeftIcon } from "lucide-react";
import { getArticlesData } from "@/lib/blog";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Article({ params }: Props) {
  const { slug } = await params;
  
  let articleData;
  
  try {
    articleData = await getArticlesData(slug);
  } catch (error) {
    // If the article doesn't exist, trigger the not-found page
    notFound();
    console.log(error);
  }

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