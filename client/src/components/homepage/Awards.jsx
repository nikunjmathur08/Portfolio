import Heading from "../ui/Heading";
import { awards } from "../../data";

export default function Awards({ forwardedRef }) {
  return (
    <section ref={forwardedRef} id="awards" className="nav-change my-[10%]" aria-label="awards and achievements">
      <Heading title="awards" />
      <div className="mt-10 grid gap-6">
        {awards.map((award, index) => (
          <article
            key={`${award.title}-${index}`}
            className={`rounded-2xl border border-secondary-400/20 bg-secondary-400/5 p-6 md:p-8${index === 0 ? " wwdc-card" : ""}`}
          >
            <div className="flex flex-wrap items-center gap-3 md:gap-4">
              <p className="rounded-full border border-secondary-600 px-4 py-1 text-body-4 text-secondary-600">
                {award.period}
              </p>
              <p className="rounded-full border border-secondary-600 px-4 py-1 text-body-4 text-secondary-600">
                {award.organization}
              </p>
            </div>
            <p className="mt-4 text-heading-4 text-xl font-semibold text-primary-200">{award.title}</p>
            <p className="mt-3 text-body-2 font-light text-lg text-primary-400">{award.highlight}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
