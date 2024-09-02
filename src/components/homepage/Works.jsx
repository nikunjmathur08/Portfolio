import chatapp from "/src/assets/images/chatapp.jpeg";
import event from "/src/assets/images/events.jpg";
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
            link="https://github.com/nikunjmathur08/evinco"
            img={event}
            alt="evinco"
            name="evinco - event-interact-connect!"
            type="React • MongoDB"
            year="2024"
            tools="MongoDB • Express • React • Node.js"

          />
        </div>
        {/* Project #2 */}
        <div className=" col-span-1 md:col-span-12">
          <Projects
            link="https://github.com/dhrxvjhx/genesis1.0"
            img={chatapp}
            alt="ChadApp - Decentralised Chat App"
            name="ChadApp - Decentralised Chat App"
            type="Blockchain • Smart Contracts"
            year="2024"
            tools="HTML • CSS • JavaScript • Solidity"

          />
        </div>
      </div>
    </section>
  );
}
