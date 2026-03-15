import SectionTitle from "@/app/components/SectionTitle";

const videos = [
  {
    src: "https://res.cloudinary.com/dtmufusgb/video/upload/v1773591463/v1_kevvj3.mp4",
    title: "Featured Video Project",
    description: "A professional video project showcasing expertise in visual storytelling, editing, and dynamic media creation.",
  },
  {
    src: "https://res.cloudinary.com/dtmufusgb/video/upload/v1773591484/v2_vl1cgt.mp4",
    title: "Featured Video Project",
    description: "A professional video project showcasing expertise in visual storytelling, editing, and dynamic media creation.",
  },
  {
    src: "https://res.cloudinary.com/dtmufusgb/video/upload/v1773591475/v5_zblh0s.mp4",
    title: "Featured Video Project",
    description: "A professional video project showcasing expertise in visual storytelling, editing, and dynamic media creation.",
  },
  {
    src: "https://res.cloudinary.com/dtmufusgb/video/upload/v1773591531/v7_u90buy.mp4",
    title: "Featured Video Project",
    description: "A professional video project showcasing expertise in visual storytelling, editing, and dynamic media creation.",
  },
  {
    src: "https://res.cloudinary.com/dtmufusgb/video/upload/v1773591543/v6_awhtxj.mp4",
    title: "Featured Video Project",
    description: "A professional video project showcasing expertise in visual storytelling, editing, and dynamic media creation.",
  },
  {
    src: "https://res.cloudinary.com/dtmufusgb/video/upload/v1773591547/v8_jcmm8h.mp4",
    title: "Featured Video Project",
    description: "A professional video project showcasing expertise in visual storytelling, editing, and dynamic media creation.",
  },
  {
    src: "https://res.cloudinary.com/dtmufusgb/video/upload/v1773591534/v9_d0hyqw.mp4",
    title: "Featured Video Project",
    description: "A professional video project showcasing expertise in visual storytelling, editing, and dynamic media creation.",
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
                  {/* The source now pulls directly from the cloud! */}
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