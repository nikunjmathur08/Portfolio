import ServiceUi from "../ui/ServiceUi";
import Heading from "../ui/Heading";
import { skills } from "../../data";

export default function Services() {
  return (
    <section id="services" className="my-[10%]" aria-label="services">
      <Heading title="services" />
      <div className="space-y-14">
        <ServiceUi
          title="my expertises."
          description="I focus on all things design and web related."
          items={skills.expertise}
        />
        <ServiceUi
          title="my digital tool box."
          description="These are my go to tech stack to make any 
          projects happen. I am always eager of learning more about 
          my current stack, and new tech that could expand my horizons."
          items={skills.tools}
        />
      </div>
    </section>
  );
}
