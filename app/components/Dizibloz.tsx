import React from "react";
import { Code2, Palette, Video, Layout, Megaphone } from "lucide-react";

export default function DiziblozShowcaseSection() {
  return (
    <section className="w-full bg-gradient-to-b from-black via-slate-900 to-blue-950 text-white py-28">
      <div className="max-w-6xl mx-auto px-6">

        {/* SECTION HEADER */}
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm tracking-wider uppercase mb-3">
            Dizibloz Studio
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Design. Development. Digital Growth.
          </h2>

          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            We help businesses build modern digital presence through creative
            design, high‑performance websites and impactful promotional
            content.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <ServiceCard
            icon={<Layout size={28} />}
            title="UI / UX Design"
            desc="Modern interface design for websites and mobile applications focused on usability and visual clarity." 
          />

          <ServiceCard
            icon={<Palette size={28} />}
            title="Brand & Graphic Design"
            desc="Posters, banners, pamphlets and marketing creatives designed for social media and promotions." 
          />

          <ServiceCard
            icon={<Video size={28} />}
            title="Video Editing"
            desc="Promotional videos, reels and advertisement edits for brand marketing and campaigns." 
          />

          <ServiceCard
            icon={<Code2 size={28} />}
            title="Web Development"
            desc="Fast and scalable websites built using modern technologies like Next.js, React and TypeScript." 
          />

          <ServiceCard
            icon={<Megaphone size={28} />}
            title="Digital Marketing"
            desc="Content strategy and brand promotion through Instagram, YouTube and online platforms." 
          />

          <ServiceCard
            icon={<Code2 size={28} />}
            title="Business Websites"
            desc="Professional websites for startups, studios and local businesses with SEO‑ready structure." 
          />
        </div>

        {/* TEAM HIGHLIGHT */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* SARANYA */}
          <div className="bg-gradient-to-br from-slate-900 to-blue-900 p-10 rounded-2xl border border-blue-800">
            <p className="text-blue-400 text-sm mb-2">Creative Designer</p>
            <h3 className="text-2xl font-semibold">Saranya Sunkaranam</h3>

            <p className="text-gray-300 mt-4 leading-relaxed">
              Focused on creating engaging digital experiences and visual
              content that strengthens brand identity.
            </p>

            <ul className="mt-6 space-y-2 text-gray-300 text-sm">
              <li>• UI / UX Design for Web & Mobile Apps</li>
              <li>• Posters, Banners & Marketing Graphics</li>
              <li>• Brand Visual Identity</li>
              <li>• Social Media Design Assets</li>
              <li>• Creative Layout & Visual Concepts</li>
            </ul>
          </div>

          {/* YOU */}
          <div className="bg-gradient-to-br from-slate-900 to-blue-900 p-10 rounded-2xl border border-blue-800">
            <p className="text-blue-400 text-sm mb-2">Developer & Creator</p>
            <h3 className="text-2xl font-semibold">Sravan Kumar Yandapalli</h3>

            <p className="text-gray-300 mt-4 leading-relaxed">
              Builds digital products and marketing assets combining
              development, design and promotional content creation.
            </p>

            <ul className="mt-6 space-y-2 text-gray-300 text-sm">
              <li>• Full Stack Web Development</li>
              <li>• Next.js / React Applications</li>
              <li>• Website UI Implementation</li>
              <li>• Promotional Video Editing</li>
              <li>• Posters & Marketing Creatives</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}

function ServiceCard({ icon, title, desc }: any) {
  return (
    <div className="bg-slate-900 border border-slate-800 p-8 rounded-xl hover:border-blue-500 transition">
      <div className="text-blue-400 mb-4">{icon}</div>
      <h4 className="font-semibold text-lg mb-2">{title}</h4>
      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
