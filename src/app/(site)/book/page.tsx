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
    <div className="pt-[50px] pb-[100px] min-[1350px]:pt-0 min-[1350px]:pb-0">
      <InlineWidget
        calLink="eduardo-alvarez-2hzm31"
        namespace="booking"
        config={{ layout: "month_view", theme: "light" }}
        style={{ width: "100%", height: "900px" }}
      />
    </div>
  );
}
