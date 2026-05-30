"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { lenisInstance } from "./LenisProvider";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if (lenisInstance) {
      lenisInstance.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [pathname]);

  return null;
}
