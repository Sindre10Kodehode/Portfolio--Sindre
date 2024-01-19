import { ProjectCards } from "../components/ProjectCards";
import { Knowledge } from "../components/knowledge";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col justify-center w-full h-screen overflow-hidden place-items-center"
    >
      <h1 className="p-2 text-4xl">Prosjekter</h1>
    <ProjectCards/>
      <Knowledge />
    </section>
  );
};
