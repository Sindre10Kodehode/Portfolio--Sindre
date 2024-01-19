export const ProjectCard = ({ href, title, desc, link }) => {
  return (
    <div className="w-[500px] border-8 border-[#300449] h-[400px] rounded-[50px] flex-col bg-[#300449] relative item-center flex m-8 text-[#E2C4F6] text-center overflow-hidden font-Poppins">
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
        className="absolute bottom-2 left-2 h-14 w-14"
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
        href="/public/ReactDemo.png"
        title="React/API demo"
        desc="For å vise mine ferdigheter innenfor koding, og for å forbedre meg i React lagde jeg denne siden. Landingssiden er brukt til å forklare hvordan siden er laget, og samme som denne siden har jeg brukt 100% tailwind til styling."
        link="https://github.com/Sindre10Kodehode/React_Routing"
      />
    </div>
  );
};

{
  /* <ProjectCard href="" title="" desc="" link="" /> */
}
