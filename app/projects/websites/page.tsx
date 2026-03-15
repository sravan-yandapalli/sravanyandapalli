"use client";

import { useState } from "react";
import Image from "next/image";
import ProjectCard from "@/app/components/ProjectCard";
import SectionTitle from "@/app/components/SectionTitle";

const websites = [
  {
    image: "/websites/site1.png",
    title: "Travels Business Website",
    link: "https://www.cartravelsongole.in/",
  },
  {
    image: "/websites/site2.png",
    title: "Studio Business Website",
    link: "https://newmvhairstudio.in/",
  },

  // Remaining projects (image preview only)
  { image: "/websites/site3.png" },
  { image: "/websites/site4.png" },
  { image: "/websites/site5.png" },
];

export default function WebsitesPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="bg-[#0B0F19] text-white min-h-screen">

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-16 text-center">
        <SectionTitle
          title="Web Development Projects"
          subtitle="A collection of modern responsive websites focused on performance and clean user experience."
          center
        />
      </section>

      {/* GRID */}
      <section className="max-w-6xl mx-auto px-6 pb-24">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {websites.map((project, index) =>
            project.link ? (
              <ProjectCard
                key={index}
                title={project.title}
                category="Web Development"
                image={project.image}
                tech={["Next.js", "Tailwind"]}
                link={project.link}
              />
            ) : (
              <div
                key={index}
                onClick={() => setSelectedImage(project.image)}
                className="cursor-pointer rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500 transition"
              >
                <Image
                  src={project.image}
                  alt="Project Preview"
                  width={600}
                  height={400}
                  className="w-full h-[260px] object-cover"
                />
              </div>
            )
          )}

        </div>
      </section>

      {/* IMAGE MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full">
            <Image
              src={selectedImage}
              alt="Project Preview"
              width={1200}
              height={800}
              className="rounded-xl w-full h-auto"
            />
          </div>
        </div>
      )}

    </main>
  );
}