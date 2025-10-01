import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import useLenis hook from lenis/react
import { useLenis } from "lenis/react";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const lenis = useLenis(); // Get the Lenis instance

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true }); // Use Lenis to scroll to top instantly
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 50);
  }, [pathname, lenis]);

  return null;
};

export default ScrollToTop;