import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#0B0F19] text-white overflow-hidden">

      {/* Background glow */}
      <div className="absolute w-[500px] h-[500px] bg-blue-600/20 blur-[160px] top-[-120px] left-[-120px]" />
      <div className="absolute w-[400px] h-[400px] bg-purple-600/20 blur-[160px] bottom-[-120px] right-[-120px]" />

      <div className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* IMAGE (mobile first) */}
        <div className="flex justify-center order-1 lg:order-2">

          <div className="relative">

            {/* Glow behind image */}
            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full scale-110"></div>

            {/* Profile Image */}
            <div className="relative w-[320px] h-[320px] sm:w-[280px] sm:h-[280px] lg:w-[320px] lg:h-[320px] rounded-full overflow-hidden shadow-2xl">
              <Image
                src="/profile.jpg"
                alt="Sravan Kumar"
                fill
                className="object-cover"
                priority
              />
            </div>

          </div>

        </div>

        {/* TEXT */}
        <div className="text-center lg:text-left order-2 lg:order-1">

          <p className="text-blue-400 tracking-[0.25em] mb-5 text-sm font-medium">
            FULL STACK DEVELOPER • GRAPHIC DESIGNER
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Sravan Kumar <br />
            <span className="text-blue-400">Yandapalli</span>
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            I craft visually stunning and user-focused digital experiences —
            blending design creativity with modern development to build
            products that stand out.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start">

            <Link href="/projects">
              <button className="bg-blue-500 hover:bg-blue-600 px-7 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-blue-500/20 hover:scale-105">
                View Projects
              </button>
            </Link>

            <Link href="/contact">
              <button className="border border-gray-700 hover:border-blue-400 px-7 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-blue-500/10">
                Contact Me
              </button>
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}