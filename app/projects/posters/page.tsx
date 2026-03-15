"use client";

import { useState } from "react";
import Image from "next/image";
import SectionTitle from "@/app/components/SectionTitle";

const posters = [
  "/posters/poster1.jpg",
  "/posters/poster2.jpg",
  "/posters/poster3.png",
  "/posters/poster4.png",
  "/posters/poster5.png",
  "/posters/poster6.png",
  "/posters/poster7.png",
];

export default function PostersPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="bg-[#0B0F19] text-white min-h-screen">

      {/* HEADER */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-16 text-center">
        <SectionTitle
          title="Poster Designs"
          subtitle="A curated collection of marketing and branding posters crafted to capture attention and communicate visually."
          center
        />
      </section>

      {/* POSTER GRID */}
      <section className="max-w-6xl mx-auto px-6 pb-24">

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

          {posters.map((poster, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(poster)}
              className="cursor-pointer rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500 transition"
            >
              <Image
                src={poster}
                alt="Poster Design"
                width={600}
                height={800}
                className="w-full h-[260px] object-cover"
              />
            </div>
          ))}

        </div>

      </section>

      {/* IMAGE MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl w-full">
            <Image
              src={selectedImage}
              alt="Poster Preview"
              width={1200}
              height={1600}
              className="rounded-xl w-full h-auto"
            />
          </div>
        </div>
      )}

    </main>
  );
}