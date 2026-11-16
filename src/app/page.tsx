import { About } from "@/components/sections/About";
import { Events } from "@/components/sections/Events";
import { Hero } from "@/components/sections/Hero";
import { Join } from "@/components/sections/Join";
import { Projects } from "@/components/sections/Projects";
import { Team } from "@/components/sections/Team";
import { TextBand } from "@/components/sections/TextBand";
import { WhatWeDo } from "@/components/sections/WhatWeDo";

/* The whole site is this one page. Each section is its own small file. */
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <WhatWeDo />
      <TextBand />
      <Projects />
      <Events />
      <Team />
      <Join />
    </>
  );
}
