export const ProjectCard = ({ href, title, desc, link }) => {
  return (
    <div className="w-[500px] border-8 border-[#160022] h-[400px] rounded-[50px] flex-col bg-[#160022] relative item-center flex m-8 text-[#E2C4F6] text-center overflow-hidden transition hover:scale-105 font-Poppins">
      <div className="w-full h-[180px] bg-white">
        <img
          src={href}
          className="object-cover object-top w-full h-full overflow-hidden"
        />
      </div>
      <h1 className="p-2 text-3xl">{title}</h1>
      <p>{desc}</p>
      <a
        target="_blank"
        className="absolute w-12 h-12 transition bottom-2 hover:scale-110 left-2"
        href={link}
      >
        <img
          src="/Github.png"
          className="bg-gray-300 h-full w-full rounded-[50%] p-1"
          title="Link til GitHub repo"
        />
      </a>
    </div>
  );
};

export const ProjectCards = () => {
  return (
    <div className="flex flex-wrap p-10">
      <ProjectCard
        href="/pokedeximg.png"
        title="Pokedex"
        desc="Som ett gruppeprosjekt lagde vi en pokedex. Dette er en index av bilder, navn og typer av forskjellige pokemon hentet fra en API."
        link="https://github.com/Saikuura/Pokedex/tree/main"
      />
      <ProjectCard
        href="/ReactDemo.png"
        title="React/API demo"
        desc="For å vise mine ferdigheter innenfor basic frontEnd koding, og for å forbedre meg i React lagde jeg denne siden. Landingssiden er brukt til å forklare hvordan siden er laget, og samme som denne siden har jeg brukt 100% tailwind til styling."
        link="https://github.com/Sindre10Kodehode/React_Routing"
      />
    </div>
  );
};

{
  /* <ProjectCard href="" title="" desc="" link="" /> */
}
