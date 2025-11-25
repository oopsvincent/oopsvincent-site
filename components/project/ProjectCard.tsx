// components/project/ProjectCard.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { ExternalLinkIcon, Play, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  cover_url?: string;
  description: string;
  url: string;
  index: number;
}

const fallbackImage = "/images/fallback.png";

const ProjectCard = ({ title, cover_url, description, url, index }: ProjectCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative"
    >
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="relative rounded-2xl overflow-hidden bg-card border border-border/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10">
          
          {/* Image Container */}
          <div className="relative w-full aspect-[4/3] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
            
            <Image
              src={cover_url || fallbackImage}
              alt={`${title} thumbnail`}
              fill
              className={`object-cover transition-all duration-700 ${
                isHovered ? 'scale-110' : 'scale-100'
              } ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              onLoad={() => setImageLoaded(true)}
            />
            
            {/* Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`} />
            
            {/* Play Button */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: isHovered ? 1 : 0, 
                opacity: isHovered ? 1 : 0 
              }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                <Play size={20} className="text-white ml-1" fill="currentColor" />
              </div>
            </motion.div>

            {/* Status Badge */}
            <div className="absolute top-4 left-4">
              <div className="flex items-center gap-1 px-3 py-1 bg-black/20 backdrop-blur-md rounded-full border border-white/20">
                <Star size={12} className="text-yellow-400" fill="currentColor" />
                <span className="text-white text-xs font-medium">Featured</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-bold font-space-grotesk text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                {title}
              </h3>
              
              <motion.div
                animate={{ 
                  rotate: isHovered ? 45 : 0,
                  scale: isHovered ? 1.1 : 1
                }}
                transition={{ duration: 0.2 }}
                className="flex-shrink-0 w-8 h-8 bg-muted/50 rounded-full flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300"
              >
                <ExternalLinkIcon size={14} className="text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </motion.div>
            </div>
            
            <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
              {description}
            </p>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                Interactive
              </span>
              <span className="px-2 py-1 bg-accent/10 text-accent-foreground text-xs rounded-full font-medium">
                Creative
              </span>
            </div>
          </div>

          {/* Hover Glow Effect */}
          <div className={`absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl transition-opacity duration-300 pointer-events-none ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`} />
          
          {/* Border Glow */}
          <div className={`absolute inset-0 rounded-2xl transition-all duration-300 pointer-events-none ${
            isHovered ? 'ring-2 ring-primary/20 ring-offset-2 ring-offset-background' : ''
          }`} />
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;