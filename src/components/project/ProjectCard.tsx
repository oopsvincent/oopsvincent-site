import Image from "next/image";

interface ProjectCardProps {
  title: string;
  cover_url?: string; // cover_url might be optional!
  description: string;
}

const ProjectCard = ({ title, cover_url, description }: ProjectCardProps) => {
  const fallbackImage = "/images/fallback.png"; // store this in your public/images folder

  return (
    <div className="group border border-border rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300">
      <div className="w-full aspect-video relative">
        {cover_url ? (
          <Image
            src={cover_url}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <Image
            src={fallbackImage}
            alt="Fallback thumbnail"
            fill
            className="object-cover opacity-50"
          />
        )}
      </div>
      <div className="p-4 font-inter">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
