"use client";

import Link from "next/link";

const Contact = () => {
  return (
    <div className="flex flex-col items-center text-center px-6 pt-[200px] pb-[100px]">
      <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight mb-8">
        Get in Touch
      </h2>

      <p className="text-base sm:text-lg text-white/80 max-w-xl mb-10">
        I’d love to hear from you! Whether you have a question, a project in
        mind, or just want to connect — feel free to reach out.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-6">
        <Link
          href="https://www.linkedin.com/in/eduardoalvarezmartinez/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl px-6 py-3 ring-1 ring-white/20 hover:ring-white/40 transition text-sm font-medium"
        >
          Connect on LinkedIn
        </Link>

        <a
          href="mailto:eduardoamdev.com"
          className="rounded-2xl px-6 py-3 ring-1 ring-white/20 hover:ring-white/40 transition text-sm font-medium"
        >
          Send an Email
        </a>
      </div>
    </div>
  );
};

export default Contact;
