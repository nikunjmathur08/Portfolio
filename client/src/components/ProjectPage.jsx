import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { projects, siteConfig } from "../data";
import { Icon } from "@iconify/react";
import { useEffect, useRef, useState } from "react";

// Custom hook for scroll animations
const useScrollAnimation = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return { ref, isVisible };
};

// Animated wrapper component
const AnimatedSection = ({ children, delay = 0 }) => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const Section = ({ title, children, className = "", delay = 0 }) => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section 
      ref={ref}
      className={`mb-16 transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-2xl font-semibold text-white font-general">{title}</h2>
      </div>
      <div className="text-secondary-400 leading-relaxed">
        {children}
      </div>
    </section>
  );
};

const IconList = ({ items }) => (
  <ul className="list-none px-4 m-0 mb-2">
    {items.map((item, i) => (
      <li key={i} className="relative pl-3 mb-2 text-md text-secondary-300 before:content-['-'] before:absolute before:left-0 before:text-secondary-400 before:font-bold">
        {item}
      </li>
    ))}
  </ul>
);

const InsightBlock = ({ children }) => (
  <blockquote className="flex gap-4 p-6 bg-gradient-to-r from-amber-500/10 to-amber-600/5 border-l-4 border-amber-400 rounded-r-xl my-6">
    <Icon icon="mdi:lightbulb-outline" className="text-2xl text-amber-400 flex-shrink-0" />
    <p className="m-0 italic text-secondary-300">{children}</p>
  </blockquote>
);

const TechPill = ({ label, value }) => (
  <div className="bg-secondary-400/5 border border-secondary-400/20 rounded-xl p-5 flex flex-col gap-2 transition-colors">
    <span className="text-xs text-secondary-500 uppercase tracking-widest font-grotesk">{label}</span>
    <span className="text-base text-white font-medium">{value}</span>
  </div>
);

const DecisionCard = ({ decision }) => (
  <div className="bg-secondary-400/5 border border-secondary-400/5 rounded-xl p-6 hover:border-secondary-300/40 hover:scale-[1.01] transition-all">
    <h4 className="text-xl font-semibold text-white mb-4 font-general">{decision.title}</h4>
    <IconList items={decision.points} />
    {decision.outcome && (
      <p className="pt-3 border-t border-secondary-400/10 text-secondary-300 text-lg italic m-0">
        → {decision.outcome}
      </p>
    )}
  </div>
);

const ChallengeCard = ({ challenge }) => (
  <div className="bg-secondary-400/5 border border-secondary-400/10 rounded-xl p-6 border-l-4 border-l-red-400">
    <h4 className="text-xl font-semibold text-white mb-3 font-general">{challenge.title}</h4>
    <p className="text-secondary-400/70 text-lg mb-3">{challenge.problem}</p>
    <p className="text-secondary-300 text-lg m-0">
      <span className="text-secondary-400/50 font-normal">Fix:</span> {challenge.fix}
    </p>
  </div>
);

const FlowStep = ({ step, index }) => (
  <div className="flex items-center gap-4 p-4 bg-secondary-400/5 border border-secondary-400/10 rounded-xl hover:border-secondary-300/40 hover:scale-[1.01] transition-all">
    <div className="w-8 h-8 flex items-center justify-center rounded-full text-5xl font-semibold text-secondary-400/5 flex-shrink-0" style={{ WebkitTextStroke: '1px #a4a49eff' }}>
      {index + 1}
    </div>
    <div className="flex flex-col gap-1">
      <span className="font-semibold text-md text-white">{step.title}</span>
      <span className="text-md text-secondary-500">{step.description}</span>
    </div>
  </div>
);

const ImageGallery = ({ images, title = "Project Gallery" }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { ref, isVisible } = useScrollAnimation();

  if (!images || images.length === 0) return null;

  return (
    <>
      <section 
        ref={ref}
        className={`mb-16 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="flex items-center gap-3 mb-6">
          <span className="text-2xl">🖼️</span>
          <h2 className="text-2xl font-semibold text-white font-general">{title}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setSelectedImage(img)}
              className="img group relative overflow-hidden rounded-xl border border-secondary-400/10 hover:border-indigo-500/30 transition-all cursor-pointer aspect-video"
            >
              <img
                src={img.src}
                alt={img.alt || `Screenshot ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-medium">{img.caption || img.alt}</p>
                </div>
              </div>
              <div className="absolute top-3 right-3 w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Icon icon="mdi:magnify-plus" className="text-white" />
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <Icon icon="mdi:close" className="text-3xl" />
          </button>
          <div 
            className="max-w-5xl max-h-[90vh] animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            {selectedImage.caption && (
              <p className="text-center text-secondary-400 mt-4 text-sm">{selectedImage.caption}</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-secondary-100 px-5">
        <h1 className="text-heading-2 font-bold text-accent-300">404</h1>
        <p className="mt-4 text-body-1 text-secondary-600">Project not found</p>
        <Link to="/" className="mt-8 button group hover:bg-transparent">
          ← Back to Home
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{project.name} | {siteConfig.name}</title>
        <meta name="description" content={project.description} />
        <meta name="keywords" content={project.tools.join(", ")} />
        <link rel="canonical" href={`${siteConfig.url}/projects/${project.slug}`} />
        <meta property="og:title" content={`${project.name} | ${siteConfig.name}`} />
        <meta property="og:description" content={project.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${siteConfig.url}/projects/${project.slug}`} />
        <meta name="twitter:title" content={`${project.name} | ${siteConfig.name}`} />
        <meta name="twitter:description" content={project.description} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "name": project.name,
            "description": project.description,
            "author": { "@type": "Person", "name": siteConfig.name },
            "dateCreated": project.year,
            "keywords": project.tools.join(", "),
            "url": `${siteConfig.url}/projects/${project.slug}`,
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-accent-400 text-secondary-400 pb-16">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-4 md:px-8 py-2 bg-accent-400/90 backdrop-blur-xl border-b border-white/10">
          <Link to="/" className="flex items-center gap-2 text-secondary-300 text-sm hover:text-white transition-colors min-h-[44px] min-w-[44px] px-2">
            <Icon icon="mdi:arrow-left" className="text-lg" />
            <span className="hidden sm:inline">Back to Home</span>
          </Link>
          <div className="flex items-center gap-4 md:gap-8">
            {(project.liveUrl || project.sourceUrl || project.link) && (
              <Link 
                to={project.liveUrl || project.sourceUrl || project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                data-cursor-size="50px"
                className="img text-sm font-medium text-secondary-300 px-4 py-2.5 min-h-[44px] flex items-center border border-secondary-400/20 rounded-full bg-accent-400/90 hover:bg-secondary-100 hover:text-accent-400 transition-all ease-in-out duration-500"
              >
                {project.liveUrl ? 'Live Demo' : 'GitHub'}
              </Link>
            )}
            <span className="text-sm text-secondary-400 font-grotesk hidden sm:block">{project.year}</span>
          </div>
        </nav>

        {/* Hero Section with entrance animation */}
        <header className="max-w-6xl pt-32 pb-8 px-8 mx-auto animate-fade-in-up">
          <div className="flex gap-4 mb-4 flex-wrap">
            <span className="text-sm text-secondary-500 font-grotesk uppercase tracking-widest">
              {project.type}
            </span>
            {project.status && (
              <span className="text-xs px-3 -mt-1 py-1 bg-indigo-500/20 border border-indigo-500/40 rounded-full text-indigo-300 font-grotesk">
                {project.status}
              </span>
            )}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-2 font-general">
            {project.name}
          </h1>
          {project.tagline && (
            <p className="text-xl md:text-2xl text-secondary-400 font-light max-w-4xl leading-relaxed">
              {project.tagline}
            </p>
          )}
        </header>

        {/* Hero Image with scale animation */}
        <AnimatedSection delay={100}>
          <div className="max-w-6xl mx-auto px-8">
            <figure className="img overflow-hidden rounded-2xl border border-secondary-400/20 hover:scale-[1.01] transition-transform duration-500">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-auto object-cover"
                loading="eager"
                fetchPriority="high"
              />
            </figure>
          </div>
        </AnimatedSection>

        {/* Project Info Bar */}
        <AnimatedSection delay={200}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto my-12 px-8">
            {project.role && (
              <TechPill label="Role" value={project.role} />
            )}
            {project.team && (
              <TechPill label="Team" value={project.team} />
            )}
            {project.platform && (
              <TechPill label="Platform" value={project.platform} />
            )}
            <TechPill label="Year" value={project.year} />
          </div>
        </AnimatedSection>

        {/* Main Content */}
        <main className="max-w-6xl mx-auto px-8 py-8">
          {/* TL;DR Section */}
          {project.tldr && (
            <Section title="TL;DR" delay={0}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-secondary-400/5 border border-secondary-400/20 rounded-xl p-5">
                  <span className="block text-sm text-secondary-500 uppercase tracking-widest mb-2 font-grotesk">What</span>
                  <p className="text-md text-secondary-300 m-0">{project.tldr.what}</p>
                </div>
                <div className="bg-secondary-400/5 border border-secondary-400/20 rounded-xl p-5">
                  <span className="block text-sm text-secondary-500 uppercase tracking-widest mb-2 font-grotesk">Who</span>
                  <p className="text-md text-secondary-300 m-0">{project.tldr.who}</p>
                </div>
                <div className="bg-secondary-400/5 border border-secondary-400/20 rounded-xl p-5">
                  <span className="block text-sm text-secondary-500 uppercase tracking-widest mb-2 font-grotesk">Core Challenge</span>
                  <p className="text-md text-secondary-300 m-0">{project.tldr.challenge}</p>
                </div>
                <div className="bg-secondary-400/5 border border-secondary-400/20 rounded-xl p-5">
                  <span className="block text-sm text-secondary-500 uppercase tracking-widest mb-2 font-grotesk">Outcome</span>
                  <p className="text-md text-secondary-300 m-0">{project.tldr.outcome}</p>
                </div>
                {/* WORK LEFT HERE */}
                <div className="md:col-span-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-xl p-5">
                  <span className="block text-sm text-secondary-500 uppercase tracking-widest mb-2 font-grotesk">Why It Matters</span>
                  <p className="text-md text-indigo-300 font-medium m-0">{project.tldr.whyItMatters}</p>
                </div>
              </div>
            </Section>
          )}

          {/* Context & Problem */}
          {project.problem && (
            <Section title="Context & Problem" delay={50}>
              <p className="mb-2 text-lg">{project.problem.intro}</p>
              <IconList items={project.problem.points} />
              {project.problem.coreInsight && (
                <InsightBlock>{project.problem.coreInsight}</InsightBlock>
              )}
            </Section>
          )}

          {/* Academic Collaboration (for Circuit Creations) */}
          {project.academicCollaboration && (
            <Section title="In-House Academic Collaboration" delay={50}>
              <p className="mb-2 text-lg">{project.academicCollaboration.intro}</p>
              <IconList items={project.academicCollaboration.points} />
              {project.academicCollaboration.note && (
                <p className="mt-4 text-secondary-500 text-sm italic">{project.academicCollaboration.note}</p>
              )}
            </Section>
          )}

          {/* Non-Goals */}
          {project.nonGoals && (
            <Section title="Non - Goals (Scope Control)" delay={50}>
              <p className="mb-2 text-lg">To stay focused, this project intentionally did not aim to:</p>
              <IconList items={project.nonGoals} />
            </Section>
          )}

          {/* System Overview */}
          {project.systemOverview && (
            <Section title="System Overview" delay={50}>
              <p className="mb-6 text-lg">{project.systemOverview.intro}</p>
              <div className="flex flex-col gap-3 my-6">
                {project.systemOverview.steps.map((step, i) => (
                  <FlowStep key={i} step={step} index={i} />
                ))}
              </div>
              {project.systemOverview.note && (
                <p className="mt-4 text-secondary-500 text-sm italic">{project.systemOverview.note}</p>
              )}
            </Section>
          )}

          {/* Key Technical Decisions */}
          {project.technicalDecisions && (
            <Section title="Key Technical Decisions" delay={50}>
              <div className="grid gap-6">
                {project.technicalDecisions.map((decision, i) => (
                  <DecisionCard key={i} decision={decision} />
                ))}
              </div>
            </Section>
          )}

          {/* Pipeline Overheads (Smart Extractor specific) */}
          {project.pipelineOverheads && (
            <Section title={project.pipelineOverheads.title} delay={50}>
              <p className="mb-6 text-base">{project.pipelineOverheads.intro}</p>
              <IconList items={project.pipelineOverheads.points} />
              <InsightBlock>{project.pipelineOverheads.insight}</InsightBlock>
            </Section>
          )}

          {/* Tech Stack */}
          {project.techStack && (
            <Section title="Tech Stack" delay={50}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.techStack.map((item, i) => (
                  <TechPill key={i} label={item.label} value={item.value} />
                ))}
              </div>
            </Section>
          )}

          {/* Image Gallery */}
          {project.gallery && (
            <ImageGallery images={project.gallery} title="Project Screenshots" />
          )}

          {/* Challenges & Iterations */}
          {project.challenges && (
            <Section title="Challenges & Iterations" delay={50}>
              <div className="grid gap-6">
                {project.challenges.map((challenge, i) => (
                  <ChallengeCard key={i} challenge={challenge} />
                ))}
              </div>
            </Section>
          )}

          {/* Observations */}
          {project.observations && (
            <Section title="Observations" delay={50}>
              <IconList items={project.observations}/>
            </Section>
          )}

          {/* Security & Ethics */}
          {project.ethics && (
            <Section title="Security & Responsibility" delay={50}>
              <IconList items={project.ethics}/>
            </Section>
          )}

          {/* Key Learnings */}
          {project.learnings && (
            <Section title="Key Learnings" delay={50}>
              <IconList items={project.learnings}/>
            </Section>
          )}

          {/* Future Work */}
          {project.futureWork && (
            <Section title="Future Roadmap" delay={50}>
              <IconList items={project.futureWork}/>
            </Section>
          )}

          {/* What You Can Learn */}
          {project.whatYouCanLearn && (
            <Section title="What You Can Learn From This Project" delay={50}>
              <IconList items={project.whatYouCanLearn}/>
            </Section>
          )}

          {/* Final Note */}
          {project.finalNote && (
            <AnimatedSection delay={100}>
              <div className="my-12 p-8 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-2xl text-center">
                <p className="text-lg text-secondary-300 leading-relaxed m-0 italic">{project.finalNote}</p>
              </div>
            </AnimatedSection>
          )}

        </main>

        {/* CTA Section */}
        <AnimatedSection delay={150}>
          <div className="flex justify-center gap-4 flex-wrap max-w-4xl mx-auto my-12 px-8">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-size="70px"
                className="img inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium text-base bg-transparent text-secondary-400 border border-secondary-400/30 hover:bg-secondary-400 hover:text-accent-400 hover:border-secondary-400/80 transition-all"
              >
                <Icon icon="mdi:open-in-new" />
                <span>View Live Demo</span>
              </a>
            )}
            {project.sourceUrl && (
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-size="70px"
                className="img inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium text-base bg-transparent text-secondary-400 border border-secondary-400/30 hover:bg-secondary-400 hover:text-accent-400 hover:border-secondary-400/80 transition-all"
              >
                <Icon icon="mdi:github" />
                <span>View Source Code</span>
              </a>
            )}
            {!project.liveUrl && !project.sourceUrl && project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium text-base bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/30 transition-all"
              >
                <Icon icon="mdi:open-in-new" />
                <span>View Project</span>
              </a>
            )}
          </div>
        </AnimatedSection>

        {/* Related Projects */}
        <AnimatedSection delay={200}>
          <section className="max-w-6xl mx-auto my-16 px-8 pt-12 border-t border-secondary-400/10">
            <h2 className="text-2xl font-semibold text-white mb-8 font-general">Other Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projects
                .filter((p) => p.slug !== project.slug)
                .slice(0, 3)
                .map((p) => (
                  <Link
                    key={p.slug}
                    to={`/projects/${p.slug}`}
                    className="group block bg-secondary-400/5 border border-secondary-400/10 rounded-xl overflow-hidden hover:-translate-y-1 hover:border-indigo-500/30 transition-all"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-semibold text-white mb-1 font-general group-hover:text-indigo-300 transition-colors">
                        {p.shortName}
                      </h3>
                      <p className="text-sm text-secondary-500 m-0">{p.type}</p>
                    </div>
                  </Link>
                ))}
            </div>
          </section>
        </AnimatedSection>

        {/* Footer */}
        <footer className="text-center py-8 border-t border-secondary-400/10">
          <Link to="/" className="inline-flex items-center gap-2 text-secondary-500 text-sm hover:text-white transition-colors min-h-[44px] px-4 py-2">
            <Icon icon="mdi:arrow-left" />
            Back to all projects
          </Link>
        </footer>
      </div>
    </>
  );
}
