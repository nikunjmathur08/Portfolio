import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Icon } from "@iconify/react";
import Heading from "../ui/Heading";
import { wwdc } from "../../data";

gsap.registerPlugin(ScrollTrigger);

function PhotoGallery({ images }) {
  const trackRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const velocityRef = useRef(0);
  const lastX = useRef(0);
  const rafRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const applyInertia = useCallback(() => {
    if (!trackRef.current) return;
    velocityRef.current *= 0.92;
    trackRef.current.scrollLeft += velocityRef.current;

    const el = trackRef.current;
    const itemWidth = el.scrollWidth / images.length;
    setActiveIdx(Math.round(el.scrollLeft / itemWidth));

    if (Math.abs(velocityRef.current) > 0.5) {
      rafRef.current = requestAnimationFrame(applyInertia);
    }
  }, [images.length]);

  const onMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - trackRef.current.offsetLeft;
    scrollLeft.current = trackRef.current.scrollLeft;
    lastX.current = e.pageX;
    velocityRef.current = 0;
    cancelAnimationFrame(rafRef.current);
    trackRef.current.style.cursor = "grabbing";
  };

  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.4;
    velocityRef.current = e.pageX - lastX.current;
    lastX.current = e.pageX;
    trackRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const onMouseUp = () => {
    isDragging.current = false;
    trackRef.current.style.cursor = "grab";
    rafRef.current = requestAnimationFrame(applyInertia);
  };

  const onScroll = () => {
    if (!trackRef.current) return;
    const el = trackRef.current;
    const itemWidth = el.scrollWidth / images.length;
    setActiveIdx(Math.round(el.scrollLeft / itemWidth));
  };

  useEffect(() => {
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const galleryWrapRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        galleryWrapRef.current,
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: galleryWrapRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div ref={galleryWrapRef} className="mt-12 md:mt-16">
      <p className="mb-4 hidden md:flex items-center gap-1.5 text-body-4 text-secondary-600 font-grotesk select-none">
        <Icon icon="ph:hand-grabbing" width={14} />
        drag to explore
      </p>

      <div
        ref={trackRef}
        className="flex gap-4 overflow-x-auto pb-4 md:cursor-grab select-none"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onScroll={onScroll}
      >
        {images.map((src, i) => (
          <div
            key={i}
            className="shrink-0 overflow-hidden rounded-xl"
            style={{
              width: i % 3 === 0 ? "clamp(200px, 30vw, 360px)" : "clamp(170px, 22vw, 280px)",
              height: "clamp(220px, 40vh, 480px)",
            }}
          >
            <img
              src={src}
              alt={`WWDC26 at Apple Park — photo ${i + 1}`}
              loading="lazy"
              draggable="false"
              className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
            />
          </div>
        ))}
      </div>

      <div className="mt-4 flex justify-center gap-1.5">
        {images.map((_, i) => (
          <span
            key={i}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === activeIdx ? "1.5rem" : "0.35rem",
              height: "0.35rem",
              background: i === activeIdx ? "#8C8C73" : "#8C8C7340",
            }}
          />
        ))}
      </div>
    </div>
  );
}

function LearningCard({ item, index }) {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power4.out",
          delay: index * 0.07,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );
    });
    return () => ctx.revert();
  }, [index]);

  return (
    <article
      ref={ref}
      className="group rounded-2xl border border-secondary-400/10 bg-secondary-400/[0.03] p-6 md:p-7 transition-all duration-300 hover:border-secondary-400/20 hover:bg-secondary-400/[0.06]"
    >
      <span className="font-general text-5xl font-bold text-secondary-400/10 leading-none select-none">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h4 className="mt-3 text-body-1 2xl:text-2xl font-semibold text-primary-200 leading-snug">
        {item.title}
      </h4>
      <p className="mt-2 text-body-2 2xl:text-xl text-secondary-500 font-grotesk leading-relaxed">
        {item.body}
      </p>
    </article>
  );
}

export default function WWDC() {
  const heroRef = useRef(null);
  const badgeRef = useRef(null);
  const introRef = useRef(null);
  const statsRowRef = useRef(null);
  const contextRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        badgeRef.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.7,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
      gsap.fromTo(
        introRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power4.out",
          delay: 0.15,
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top 78%",
            toggleActions: "play none none none",
          },
        }
      );
      gsap.fromTo(
        statsRowRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power4.out",
          delay: 0.25,
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
      gsap.fromTo(
        contextRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power4.out",
          scrollTrigger: {
            trigger: contextRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="wwdc"
      className="my-[10%] overflow-hidden"
      aria-label="WWDC at Apple Park"
    >
      <Heading title="WWDC" />
      <div ref={heroRef} className="mt-12 md:mt-14">
        <div
          ref={badgeRef}
          className="flex flex-wrap items-center gap-3"
          style={{ opacity: 0 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-secondary-400/20 bg-secondary-400/5 px-4 py-1.5 text-body-4 font-grotesk text-secondary-400">
            <Icon icon="simple-icons:apple" width={13} />
            {wwdc.badge}
          </span>
          <span className="rounded-full border border-secondary-600/30 px-4 py-1.5 text-body-4 font-grotesk text-secondary-600 flex items-center gap-1.5">
            <Icon icon="ph:map-pin" width={12} />
            {wwdc.subtitle}
          </span>
        </div>

        <p
          ref={introRef}
          className="mt-6 max-w-3xl text-body-1 2xl:text-3xl text-secondary-400 font-grotesk leading-relaxed"
          style={{ opacity: 0 }}
        >
          {wwdc.intro}
        </p>

        <div
          ref={statsRowRef}
          className="mt-8 flex flex-wrap gap-4"
          style={{ opacity: 0 }}
        >
          {wwdc.highlights.map((h) => (
            <div
              key={h.label}
              className="rounded-2xl border border-secondary-400/12 bg-secondary-400/[0.04] px-5 py-4 transition-all duration-300 hover:border-secondary-400/20"
            >
              <p className="text-body-4 font-grotesk text-secondary-600">
                {h.label}
              </p>
              <p className="mt-0.5 font-general text-body-1 2xl:text-2xl font-semibold text-primary-200">
                {h.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      <PhotoGallery images={wwdc.images} />

      <div className="mt-16 md:mt-20">
        <div className="section-heading select-none">
          <div className="heading flex translate-y-0 items-center gap-4 mb-10">
            <h3 className="text-heading-3 2xl:text-5xl font-semibold text-secondary-600 uppercase tracking-headings">
              What I took home
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {wwdc.learnings.map((item, index) => (
            <LearningCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>

      <div
        ref={contextRef}
        className="mt-12 md:mt-16 rounded-2xl border border-secondary-400/10 bg-secondary-400/[0.03] p-8 md:p-10"
        style={{ opacity: 0 }}
      >
        <Icon
          icon="ph:quotes"
          width={28}
          className="text-secondary-600 mb-4"
        />
        <p className="text-heading-3 2xl:text-4xl font-semibold text-primary-200 leading-snug max-w-3xl">
          {wwdc.context}
        </p>
        <p className="mt-5 text-body-2 text-secondary-600 font-grotesk">
          — Nikunj Mathur, Swift Student Challenge 2026
        </p>
      </div>
    </section>
  );
}
