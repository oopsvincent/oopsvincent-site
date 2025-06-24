import { Metadata } from "next";
import BlogNotFoundMessage from "@/components/errors/BlogNotFoundMessages";

export const metadata: Metadata = {
  title: "Blog Not Found | oopsvincent",
  description: "The blog post you tried to access does not exist. But don't worry, there's more to explore.",
};

export default function BlogNotFoundPage() {
  return (
    <div className="mx-auto w-10/12 md:w-1/2 mt-20 font-inter">
      <BlogNotFoundMessage />
    </div>
  );
}
