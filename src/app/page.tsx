"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

export default function Home() {
  return (
    <div className="mt-16 sm:mt-20 lg:mt-32 px-4 sm:px-6 md:px-10 lg:px-16">
      <section className="mx-auto max-w-7xl flex flex-col min-[1350px]:flex-row items-start min-[1350px]:items-center gap-8 sm:gap-10 min-[1350px]:gap-14">
        <div className="w-full min-[1350px]:w-1/2">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
            Learn{" "}
            <span className="underline underline-offset-4 decoration-2">
              HTML
            </span>
            ,{" "}
            <span className="underline underline-offset-4 decoration-2">
              CSS
            </span>{" "}
            &{" "}
            <span className="underline underline-offset-4 decoration-2">
              JavaScript
            </span>
          </h1>

          <p className="mt-4 sm:mt-5 text-base sm:text-lg text-white/80 max-w-prose">
            Build real projects, understand the “why”, and book live sessions
            when you’re ready.
          </p>

          <div className="mt-5 sm:mt-6 flex flex-wrap gap-3">
            <Link
              href="/book"
              className="rounded-2xl px-5 py-3 text-sm font-medium ring-1 ring-white/20 hover:ring-white/40 transition"
            >
              Book a session
            </Link>
          </div>
        </div>

        <div className="w-full min-[1350px]:w-1/2 flex justify-center min-[1350px]:justify-end mt-4 min-[1350px]:mt-0 overflow-x-auto">
          <div className="shrink-0 w-[320px] h-[280px] sm:w-[420px] sm:h-[340px] md:w-[520px] md:h-[400px] min-[1350px]:w-[550px] min-[1350px]:h-[460px]">
            <CodeTyper />
          </div>
        </div>
      </section>
    </div>
  );
}

function CodeTyper() {
  const snippet = useMemo(
    () =>
      `<!DOCTYPE html>
<html>
  <head>
    <title>Hello</title>
  </head>
  <body>
    <h1>Hello, world!</h1>
    <h2>Let's learn web HTML, CSS & JavaScript</h2>
    <p>Book your session in the calendar and dive into the basics of web development.</p>
  </body>
</html>`,
    []
  );

  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [direction, setDirection] = useState<"forward" | "reset">("forward");

  useEffect(() => {
    const speed = 12;
    const interval = setInterval(() => {
      if (direction === "forward") {
        const next = i + speed;
        setText(snippet.slice(0, Math.min(next, snippet.length)));
        setI(next);
        if (next >= snippet.length) {
          setTimeout(() => setDirection("reset"), 1200);
        }
      } else {
        const next = Math.max(0, i - speed * 2);
        setText(snippet.slice(0, next));
        setI(next);
        if (next === 0) setDirection("forward");
      }
    }, 60);
    return () => clearInterval(interval);
  }, [i, direction, snippet]);

  return (
    <div
      className="rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-xl w-full h-full flex flex-col"
      aria-label="Live HTML typing preview"
    >
      <div className="flex items-center gap-2 px-4 py-2 sm:py-3 text-xs sm:text-sm ring-1 ring-inset ring-white/5 bg-white/5 backdrop-blur flex-none">
        <span
          className="inline-block h-3 w-3 rounded-full"
          style={{ background: "rgb(248 113 113)" }}
        />
        <span
          className="inline-block h-3 w-3 rounded-full"
          style={{ background: "rgb(250 204 21)" }}
        />
        <span
          className="inline-block h-3 w-3 rounded-full"
          style={{ background: "rgb(74 222 128)" }}
        />
        <span className="ml-3 text-white/70">index.html</span>
      </div>

      <pre className="flex-1 p-4 sm:p-5 md:p-6 text-[13px] sm:text-sm md:text-[0.925rem] leading-relaxed overflow-auto [scrollbar-gutter:stable]">
        <code className="whitespace-pre-wrap break-words font-mono">
          {text}
          <Cursor />
        </code>
      </pre>
    </div>
  );
}

function Cursor() {
  return (
    <span
      aria-hidden="true"
      className="inline-block w-[8px] h-[1.2em] align-[-0.2em] ml-[2px] bg-white/80 animate-pulse"
    />
  );
}
