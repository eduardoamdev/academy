"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import InlineWidget from "@calcom/embed-react";

export default function Home() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: "booking" });
      cal("ui", {
        theme: "light",
        layout: "month_view",
        hideEventTypeDetails: false,
      });
    })();
  }, []);

  return (
    <main className="min-h-screen bg-white flex items-start justify-center p-6">
      <div className="w-full max-w-3xl rounded-2xl border shadow-sm bg-white p-4 sm:p-6">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-4">
          Book a Session
        </h1>

        <InlineWidget
          calLink="eduardo-alvarez-2hzm31"
          namespace="booking"
          config={{ layout: "month_view", theme: "light" }}
          style={{ width: "100%", height: "900px" }}
        />
      </div>
    </main>
  );
}
