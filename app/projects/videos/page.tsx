import SectionTitle from "@/app/components/SectionTitle";

const videos = [
  {
    src: "/videos/v1.mp4",
    title: "Brand Promotional Video",
    description:
      "Designed and edited a high-impact promotional video focused on storytelling and brand identity.",
  },
  {
    src: "/videos/v2.mp4",
    title: "Marketing Campaign Video",
    description:
      "Created a visually engaging marketing video combining motion graphics and typography.",
  },

  // JUST ADD VIDEO PATH BELOW
  { src: "/videos/v3.mp4" },
  { src: "/videos/v4.mp4" },
  { src: "/videos/v5.mp4" },
  { src: "/videos/v6.mp4" },
  { src: "/videos/v7.mp4" },
  { src: "/videos/v8.mp4" },
  { src: "/videos/v9.mp4" },
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

              <div className="aspect-video bg-black">
                <video
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                  playsInline
                  controlsList="nodownload"
                >
                  <source src={video.src} type="video/mp4" />
                </video>
              </div>

              {video.title && (
                <div className="p-5">
                  <h3 className="text-xl font-semibold">
                    {video.title}
                  </h3>

                  <p className="text-gray-400 mt-2">
                    {video.description}
                  </p>
                </div>
              )}

            </div>
          ))}

        </div>

      </section>

    </main>
  );
}