"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import InlineWidget from "@calcom/embed-react";

export default function Book() {
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
    <InlineWidget
      calLink="eduardo-alvarez-2hzm31"
      namespace="booking"
      config={{ layout: "month_view", theme: "light" }}
      style={{ width: "100%", height: "900px" }}
    />
  );
}
