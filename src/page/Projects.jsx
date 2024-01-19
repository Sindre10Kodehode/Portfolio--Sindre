import { ProjectCards } from "../components/ProjectCards";
import { Knowledge } from "../components/knowledge";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col justify-center w-full h-screen bg-[#300449] text-[#E2C4F6] overflow-hidden place-items-center"
    >
      <h1 className="p-2 text-5xl">Prosjekter</h1>
    <ProjectCards/>
      <Knowledge/>
    </section>
  );
};
