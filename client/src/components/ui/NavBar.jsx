import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Lenis from "lenis";

import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function NavBar({ sectionRefs, color }) {
  const navBar = useRef(null);
  const logo = useRef(null);
  const cta = useRef(null);
  const tl = gsap.timeline();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    tl.to(navBar.current, {
      y: 0,
      duration: 3,
      delay: 0.5,
      ease: "power4.inOut",
    });
  });


  useEffect(() => {
    sectionRefs.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 375px",
        end: "bottom 300px",
        // markers: true,
        animation: gsap
          .timeline()
          .to(logo.current, { fill: "#DDDDD5"}, 0)
          .to(navBar.current, { color: "#DDDDD5" })
          .to(cta.current, { backgroundColor: "#D1D1C7", color: "#0E0E0C" }, 0)
          .to(".bg-secondary-100", { backgroundColor: "#0E0E0C" }, 0),

        toggleActions: "restart reverse restart reverse",
      });
    });
  });

  return (
    <header
      ref={navBar}
      className="fixed top-0 z-50 flex w-full -translate-y-full items-center justify-between backdrop-blur-md px-5 py-3"
    >
      {/* logo */}
      <a aria-label="Logo" className="z-50">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="100" 
            height="35" 
            preserveAspectRatio="xMidYMid" 
            viewBox="0 0 428 133"
          >
            <g 
              ref={logo}
              transform="translate(0.000000,133.000000) scale(0.100000,-0.100000)" 
              fill= {color} 
              stroke="none"
            >
              <path 
                d="M2337 1260 c-110 -119 -270 -339 -401 -550 -57 -93 -245 -183 -320 -154 -26 10 -18 53 25 132 38 69 44 102 19 102 -35 0 -120 -148 -120 -207 0 -19 9 -43 23 -59 40 -46 127 -43 248 10 12 5 18 1 22 -13 8 -34 34 -25 110 39 l71 61 17 -33 c22 -43 49 -67 96 -84 82 -29 207 -11 332 46 35 17 65 30 67 30 2 0 4 -11 4 -25 0 -14 10 -35 21 -46 18 -18 29 -20 67 -15 51 7 146 56 221 116 28 22 53 40 56 40 3 0 5 -11 5 -25 0 -72 53 -125 123 -125 45 0 153 34 192 60 40 26 42 26 37 -14 -3 -24 1 -35 13 -40 22 -8 42 3 165 94 110 81 158 110 185 110 12 0 15 -13 15 -62 0 -99 50 -158 132 -158 31 0 27 -4 -51 -50 -238 -142 -340 -276 -286 -379 44 -86 184 -76 308 21 76 60 179 220 228 353 12 33 26 65 33 72 12 12 134 52 224 73 46 11 52 15 52 37 0 25 -1 26 -52 20 -29 -3 -88 -16 -130 -30 l-78 -25 0 82 c0 87 -15 126 -49 126 -22 0 -33 -21 -20 -41 5 -8 9 -31 9 -52 0 -31 -6 -44 -31 -65 -91 -78 -177 -103 -215 -61 -15 17 -19 34 -16 90 2 58 -1 72 -18 89 -11 11 -30 20 -42 20 -36 0 -121 -44 -203 -105 -82 -60 -83 -54 -11 39 25 33 46 63 46 67 0 3 -7 13 -16 20 -15 12 -23 7 -69 -44 -29 -31 -55 -57 -60 -57 -4 0 -39 -21 -77 -46 -82 -55 -154 -84 -207 -84 -56 0 -69 21 -73 110 -2 59 -6 75 -19 78 -9 2 -56 -29 -104 -67 -135 -107 -245 -159 -245 -116 0 26 46 109 94 167 49 60 58 88 28 88 -19 0 -70 -49 -117 -112 -15 -21 -31 -38 -36 -38 -4 0 -36 -17 -71 -37 -164 -96 -355 -113 -397 -34 -14 25 -5 31 41 31 51 0 157 36 186 63 15 14 22 30 20 46 -7 61 -115 51 -262 -23 -50 -25 -91 -45 -92 -43 -1 1 41 67 94 147 108 162 222 313 307 407 56 62 67 94 34 101 -10 2 -43 -26 -82 -68z m1534 -846 c-78 -163 -177 -277 -268 -308 -59 -20 -92 -20 -115 1 -55 50 19 160 182 270 59 40 233 133 239 128 2 -3 -15 -44 -38 -91z"></path><path d="M865 1206 c-156 -72 -396 -329 -610 -651 -121 -182 -248 -423 -243 -463 6 -56 32 -35 82 65 204 413 567 873 778 988 93 51 96 32 38 -273 -52 -277 -63 -378 -58 -521 3 -104 7 -124 32 -175 66 -135 173 -125 294 26 73 93 148 222 326 568 87 167 164 312 172 324 21 30 18 66 -5 66 -29 0 -48 -32 -208 -343 -180 -349 -250 -472 -320 -564 -88 -116 -146 -139 -190 -75 -64 95 -57 300 23 709 15 76 27 173 28 216 1 74 -1 80 -27 103 -35 30 -49 30 -112 0z">
              </path>
              <path 
                d="M3961 911 c-16 -29 -13 -61 5 -68 22 -8 46 24 42 57 -4 31 -33 38 -47 11z">
              </path>
              <path 
                d="M1692 860 c-17 -28 -15 -50 6 -50 25 0 56 35 49 55 -9 21 -40 19 -55 -5z">
              </path>
            </g>
          </svg>
      </a>
      <nav className=" space-x-7 font-grotesk text-body-3 sm:block">
        <a href="#about" className="group relative hidden md:inline-block">
          <span>about</span>
          <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
        </a>
        <a href="#services" className="group relative hidden md:inline-block">
          <span>services</span>
          <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
        </a>
        <a href="#works" className="group relative hidden md:inline-block">
          <span>projects</span>
          <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
        </a>
        <a
          ref={cta}
          className="button group relative hover:bg-transparent"
          href="#contact"
        >
          <span className="relative w-fit">
            <span className="absolute top-4 h-[0.15em] w-0 bg-secondary-700 opacity-90 duration-300 ease-out group-hover:w-full"></span>
            <span>Let's Talk.</span>
          </span>
        </a>
      </nav>
    </header>
  );
}