import ProjectCard from "@/app/components/ProjectCard";
import SectionTitle from "@/app/components/SectionTitle";

export default function AppsPage() {
  return (
    <main className="bg-[#0B0F19] text-white min-h-screen">

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-16 text-center">
        <SectionTitle
          title="Mobile Applications"
          subtitle="A selection of mobile apps I have designed and developed with a focus on usability, performance, and modern user experience."
          center
        />
      </section>

      {/* APPS GRID */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <ProjectCard
            title="AI Counting App"
            category="Android Development"
            image="/apps/app1.webp"
            tech={["Kotlin", "Firebase", "Material UI"]}
            link="https://play.google.com/store/apps/details?id=com.hari_shrimp.bayline&pcampaignid=web_share"
          />

        </div>
      </section>

    </main>
  );
}
