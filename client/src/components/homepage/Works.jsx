import { Link } from "react-router-dom";
import { projects } from "../../data";
import Projects from "../ui/Projects";
import Heading from "../ui/Heading";

export default function Works({ forwardedRef }) {
  return (
    <section
      ref={forwardedRef}
      id="works"
      className="nav-change overflow-hidden my-[10%]"
      aria-label="projects"
    >
      <Heading title="Projects" />
      <div className="mt-10 grid grid-cols-1 gap-16 gap-y-10 md:grid-cols-12">
        {/* Featured Project - Full Width */}
        {projects[0] && (
          <div className="col-span-1 md:col-span-12">
            <Link to={`/projects/${projects[0].slug}`}>
              <Projects
                link={projects[0].link}
                img={projects[0].image}
                alt={projects[0].name}
                name={projects[0].name}
                type={projects[0].type}
                year={projects[0].year}
                tools={projects[0].tools.join(" • ")}
                priority={true}
              />
            </Link>
          </div>
        )}
        
        {/* Project Grid */}
        {projects[1] && (
          <div className="col-span-1 pt-0 md:col-span-7 md:pt-16">
            <Link to={`/projects/${projects[1].slug}`}>
              <Projects
                link={projects[1].link}
                img={projects[1].image}
                alt={projects[1].name}
                name={projects[1].name}
                type={projects[1].type}
                year={projects[1].year}
                tools={projects[1].tools.join(" • ")}
              />
            </Link>
          </div>
        )}
        
        {projects[2] && (
          <div className="col-span-1 pt-0 md:col-span-5 md:pt-80">
            <Link to={`/projects/${projects[2].slug}`}>
              <Projects
                link={projects[2].link}
                img={projects[2].image}
                alt={projects[2].name}
                name={projects[2].name}
                type={projects[2].type}
                year={projects[2].year}
                tools={projects[2].tools.join(" • ")}
              />
            </Link>
          </div>
        )}
        
        {projects[3] && (
          <div className="col-span-1 h-fit pt-0 md:col-span-7 md:pt-20">
            <Link to={`/projects/${projects[3].slug}`}>
              <Projects
                link={projects[3].link}
                img={projects[3].image}
                alt={projects[3].name}
                name={projects[3].name}
                type={projects[3].type}
                year={projects[3].year}
                tools={projects[3].tools.join(" • ")}
              />
            </Link>
          </div>
        )}
        
        {projects[4] && (
          <div className="col-span-1 h-fit md:col-span-5">
            <Link to={`/projects/${projects[4].slug}`}>
              <Projects
                link={projects[4].link}
                img={projects[4].image}
                alt={projects[4].name}
                name={projects[4].name}
                type={projects[4].type}
                year={projects[4].year}
                tools={projects[4].tools.join(" • ")}
              />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}