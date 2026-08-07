import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Icon } from "@iconify/react";
import Heading from "../ui/Heading";
import { experience, wwdc } from "../../data";

gsap.registerPlugin(ScrollTrigger);

const _previewMods = import.meta.glob(
  "../../assets/images/wwdc/img*.webp",
  { eager: true }
);

const ALL_KEYS = Object.keys(_previewMods).sort((a, b) => {
  const n = (s) => parseInt(s.match(/img(\d+)/)?.[1] ?? "0");
  return n(a) - n(b);
});
const PREVIEW_SRCS = [6, 5, 7, 14]
  .map((i) => ALL_KEYS[i] && _previewMods[ALL_KEYS[i]]?.default)
  .filter(Boolean);

function WWDCCard({ cardRef }) {
  const navigate = useNavigate();

  return (
    <div ref={cardRef} style={{ opacity: 0 }}>
      <div
        onClick={() => navigate("/wwdc")}
        onKeyDown={(e) => e.key === "Enter" && navigate("/wwdc")}
        role="button"
        tabIndex={0}
        aria-label="WWDC26 at Apple Park — click to read the full story"
        className="img group relative flex min-h-[400px] cursor-pointer flex-col overflow-hidden rounded-2xl border border-secondary-400/10 bg-secondary-400/[0.03] transition-colors duration-300 hover:border-secondary-400/30 md:min-h-[320px] md:flex-row"
      >
        <div className="flex flex-1 flex-col justify-between p-7 md:p-10">
          <div>
            <div className="mb-5 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-secondary-600 px-3 py-1.5 text-secondary-600">
                <Icon icon="simple-icons:apple" width={11} />
                {wwdc.badge}
              </span>
              <span className="rounded-full border border-secondary-600 px-3 py-1.5 text-secondary-600">
                {wwdc.year}
              </span>
            </div>

            <h3 className="text-heading-3 font-semibold leading-tight text-primary-200">
              {wwdc.title}
            </h3>
            <p className="mt-1.5 flex items-center gap-1.5 font-grotesk text-body-2 text-secondary-500">
              <Icon icon="ph:map-pin" width={18} />
              {wwdc.subtitle}
            </p>
            <p className="mt-5 max-w-md font-grotesk text-body-2 leading-relaxed text-secondary-400">
              {wwdc.intro.slice(0, 136)}…
            </p>
          </div>

          <div className="mt-7 flex items-center gap-2 text-secondary-600">
            <span>Read the full story</span>
            <Icon
              icon="ph:arrow-right"
              width={15}
            />
          </div>
        </div>

        {PREVIEW_SRCS.length >= 2 && (
          <div
            className="relative hidden shrink-0 overflow-hidden md:grid md:w-80 xl:w-96 grid-cols-2 gap-0.5"
            aria-hidden="true"
          >
            {PREVIEW_SRCS.map((src, i) => (
              <div key={i} className="relative overflow-hidden">
                <img
                  src={src}
                  alt=""
                  draggable="false"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                  style={{ transitionDelay: `${i * 40}ms` }}
                />
                {i === PREVIEW_SRCS.length - 1 && (
                  <div className="absolute inset-0 flex items-center justify-center bg-accent-400/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="text-sm font-semibold text-secondary-300">
                      22 photos
                    </span>
                  </div>
                )}
              </div>
            ))}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-accent-300 to-transparent" />
          </div>
        )}
      </div>
    </div>
  );
}

function ExperienceCard({ item, cardRef }) {
  const hasLink = !!(item.liveUrl || item.sourceUrl);
  const linkUrl = item.liveUrl || item.sourceUrl;
  const isLive = !!item.liveUrl;

  return (
    <div
      ref={cardRef}
      style={{ opacity: 0 }}
      className="flex h-full flex-col justify-between rounded-2xl border border-secondary-400/10 bg-secondary-400/[0.03] p-6 md:p-8"
    >
      <div>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-semibold leading-tight text-body-1 text-primary-200">
              {item.company}
            </h3>
            <p className="mt-0.5 font-grotesk text-body-4 text-secondary-600">
              {item.period}
            </p>
          </div>
          {hasLink && (
            <a
              href={linkUrl}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              aria-label={`${isLive ? "Live" : "Code"} — ${item.company}`}
              className="img group/link mt-0.5 flex shrink-0 items-center gap-1.5 font-grotesk text-body-4 text-secondary-600 transition-colors duration-200 hover:text-secondary-400"
            >
              <Icon
                icon={isLive ? "ph:arrow-square-out" : "ph:github-logo"}
                width={15}
              />
              <span className="relative">
                {isLive ? "Live" : "Code"}
                <span className="absolute bottom-0 left-0 h-px w-0 bg-secondary-400 transition-all duration-300 group-hover/link:w-full" />
              </span>
            </a>
          )}
        </div>

        <div className="my-4 h-px bg-secondary-400/10" />

        <p className="font-semibold text-body-2 text-primary-200">{item.role}</p>
        <p className="mt-2 font-grotesk text-body-2 leading-relaxed text-secondary-500">
          {item.description}
        </p>
      </div>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {item.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-secondary-600 px-2.5 py-0.5 text-secondary-600"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Experience({ forwardedRef }) {
  const cardRefs = useRef([]);
  const wwdcRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardRefs.current.forEach((el) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: "power4.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      if (wwdcRef.current) {
        gsap.fromTo(
          wwdcRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power4.out",
            scrollTrigger: {
              trigger: wwdcRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      ScrollTrigger.refresh();
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={forwardedRef}
      id="experience"
      className="nav-change my-[10%]"
      aria-label="work experience"
    >
      <Heading title="experience" />

      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="md:col-span-2">
          <ExperienceCard
            item={experience[0]}
            cardRef={(el) => (cardRefs.current[0] = el)}
          />
        </div>

        <ExperienceCard
          item={experience[1]}
          cardRef={(el) => (cardRefs.current[1] = el)}
        />
        <ExperienceCard
          item={experience[2]}
          cardRef={(el) => (cardRefs.current[2] = el)}
        />

        <ExperienceCard
          item={experience[3]}
          cardRef={(el) => (cardRefs.current[3] = el)}
        />
        <ExperienceCard
          item={experience[4]}
          cardRef={(el) => (cardRefs.current[4] = el)}
        />

        <div className="md:col-span-2">
          <WWDCCard cardRef={wwdcRef} />
        </div>
      </div>
    </section>
  );
}
