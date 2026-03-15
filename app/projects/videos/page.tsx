import SectionTitle from "@/app/components/SectionTitle";

export default function VideosPage() {
  return (
    <main className="bg-[#0B0F19] text-white min-h-screen">
      
      {/* HEADER */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-16 text-center">
        <SectionTitle
          title="Video Creations"
          subtitle="A showcase of promotional videos, motion graphics, and visual storytelling projects crafted to engage audiences and elevate brand presence."
          center
        />
      </section>

      {/* VIDEOS GRID */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 gap-10">

          {/* VIDEO 1 */}
          <div className="rounded-2xl overflow-hidden border border-gray-800 hover:border-blue-500 transition">
            <div className="aspect-video bg-black">
              <video
                className="w-full h-full object-cover"
                controls
                preload="metadata"
                playsInline
                controlsList="nodownload"
              >
                <source src="/videos/v1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="p-5">
              <h3 className="text-xl font-semibold">
                Brand Promotional Video
              </h3>
              <p className="text-gray-400 mt-2">
                Designed and edited a high-impact promotional video focused on storytelling, smooth transitions, and brand identity.
              </p>
            </div>
          </div>

          {/* VIDEO 2 */}
          <div className="rounded-2xl overflow-hidden border border-gray-800 hover:border-blue-500 transition">
            <div className="aspect-video bg-black">
              <video
                className="w-full h-full object-cover"
                controls
                preload="metadata"
                playsInline
                controlsList="nodownload"
              >
                <source src="/videos/v2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="p-5">
              <h3 className="text-xl font-semibold">
                Marketing Campaign Video
              </h3>
              <p className="text-gray-400 mt-2">
                Created a visually engaging marketing video combining motion graphics, typography, and audio synchronization.
              </p>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}