import SectionTitle from "@/app/components/SectionTitle";
import { Mail, Phone, Linkedin } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-[#0B0F19] text-white min-h-screen">

      {/* HERO */}
      <section className="max-w-4xl mx-auto px-6 pt-28 pb-20 text-center">
        <SectionTitle
          title="Let's Work Together"
          subtitle="Have a project in mind, a role to discuss, or just want to connect? I’m always open to new opportunities and collaborations."
          center
        />
      </section>

      {/* CONTACT CARDS */}
      <section className="max-w-5xl mx-auto px-6 pb-28">
        <div className="grid md:grid-cols-3 gap-8">

          {/* PHONE */}
          <a
            href="tel:7995198885"
            className="group bg-[#111827] border border-gray-800 rounded-2xl p-8 text-center hover:border-blue-500 hover:-translate-y-2 transition-all duration-300"
          >
            <div className="flex justify-center mb-4">
              <Phone size={32} className="text-blue-400" />
            </div>

            <h3 className="text-xl font-semibold mb-2">
              Call Me
            </h3>

            <p className="text-gray-400 group-hover:text-gray-300 transition">
              +91 7995198885
            </p>
          </a>

          {/* EMAIL */}
          <a
            href="mailto:yandapallisravakumar@gmail.com"
            className="group bg-[#111827] border border-gray-800 rounded-2xl p-8 text-center hover:border-blue-500 hover:-translate-y-2 transition-all duration-300"
          >
            <div className="flex justify-center mb-4">
              <Mail size={32} className="text-blue-400" />
            </div>

            <h3 className="text-xl font-semibold mb-2">
              Email Me
            </h3>

            <p className="text-gray-400 group-hover:text-gray-300 transition break-all">
              yandapallisravakumar@gmail.com
            </p>
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/sravan-kumar-yandapalli/"
            target="_blank"
            className="group bg-[#111827] border border-gray-800 rounded-2xl p-8 text-center hover:border-blue-500 hover:-translate-y-2 transition-all duration-300"
          >
            <div className="flex justify-center mb-4">
              <Linkedin size={32} className="text-blue-400" />
            </div>

            <h3 className="text-xl font-semibold mb-2">
              LinkedIn
            </h3>

            <p className="text-gray-400 group-hover:text-gray-300 transition">
              Connect With Me
            </p>
          </a>

        </div>
      </section>

    </main>
  );
}
