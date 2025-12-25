import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { projects, siteConfig } from "../data";
import { Icon } from "@iconify/react";

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-secondary-100 px-5">
        <h1 className="text-heading-2 font-bold text-accent-300">404</h1>
        <p className="mt-4 text-body-1 text-secondary-600">Project not found</p>
        <Link
          to="/"
          className="mt-8 button group hover:bg-transparent"
        >
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
        
        {/* Open Graph */}
        <meta property="og:title" content={`${project.name} | ${siteConfig.name}`} />
        <meta property="og:description" content={project.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${siteConfig.url}/projects/${project.slug}`} />
        
        {/* Twitter */}
        <meta name="twitter:title" content={`${project.name} | ${siteConfig.name}`} />
        <meta name="twitter:description" content={project.description} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "name": project.name,
            "description": project.description,
            "author": {
              "@type": "Person",
              "name": siteConfig.name,
            },
            "dateCreated": project.year,
            "keywords": project.tools.join(", "),
            "url": `${siteConfig.url}/projects/${project.slug}`,
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-secondary-100">
        {/* Navigation */}
        <nav className="fixed top-0 z-50 w-full backdrop-blur-md px-5 py-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-accent-300 hover:text-accent-400 transition-colors"
          >
            <Icon icon="mdi:arrow-left" className="text-xl" />
            <span className="font-grotesk">Back to Home</span>
          </Link>
        </nav>

        {/* Hero Section */}
        <section className="px-5 pt-24 pb-16 md:px-10 xl:px-20 2xl:px-28">
          <div className="max-w-4xl">
            <span className="text-body-3 text-secondary-600 font-grotesk">
              {project.year} • {project.type}
            </span>
            <h1 className="mt-4 text-heading-2 2xl:text-7xl font-bold text-accent-300 leading-tight">
              {project.name}
            </h1>
            <p className="mt-6 text-body-1 2xl:text-3xl text-secondary-600 leading-relaxed">
              {project.description}
            </p>
          </div>
        </section>

        {/* Project Image */}
        <section className="px-5 md:px-10 xl:px-20 2xl:px-28">
          <figure className="overflow-hidden rounded-lg">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </figure>
        </section>

        {/* Tools Section */}
        <section className="px-5 py-16 md:px-10 xl:px-20 2xl:px-28">
          <h2 className="text-heading-3 font-semibold text-accent-300 mb-6">
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.tools.map((tool, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-secondary-200 rounded-full text-body-2 text-accent-300 font-grotesk"
              >
                {tool}
              </span>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-5 pb-20 md:px-10 xl:px-20 2xl:px-28">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="button group inline-flex items-center gap-2 hover:bg-transparent"
          >
            <span>View Project</span>
            <Icon icon="mdi:open-in-new" className="text-lg" />
          </a>
        </section>

        {/* Related Projects */}
        <section className="px-5 py-16 md:px-10 xl:px-20 2xl:px-28 border-t border-secondary-200">
          <h2 className="text-heading-3 font-semibold text-accent-300 mb-8">
            Other Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects
              .filter((p) => p.slug !== project.slug)
              .slice(0, 3)
              .map((p) => (
                <Link
                  key={p.slug}
                  to={`/projects/${p.slug}`}
                  className="group block"
                >
                  <article className="overflow-hidden rounded-lg bg-secondary-200 transition-transform hover:scale-[1.02]">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full aspect-video object-cover"
                      loading="lazy"
                    />
                    <div className="p-4">
                      <h3 className="text-body-1 font-semibold text-accent-300 group-hover:text-accent-400 transition-colors">
                        {p.shortName}
                      </h3>
                      <p className="mt-1 text-body-3 text-secondary-600">
                        {p.type}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
          </div>
        </section>
      </div>
    </>
  );
}
