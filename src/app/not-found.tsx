// Server Component ✅
import { Metadata } from "next";
import UniversalNotFoundMessage from "@/components/errors/UniversalNotFoundMessage";

export const metadata: Metadata = {
  title: "404 | Blog Not Found – oopsvincent",
  description:
    "Looks like you're lost in the cosmos of the web. No worries, the home galaxy awaits.",
};

export default function NotFoundPage() {
  return (
    <div className="mx-auto w-11/12 md:w-4/6 mt-20">
      <UniversalNotFoundMessage />
    </div>
  );
}
