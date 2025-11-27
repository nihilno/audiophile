"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

function ScrollToTop() {
  const pathname = usePathname();
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return; // skip scroll on initial render
    }

    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
