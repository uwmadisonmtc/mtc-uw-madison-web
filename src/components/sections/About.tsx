import { SectionHeading } from "@/components/SectionHeading";

export function About() {
  return (
    <section id="about" className="wrap section">
      <SectionHeading>About</SectionHeading>
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
        <p className="display font-display font-extrabold [font-stretch:112%]">
          Tech for the community, by the community.
        </p>
        <div className="max-w-[52ch] space-y-5 text-lg lg:pt-2">
          <p>
            Muslim Tech Collaborative (MTC) is a national community of Muslim technologists and
            builders. We are its chapter at UW–Madison: students who learn technology, build
            projects, and grow together.
          </p>
          <p className="text-grey">
            Computer science, engineering, AI, product, or just curious about tech, there is a
            place for you here. Muslim identity is at the center of our community, and students
            of every background are welcome.
          </p>
        </div>
      </div>
    </section>
  );
}
