import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  tech?: string[];
  link?: string;
}

export default function ProjectCard({
  title,
  category,
  image,
  tech,
  link,
}: ProjectCardProps) {
  return (
    <div className="group relative rounded-2xl overflow-hidden border border-gray-800 hover:border-blue-500 transition duration-500">

      {/* IMAGE */}
      <div className="relative h-[260px] sm:h-[300px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition duration-700"
        />
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90" />

      {/* CONTENT */}
      <div className="absolute bottom-0 p-6 w-full">

        <p className="text-blue-400 text-sm mb-1">
          {category}
        </p>

        <h3 className="text-xl font-semibold mb-3">
          {title}
        </h3>

        {/* TECH TAGS */}
        {tech && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tech.map((t) => (
              <span
                key={t}
                className="text-xs bg-white/10 px-2 py-1 rounded-md backdrop-blur"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {/* LINK */}
        {link && (
          <Link
            href={link}
            target="_blank"
            className="text-sm text-white underline hover:text-blue-400 transition"
          >
            View Project →
          </Link>
        )}
      </div>
    </div>
  );
}
