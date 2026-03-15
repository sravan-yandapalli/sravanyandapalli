import ProjectCard from "@/app/components/ProjectCard";
import SectionTitle from "@/app/components/SectionTitle";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="bg-[#0B0F19] text-white min-h-screen">

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 pt-28 pb-20 text-center">
        <SectionTitle
          title="Our Projects"
          subtitle="A curated collection of our design and development work — combining creativity, technical expertise, and user-focused digital solutions."
          center
        />
      </section>

      {/* ================= WEBSITES ================= */}

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <SectionTitle title="Websites & Web Applications" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          <ProjectCard
            title="Travels Website"
            category="Web Development"
            image="/websites/site1.png"
            tech={["Next.js", "Tailwind", "MySQL"]}
            link="https://www.cartravelsongole.in/"
          />

          <ProjectCard
            title="Hair Studio Website"
            category="Full Stack Development"
            image="/websites/site2.png"
            tech={["React", "Tailwind"]}
            link="https://newmvhairstudio.in/"
          />

          {/* VIEW ALL CARD */}
          <Link href="/projects/websites">
            <div className="flex items-center justify-center h-[260px] rounded-2xl border border-dashed border-gray-700 hover:border-blue-500 hover:bg-[#121826] transition cursor-pointer group">
              <p className="text-gray-400 group-hover:text-blue-400 text-lg transition">
                View All Websites →
              </p>
            </div>
          </Link>

        </div>
      </section>

      {/* ================= POSTERS ================= */}

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <SectionTitle title="Poster & Graphic Designs" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          <ProjectCard
            title="Play School Poster"
            category="Marketing Design"
            image="/posters/poster3.webp"
            tech={["Photoshop"]}
             link="/projects/posters"
          />

          <ProjectCard
            title="Doctor Prescription Design"
            category="Branding Design"
            image="/posters/poster4.webp"
            tech={["Illustrator"]}
             link="/projects/posters"
          />

          {/* VIEW ALL */}
          <Link href="/projects/posters">
            <div className="flex items-center justify-center h-[260px] rounded-2xl border border-dashed border-gray-700 hover:border-blue-500 hover:bg-[#121826] transition cursor-pointer group">
              <p className="text-gray-400 group-hover:text-blue-400 text-lg transition">
                View All Designs →
              </p>
            </div>
          </Link>

        </div>
      </section>

      {/* ================= APPS ================= */}

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <SectionTitle title="Mobile Applications" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          <ProjectCard
            title="AI Counting App"
            category="Android Development"
            image="/apps/app1.webp"
            tech={["Kotlin", "Firebase", "Material UI"]}
            link="https://play.google.com/store/apps/details?id=com.hari_shrimp.bayline&pcampaignid=web_share"
          />

          <Link href="/projects/apps">
            <div className="flex items-center justify-center h-[260px] rounded-2xl border border-dashed border-gray-700 hover:border-blue-500 hover:bg-[#121826] transition cursor-pointer group">
              <p className="text-gray-400 group-hover:text-blue-400 text-lg transition">
                Explore Mobile Apps →
              </p>
            </div>
          </Link>

        </div>
      </section>

      {/* ================= VIDEOS ================= */}

      <section className="max-w-6xl mx-auto px-6 pb-32">
        <SectionTitle title="Video Creations" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          <ProjectCard
            title="Brand Promotional Video"
            category="Video Editing"
            image="/videos/image.png"
            tech={["After Effects", "Premiere Pro"]}
            link="/projects/videos"
          />

          <Link href="/projects/videos">
            <div className="flex items-center justify-center h-[260px] rounded-2xl border border-dashed border-gray-700 hover:border-blue-500 hover:bg-[#121826] transition cursor-pointer group">
              <p className="text-gray-400 group-hover:text-blue-400 text-lg transition">
                Watch More Videos →
              </p>
            </div>
          </Link>

        </div>
      </section>

    </main>
  );
}