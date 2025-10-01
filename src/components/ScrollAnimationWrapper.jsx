import { useLayoutEffect, useRef, useEffect } from "react";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
import gsap from "gsap";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Create a context to manage all ScrollTriggers together
const ScrollAnimationWrapper = ({ children }) => {
  const containerRef = useRef(null);
  
  useLayoutEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
    });

    const raf = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // Sync ScrollTrigger with Lenis
    lenis.on("scroll", ScrollTrigger.update);

    const refresh = () => {
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    };

    window.addEventListener("load", refresh);
    setTimeout(refresh, 1000);

    return () => {
      window.removeEventListener("load", refresh);
      lenis.destroy();
      gsap.ticker.remove(raf);
    };
  }, []);

  return <div ref={containerRef}>{children}</div>;
};

export default ScrollAnimationWrapper;