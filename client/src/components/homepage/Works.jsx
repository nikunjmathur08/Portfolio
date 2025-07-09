import signie from "/src/assets/images/signie.webp";
import chatapp from "/src/assets/images/signie.webp";
import notrisk from "/src/assets/images/notrisk.webp";
import evinco from "/src/assets/images/evinco.webp";
import extract from "/src/assets/images/extract.webp";
import circuits from "/src/assets/images/circuits.webp";
// import memento from "/src/assets/images/memento-desktop.webp";
// import acc from "/src/assets/images/acc-square.webp";
// import daddy from "/src/assets/images/godaddy-desktop.webp";
// import sunnyside from "/src/assets/images/sunnyside-desktop.webp";
import Projects from "../ui/Projects";
import Heading from "../ui/Heading";

export default function Works({ forwardedRef }) {
  return (
    <section
      ref={forwardedRef}
      id="works"
      className="nav-change overflow-hidden my-[10%]"
    >
     <Heading title="Projects" />
      <div className="mt-10 grid grid-cols-1 gap-16 gap-y-10 md:grid-cols-12">
        {/* Project #1 */}
        <div className=" col-span-1 md:col-span-12">
          <Projects
            link="https://github.com/nikunjmathur08/Signie"
            img={signie}
            alt="Signie"
            name="Signie - Gamified Sign Language Learning"
            type="UI/UX Design • App Development"
            year="2025"
            tools="React Native • CNNs • MediaPipe Hands"

          />
        </div>
        {/* Project #2 */}
        <div className="col-span-1 pt-0 md:col-span-7 md:pt-16">
          <Projects
            link="https://not-risk.vercel.app"
            img={notrisk}
            alt="(not)-RISK - Receipts Insurance Services Keeper"
            name="(not)-RISK - Receipts Insurance Services Keeper"
            type="SaaS • Frontend Development"
            year="2025"
            tools="MongoDB • Express • React • TailwindCSS • Node"
          />
        </div>
        <div className="col-span-1 pt-0 md:col-span-5 md:pt-80">
          <Projects
            link="https://github.com/nikunjmathur08/evinco"
            img={evinco}
            alt="evinco - event-interact-connect"
            name="evinco - event-interact-connect"
            type="Web Design • Full Stack Development"
            year="2024"
            tools="MongoDB • Express • React • Node.js"
          />
        </div>
        <div className="col-span-1 h-fit pt-0 md:col-span-7 md:pt-20">
          <Projects
            link="https://github.com/nikunjmathur08/Smart_Extractor"
            img={extract}
            alt="Terminal Based Dynamic Web Scraper"
            name="Terminal Based Dynamic Web Scraper"
            type="Web Scraping • Local Models"
            year="2025"
            tools="Python • Ollama • Crawl4Ai"
          />
        </div>
        <div className="col-span-1 h-fit md:col-span-5">
        <Projects
            link="https://dld.srmist.edu.in/eLogic/"
            img={circuits}
            alt="circuit creations"
            name="Circuit Creations"
            type="Frontend Development"
            year="2025"
            tools="React • TailwindCSS • JavaScript"
          />
         
        </div>
      </div>
    </section>
  );
}