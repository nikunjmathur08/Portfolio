import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";

export default function Cursor() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const curs = useRef(null);
  const svg = useRef(null);
  const location = useLocation();

  const isDetailPage =
    location.pathname === "/wwdc" ||
    location.pathname.startsWith("/projects/");

  useEffect(() => {
    if (!curs.current || !svg.current) return;
    gsap.killTweensOf([curs.current, svg.current]);
    gsap.set(curs.current, { width: "12px", height: "12px" });
    gsap.set(svg.current, { opacity: 0, width: "24px", height: "24px" });
  }, [location.pathname]);

  useEffect(() => {
    if (isDetailPage) return;
    function handleMouseOver(e) {
      const target = e.target.closest(".img");
      if (!target) return;
      if (e.relatedTarget && target.contains(e.relatedTarget)) return;

      const size = target.dataset.cursorSize || "112px";
      gsap.killTweensOf([curs.current, svg.current]);
      gsap.to(curs.current, { width: size, height: size, duration: 0.45, ease: "expo.out" });
      gsap.to(svg.current, { opacity: 1, width: "96px", height: "96px", duration: 0.45, ease: "expo.out" });
    }

    function handleMouseOut(e) {
      const target = e.target.closest(".img");
      if (!target) return;
      if (e.relatedTarget && target.contains(e.relatedTarget)) return;

      gsap.killTweensOf([curs.current, svg.current]);
      gsap.to(curs.current, { width: "12px", height: "12px", duration: 0.45, ease: "expo.out" });
      gsap.to(svg.current, { opacity: 0, duration: 0.45, ease: "expo.out" });
    }

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      if (curs.current && svg.current) {
        gsap.killTweensOf([curs.current, svg.current]);
        gsap.set(curs.current, { width: "12px", height: "12px" });
        gsap.set(svg.current, { opacity: 0, width: "24px", height: "24px" });
      }
    };
  }, [isDetailPage]);

  useEffect(() => {
    function onMouseMove(e) {
      setPos({ x: e.clientX, y: e.clientY });
    }
    document.addEventListener("mousemove", onMouseMove);
    return () => document.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <div
      ref={curs}
      className="cursor pointer-events-none fixed z-[10000] hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-secondary-600 sm:flex"
      style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
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
