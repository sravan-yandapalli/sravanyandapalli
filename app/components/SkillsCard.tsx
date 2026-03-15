interface SkillsCardProps {
  title: string;
  skills: string[];
}

export default function SkillsCard({ title, skills }: SkillsCardProps) {
  return (
    <div className="
      bg-[#111827]
      border border-gray-800
      rounded-2xl
      p-6
      hover:border-blue-500
      hover:-translate-y-2
      transition-all
      duration-300
    ">
      
      {/* TITLE */}
      <h3 className="text-xl font-semibold mb-5">
        {title}
      </h3>

      {/* SKILLS */}
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="
              text-sm
              bg-white/5
              border border-gray-700
              px-3 py-1
              rounded-lg
              hover:border-blue-400
              transition
            "
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
