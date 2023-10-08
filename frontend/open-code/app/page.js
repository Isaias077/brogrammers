import Image from "next/image";
import Hero from "./components/hero/Hero";
import ProjectCard from "./components/topProjects/projectCard";

export default function Home() {
  return (
    <>
      <Hero />
      <h3 className="text-xl text-center">Top Projects</h3>
      <div className="flex text-center justify-center flex-wrap flex-row gap-3">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </>
  );
}
