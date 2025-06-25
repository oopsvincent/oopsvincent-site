import Image from "next/image";
import Link from "next/link";
import { ExternalLinkIcon } from "lucide-react";

interface ProjectCardProps {
  title: string;
  cover_url?: string;
  description: string;
  url: string;
}

const fallbackImage = "/images/fallback.png"; // fallback for broken/empty thumbnails

const ProjectCard = ({ title, cover_url, description, url }: ProjectCardProps) => {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 bg-card hover:bg-accent"
    >
      <div className="w-full aspect-video relative">
        <Image
          src={cover_url || fallbackImage}
          alt={`${title} thumbnail`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-4 font-inter flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold group-hover:text-primary font-space-grotesk text-[#d45000] transition-colors duration-200">
            {title}
          </h3>
          <ExternalLinkIcon size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>

      {/* Optional subtle hover effect */}
      <span className="absolute inset-0 ring-0 group-hover:ring-2 group-hover:ring-primary/30 transition-all duration-300 rounded-xl" />
    </Link>
  );
};

export default ProjectCard;
