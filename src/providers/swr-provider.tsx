"use client";

import { SWRConfig } from "swr";
import { fetcher } from "@/lib/fetcher";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SWRProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      delay: 4000,
    });
  }, []);
  return (
    <SWRConfig
      value={{
        fetcher: fetcher,
        loadingTimeout: 5000,
      }}
    >
      {children}
    </SWRConfig>
  );
}
