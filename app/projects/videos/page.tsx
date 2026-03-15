import SectionTitle from "@/app/components/SectionTitle";

const videos = [
  {
    src: "public/videos/v1.mp4",
    title: "Brand Promotional Video",
    description:
      "Designed and edited a high-impact promotional video focused on storytelling and brand identity.",
  },
  {
    src: "public/videos/v2.mp4",
    title: "Marketing Campaign Video",
    description:
      "Created a visually engaging marketing video combining motion graphics and typography.",
  },
  {
    src: "public/videos/v5.mp4",
    title: "Creative Motion Graphics",
    description: "Dynamic motion graphics project showcasing animation techniques.",
  },
  {
    src: "public/videos/v6.mp4",
    title: "Product Showcase",
    description: "Product-focused promotional video with cinematic editing.",
  },
  {
    src: "public/videos/v7.mp4",
    title: "Social Media Ad",
    description: "Short-form social media advertisement with engaging visuals.",
  },
  {
    src: "public/videos/v8.mp4",
    title: "Explainer Video",
    description: "Animated explainer video designed for marketing campaigns.",
  },
  {
    src: "public/videos/v9.mp4",
    title: "Brand Story Video",
    description: "Story-driven video presenting brand values and identity.",
  },
];

export default function VideosPage() {
  return (
    <main className="bg-[#0B0F19] text-white min-h-screen">

      {/* HEADER */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-16 text-center">
        <SectionTitle
          title="Video Creations"
          subtitle="A showcase of promotional videos, motion graphics, and visual storytelling projects."
          center
        />
      </section>

      {/* VIDEO GRID */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {videos.map((video, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden border border-gray-800 hover:border-blue-500 transition"
            >

              {/* VIDEO */}
              <div className="aspect-video bg-black">
                <video
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                  playsInline
                  controlsList="nodownload"
                >
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* TITLE + DESCRIPTION */}
              <div className="p-5">
                <h3 className="text-xl font-semibold">
                  {video.title}
                </h3>

                <p className="text-gray-400 mt-2">
                  {video.description}
                </p>
              </div>

            </div>
          ))}

        </div>
      </section>

    </main>
  );
}