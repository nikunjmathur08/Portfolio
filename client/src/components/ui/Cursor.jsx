import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";

export default function Cursor() {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const curs = useRef(null);
  const svg = useRef(null);

  const location = useLocation();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const handleMouseOver = (e) => {
        const target = e.target.closest(".img");
        if (target) {
          // Emulate mouseenter: only play if coming from outside the target
          if (!e.relatedTarget || !target.contains(e.relatedTarget)) {
            const size = target.dataset.cursorSize || "112px";
            
            gsap.to(curs.current, {
              height: size,
              width: size,
              duration: 0.5,
              ease: "expo.out",
              overwrite: "auto",
            });
            
            gsap.to(svg.current, {
              opacity: 1,
              width: "96px",
              height: "96px",
              duration: 0.5,
              ease: "expo.out",
              overwrite: "auto",
            });
          }
        }
      };

      const handleMouseOut = (e) => {
        const target = e.target.closest(".img");
        if (target) {
          // Emulate mouseleave: only reverse if going outside the target
          if (!e.relatedTarget || !target.contains(e.relatedTarget)) {
            gsap.to(curs.current, {
              height: "12px",
              width: "12px",
              duration: 0.5,
              ease: "expo.out",
              overwrite: "auto",
            });
            
            gsap.to(svg.current, {
              opacity: 0,
              duration: 0.5,
              ease: "expo.out",
              overwrite: "auto",
            });
          }
        }
      };

      document.addEventListener("mouseover", handleMouseOver);
      document.addEventListener("mouseout", handleMouseOut);

      return () => {
        document.removeEventListener("mouseover", handleMouseOver);
        document.removeEventListener("mouseout", handleMouseOut);
      };
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    function moveCursor(e) {
      setCursor({ x: e.clientX, y: e.clientY });
    }
    document.addEventListener("mousemove", moveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  const { x, y } = cursor;

  return (
    <div
      ref={curs}
      className="cursor pointer-events-none fixed left-1/2 top-1/2 z-[999] hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-secondary-600 sm:flex"
      style={{ left: `${x}px`, top: `${y}px` }}
    >
      <svg
        ref={svg}
        xmlns="http://www.w3.org/2000/svg"
        className="scale-50 opacity-0"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M6 19L19 6m0 0v12.48M19 6H6.52"
        />
      </svg>
    </div>
  );
}
