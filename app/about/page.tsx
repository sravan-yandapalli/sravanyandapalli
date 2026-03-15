import Image from "next/image";
import SkillsCard from "../components/SkillsCard";

export default function AboutPage() {
  return (
    <main className="bg-[#0B0F19] text-white">

      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        
        <div>
          <p className="text-blue-400 mb-3 tracking-widest">ABOUT US</p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Creative Developers & Designers
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed">
            We are a team of Full Stack Developers and Graphic Designers with
            professional experience creating visually engaging and user-focused
            digital products. We specialize in blending creativity with
            technology to craft meaningful digital experiences across web and
            mobile platforms.
          </p>
        </div>
      </section>

      {/* TEAM PHOTOS */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-2 gap-6">

          {/* Sravan */}
          <div className="relative w-full h-[260px] md:h-[520px] rounded-3xl overflow-hidden border border-gray-800">
            <Image
              src="/sravan-yendapalli.png"
              alt="Sravan Kumar Yandapalli"
              fill
              className="object-cover"
            />
          </div>

          {/* Saranya */}
          <div className="relative w-full h-[260px] md:h-[520px] rounded-3xl overflow-hidden border border-gray-800">
            <Image
              src="/saranya-sunkaranam.png"
              alt="Saranya Sunkaranam"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          
          <div>
            <h2 className="text-3xl font-bold text-blue-400">1.5+</h2>
            <p className="text-gray-400 mt-2">Years Experience</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-blue-400">80+</h2>
            <p className="text-gray-400 mt-2">Designs Created</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-blue-400">20+</h2>
            <p className="text-gray-400 mt-2">Clients Served</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-blue-400">10+</h2>
            <p className="text-gray-400 mt-2">Websites Built</p>
          </div>

        </div>
      </section>

      {/* JOURNEY */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl font-bold mb-6">Our Journey</h2>

        <p className="text-gray-400 leading-relaxed text-lg">
          Our journey started with a strong passion for design and technology.
          Over time, we developed expertise in both UI/UX design and full stack
          development, allowing us to transform ideas into visually compelling
          and functional digital experiences.
          <br /><br />
          We work on designing and developing user-focused interfaces that
          enhance engagement and usability. Alongside professional work,
          we collaborate with clients as freelancers, creating websites,
          branding materials, posters, and promotional videos that help
          businesses grow their digital presence.
        </p>
      </section>

      {/* SKILLS */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold text-center mb-16">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <SkillsCard
            title="Programming Languages"
            skills={[
              "JavaScript",
              "TypeScript",
              "Kotlin",
              "Java",
              "C",
              "HTML",
              "CSS",
              "SQL",
            ]}
          />

          <SkillsCard
            title="Frameworks & Libraries"
            skills={[
              "Next.js",
              "React.js",
              "Node.js",
              "Tailwind CSS",
            ]}
          />

          <SkillsCard
            title="Cloud & Databases"
            skills={[
              "AWS (EC2, S3, Lambda)",
              "DynamoDB",
              "MySQL",
            ]}
          />

          <SkillsCard
            title="Tools & DevOps"
            skills={[
              "Git",
              "Docker",
              "Postman",
            ]}
          />

          <SkillsCard
            title="Design & UI/UX"
            skills={[
              "Figma (Wireframes, UI, Prototypes)",
              "Adobe Photoshop",
              "Adobe Illustrator",
              "Premiere Pro",
              "Canva",
            ]}
          />

        </div>
      </section>

      {/* WHAT SETS US APART */}
      <section className="bg-[#111827] py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          
          <h2 className="text-3xl font-bold mb-6">
            What Sets Us Apart
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">
            We bring a powerful combination of design creativity and technical
            development skills. This allows us to not only design beautiful
            interfaces but also build them efficiently. Our focus is always
            on delivering experiences that are visually appealing,
            user-friendly, and highly functional.
          </p>

        </div>
      </section>

    </main>
  );
}