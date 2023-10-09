"use client"
import Image from "next/image";
import Hero from "./components/hero/Hero";
import ProjectCard from "./components/topProjects/projectCard";

export default function Home() {
  const data = {
    photo: 'https://www.fundacionaquae.org/wp-content/uploads/2017/08/caracteristicas-de-los-atomos-1024x683.jpg',
    title: 'Atomic Bomb',
    topic: 'Physics'
  }
  return (
    <>
      <Hero />
      <h3 className="text-xl text-center">Top Projects</h3>
      <div className="flex text-center justify-center flex-wrap flex-row gap-3">
        <ProjectCard data={data}/>
        <ProjectCard data={data}/>
        <ProjectCard data={data}/>
        <ProjectCard data={data}/>
      </div>
    </>
  );
}
