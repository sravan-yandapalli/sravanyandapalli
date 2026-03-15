import Link from "next/link";
import { Phone, Mail, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0B0F19] border-t border-gray-800 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* TOP */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* BRAND */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              Sravan Kumar Yandapalli
            </h2>

            <p className="text-gray-400 mt-3 max-w-md">
              Creative Full Stack Developer & Graphic Designer focused on building
              visually stunning and user-friendly digital experiences.
            </p>
          </div>

          {/* CONTACT */}
          <div className="flex flex-col md:items-end gap-4 text-gray-300">

            <a
              href="tel:7995198885"
              className="flex items-center gap-2 hover:text-blue-400 transition"
            >
              <Phone size={18} />
              7995198885
            </a>

            <a
              href="mailto:yandapallisravakumar@gmail.com"
              className="flex items-center gap-2 hover:text-blue-400 transition"
            >
              <Mail size={18} />
              yandapallisravakumar@gmail.com
            </a>

            <Link
              href="https://www.linkedin.com/in/sravan-kumar-yandapalli/"
              target="_blank"
              className="flex items-center gap-2 hover:text-blue-400 transition"
            >
              <Linkedin size={18} />
              LinkedIn Profile
            </Link>

          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Sravan Kumar Yandapalli. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
