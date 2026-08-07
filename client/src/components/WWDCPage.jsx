import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Icon } from "@iconify/react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { wwdc, siteConfig } from "../data";


const _mods = import.meta.glob(
  "../assets/images/wwdc/img*.webp",
  { eager: true }
);
const WWDC_IMAGES = Object.keys(_mods)
  .sort((a, b) => {
    const n = (s) => parseInt(s.match(/img(\d+)/)?.[1] ?? "0");
    return n(a) - n(b);
  })
  .map((k) => _mods[k].default);

const useScrollReveal = (threshold = 0.1) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.unobserve(el);
  }, [threshold]);

  return { ref, visible };
};

const Reveal = ({ children, delay = 0, className = "", style: extraStyle, ...rest }) => {
  const { ref, visible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...extraStyle }}
      {...rest}
    >
      {children}
    </div>
  );
};

function Gallery({ images }) {
  const trackRef = useRef(null);
  const tileRefs = useRef([]);
  const [loaded, setLoaded] = useState(() => {
    const init = new Array(images.length).fill(false);
    for (let i = 0; i < Math.min(3, images.length); i++) init[i] = true;
    return init;
  });
  const [activeIdx, setActiveIdx] = useState(0);
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.dataset.idx);
            setLoaded((prev) => {
              if (prev[idx]) return prev;
              const next = [...prev];
              next[idx] = true;
              return next;
            });
            obs.unobserve(entry.target);
          }
        });
      },
      {
        root: track,
        rootMargin: "0px 200px 0px 200px",
        threshold: 0,
      }
    );

    tileRefs.current.forEach((el) => { if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, [images.length]);

  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e) => { if (e.key === "Escape") setLightbox(null); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox]);

  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  const scrollBy = (dir) => {
    if (!trackRef.current) return;
    const el = trackRef.current;
    const itemW = el.scrollWidth / images.length;
    el.scrollBy({ left: dir * itemW, behavior: "smooth" });
  };

  const onScroll = () => {
    if (!trackRef.current) return;
    const el = trackRef.current;
    const itemW = el.scrollWidth / images.length;
    setActiveIdx(Math.min(images.length - 1, Math.round(el.scrollLeft / itemW)));
  };

  return (
    <>
      <div className="mb-3 flex items-center justify-between">
        <p className="flex select-none items-center gap-1.5 font-grotesk text-sm text-secondary-500">
          <Icon icon="ph:hand-pointing" width={14} />
          click to enlarge
        </p>
        <div className="flex gap-2">
          <button
            onClick={() => scrollBy(-1)}
            aria-label="Previous image"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-secondary-400/20 bg-secondary-400/5 text-secondary-400 transition-all hover:bg-secondary-400/10 active:scale-95"
          >
            <Icon icon="ph:caret-left" width={16} />
          </button>
          <button
            onClick={() => scrollBy(1)}
            aria-label="Next image"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-secondary-400/20 bg-secondary-400/5 text-secondary-400 transition-all hover:bg-secondary-400/10 active:scale-95"
          >
            <Icon icon="ph:caret-right" width={16} />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="flex gap-3 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 select-none"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onScroll={onScroll}
      >
        {images.map((src, i) => (
          <button
            key={i}
            ref={(el) => (tileRefs.current[i] = el)}
            data-idx={i}
            onClick={() => setLightbox(i)}
            className="snap-center shrink-0 overflow-hidden rounded-xl border border-secondary-400/10 bg-secondary-400/[0.04] transition-all duration-300 hover:scale-[1.02]"
            style={{
              width: i % 3 === 0 ? "clamp(220px, 28vw, 360px)" : "clamp(180px, 20vw, 280px)",
              height: "clamp(200px, 34vh, 420px)",
            }}
            aria-label={`View photo ${i + 1}`}
          >
            {loaded[i] ? (
              <img
                src={src}
                alt={`WWDC26 @ Apple Park — photo ${i + 1}`}
                decoding="async"
                draggable="false"
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="h-full w-full animate-pulse bg-secondary-400/[0.06]" />
            )}
          </button>
        ))}
      </div>

      <div className="mt-4 flex justify-center gap-1.5 flex-wrap">
        {images.slice(0, 20).map((_, i) => (
          <span
            key={i}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === activeIdx ? "1.4rem" : "0.32rem",
              height: "0.32rem",
              background: i === activeIdx ? "#8C8C73" : "#8C8C7330",
            }}
          />
        ))}
      </div>

      {lightbox !== null && createPortal(
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-6 md:p-10"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Photo lightbox"
        >
          <div className="absolute inset-0 bg-black/75 backdrop-blur-xl" />

          {lightbox > 0 && (
            <button
              className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/8 text-white/80 backdrop-blur-sm transition-all duration-200 hover:bg-white/15 hover:text-white active:scale-95 md:left-8"
              onClick={(e) => { e.stopPropagation(); setLightbox((l) => l - 1); }}
              aria-label="Previous photo"
            >
              <Icon icon="ph:caret-left" width={22} />
            </button>
          )}

          <div
            className="relative z-10 flex max-h-[88vh] w-full max-w-5xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[lightbox]}
              alt={`WWDC26 photo ${lightbox + 1}`}
              className="max-h-[84vh] max-w-full rounded-2xl object-contain shadow-[0_32px_80px_rgba(0,0,0,0.6)]"
            />
            <p className="mt-4 font-grotesk text-sm text-white/35">
              {lightbox + 1} / {images.length}
            </p>
          </div>

          {lightbox < images.length - 1 && (
            <button
              className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/8 text-white/80 backdrop-blur-sm transition-all duration-200 hover:bg-white/15 hover:text-white active:scale-95 md:right-8"
              onClick={(e) => { e.stopPropagation(); setLightbox((l) => l + 1); }}
              aria-label="Next photo"
            >
              <Icon icon="ph:caret-right" width={22} />
            </button>
          )}

          <button
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/8 text-white/70 backdrop-blur-sm transition-all duration-200 hover:bg-white/15 hover:text-white active:scale-95 md:right-6 md:top-6"
            onClick={() => setLightbox(null)}
            aria-label="Close lightbox"
          >
            <Icon icon="ph:x" width={18} />
          </button>
        </div>,
        document.body
      )}
    </>
  );
}


const AREAS = ["a", "b", "c", "d", "e"];

function LearningsBento({ learnings }) {
  return (
    <>
      <div
        className="hidden md:grid gap-3"
        style={{
          gridTemplateColumns: "1fr 1fr",
          gridTemplateAreas: `
            "a b"
            "c c"
            "d e"
          `,
        }}
      >
        {learnings.map((item, i) => (
          <Reveal
            key={i}
            delay={i * 50}
            className="h-full"
            style={{ gridArea: AREAS[i] }}
          >
            <article className="group flex h-full flex-col justify-between rounded-2xl border border-secondary-400/10 bg-secondary-400/[0.03] p-6 transition-all duration-300 hover:border-secondary-400/20 hover:bg-secondary-400/[0.06]">
              <span
                aria-hidden="true"
                className="w-8 h-8 flex items-center justify-center rounded-full text-5xl font-semibold text-transparent flex-shrink-0 font-general"
                style={{ WebkitTextStroke: '1px rgb(164, 164, 158)', WebkitTextFillColor: 'transparent' }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="mt-4">
                <h3 className="font-general text-lg font-semibold leading-snug text-white">
                  {item.title}
                </h3>
                <p className="mt-2 font-grotesk text-base leading-relaxed text-secondary-400">
                  {item.body}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="flex flex-col gap-3 md:hidden">
        {learnings.map((item, i) => (
          <Reveal key={i} delay={i * 50}>
            <article className="group rounded-2xl border border-secondary-400/10 bg-secondary-400/[0.03] p-6 transition-all duration-300 hover:border-secondary-400/20 hover:bg-secondary-400/[0.06]">
              <span
                aria-hidden="true"
                className="select-none font-general text-[3.5rem] font-bold leading-none text-secondary-400/[0.07]"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-general text-lg font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-2 font-grotesk text-base leading-relaxed text-secondary-400">
                {item.body}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </>
  );
}

export default function WWDCPage() {
  return (
    <>
      <Helmet>
        <title>WWDC26 @ Apple Park | {siteConfig.name}</title>
        <meta
          name="description"
          content="One of 350 developers selected globally as an Apple Swift Student Challenge Winner, invited to WWDC26 at Apple Park, Cupertino."
        />
        <link rel="canonical" href={`${siteConfig.url}/wwdc`} />
        <meta property="og:title" content={`WWDC26 @ Apple Park | ${siteConfig.name}`} />
        <meta property="og:description" content={wwdc.intro} />
        <meta property="og:type" content="article" />
      </Helmet>

      <div className="min-h-screen bg-accent-400 text-secondary-400 pb-20">
        <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between border-b border-white/5 bg-accent-400/90 px-5 py-2 backdrop-blur-xl md:px-10">
          <Link
            to="/#experience"
            className="flex min-h-[44px] items-center gap-2 px-2 font-grotesk text-sm text-secondary-400 transition-colors hover:text-white"
          >
            <Icon icon="ph:arrow-left" width={16} />
            <span className="hidden sm:inline">Back</span>
          </Link>
          <div className="flex items-center gap-2">
            <Icon icon="simple-icons:apple" width={14} className="text-secondary-500" />
            <span className="font-grotesk text-sm text-secondary-500">{wwdc.badge}</span>
          </div>
        </nav>

        <header className="mx-auto max-w-5xl px-5 pb-10 pt-28 md:px-10">
          <p className="mb-3 font-grotesk text-xs uppercase tracking-widest text-secondary-500">
            {wwdc.year} · Apple Park, Cupertino
          </p>
          <h1 className="font-general text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            {wwdc.title}
          </h1>
          <p className="mt-5 max-w-3xl font-grotesk text-xl font-light leading-relaxed text-secondary-400">
            {wwdc.intro}
          </p>
        </header>

        <Reveal delay={60}>
          <div className="mx-auto max-w-5xl px-5 md:px-10">
            {WWDC_IMAGES[0] && (
              <figure className="overflow-hidden rounded-2xl border border-secondary-400/20 transition-transform duration-500 hover:scale-[1.006]">
                <img
                  src={WWDC_IMAGES[0]}
                  alt="WWDC26 @ Apple Park"
                  className="h-auto w-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                />
              </figure>
            )}
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mx-auto mt-8 grid grid-cols-2 gap-3 max-w-5xl px-5 md:grid-cols-4 md:px-10">
            {wwdc.highlights.map((h) => (
              <div
                key={h.label}
                className="rounded-2xl border border-secondary-400/10 bg-secondary-400/[0.04] px-5 py-4 transition-colors duration-300 hover:border-secondary-400/18"
              >
                <p className="text-xs uppercase tracking-wider text-secondary-500">
                  {h.label}
                </p>
                <p className="mt-1 font-general text-lg font-semibold text-white">
                  {h.value}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
        <main className="mx-auto max-w-5xl px-5 py-14 md:px-10 space-y-20">
          <Reveal>
            <div className="rounded-2xl border border-secondary-400/10 bg-secondary-400/[0.03] p-8 md:p-10">
              <p className="font-general text-xl font-semibold leading-snug text-white md:text-2xl">
                {wwdc.context}
              </p>
            </div>
          </Reveal>

          <Reveal>
            <section>
              <h2 className="mb-6 font-general text-2xl font-semibold text-white">
                Photos from the week
              </h2>
              <Gallery images={WWDC_IMAGES.slice(1)} />
            </section>
          </Reveal>

          <Reveal>
            <section>
              <h2 className="mb-2 font-general text-2xl font-semibold text-white">
                What I took home
              </h2>
              <p className="mb-8 font-grotesk text-secondary-500">
                Five ideas that rewired how I think about building software on Apple platforms.
              </p>
              <LearningsBento learnings={wwdc.learnings} />
            </section>
          </Reveal>

        </main>
        <footer className="border-t border-secondary-400/10 py-8 text-center">
          <Link
            to="/#experience"
            className="inline-flex min-h-[44px] items-center gap-2 px-4 py-2 font-grotesk text-sm text-secondary-500 transition-colors hover:text-white"
          >
            <Icon icon="ph:arrow-left" width={15} />
            Back to experience
          </Link>
        </footer>
      </div>
    </>
  );
}
