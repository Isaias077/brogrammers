import React from "react";
import SearchBar from "../components/searchbar/searchBar";
import ChipComponent from "../components/chip/chipComponent";
import ProjectCard from "../components/topProjects/projectCard";

function proyects() {
  return (
    <div>
      <SearchBar />
      <div className="flex m-4 px-2.5 justify-center flex-nowrap w-50	overflow-x-scroll flex-row gap-3">
        <ChipComponent />
        <ChipComponent />
        <ChipComponent />
        <ChipComponent />
        <ChipComponent />
      </div>
      <div className="w-50 flex text-center justify-center flex-wrap flex-row gap-3">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}

export default proyects;
