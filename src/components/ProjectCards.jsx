export const ProjectCard = ({ href, title, desc, link, className, activeLink, activePage= false }) => {
  return (
    <div
      className={`md:w-[500px] w-[340px] border-8 border-[#160022] h-[300px] md:h-[400px] rounded-[50px] flex-col bg-[#160022] relative item-center flex m-8 text-[#E2C4F6] text-center overflow-hidden transition hover:scale-105 font-Poppins ${className}`}
    >
      <div className="w-full md:h-[180px] h-[80px] bg-white">
        <img
          src={href}
          className="object-cover object-top w-full h-full overflow-hidden"
        />
      </div>
      <h1 className="p-2 text-xl md:text-3xl">{title}</h1>
      <p className="text-sm md:text-base">{desc}</p>
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
      {activePage && (
        <a target="_blank"
        className="absolute w-12 h-12 transition bottom-2 hover:scale-110 left-[60px]"
        href={activeLink}>
          <img 
          src="/netlify-icon.png"
          className="bg-gray-300 h-full w-full rounded-[50%] p-1"
          title="Link til aktiv side"
          />
        </a>
      )}
    </div>
  );
};

export const ProjectCards = () => {
  return (
    <section className="flex flex-wrap p-10">
      <ProjectCard
        href="/getShrekd.png"
        title="Rock, Paper, Shrek"
        desc="Jeg lagde ett Stein, Saks, Papir spill hvor Shrek er din motstander. Prosjektet er laget i React, hovedsakelig med vanilla Javascript, men med noen React syntaks utvidelser som useStates. Lyst til å prøve? Trykk på linken nede i hjørnet!"
        link="https://github.com/Sindre10Kodehode/RPS"
        activePage={true}
        activeLink="https://jazzy-frangipane-12e78c.netlify.app/"
      />
      <ProjectCard
        href="/pokedeximg.png"
        title="Pokedex"
        desc="Som ett gruppeprosjekt lagde vi en pokedex. Dette er en index av bilder, navn og typer av forskjellige pokemon hentet fra en API."
        link="https://github.com/Saikuura/Pokedex/tree/main"
      />
      <ProjectCard
        className="hidden md:block"
        href="/ReactDemo.png"
        title="React/API demo"
        desc="For å vise mine ferdigheter innenfor basic frontEnd koding, og for å forbedre meg i React lagde jeg denne siden. Landingssiden er brukt til å forklare hvordan siden er laget, og samme som denne siden har jeg brukt 100% tailwind til styling."
        link="https://github.com/Sindre10Kodehode/React_Routing"
      />
    </section>
  );
};

{
  /* <ProjectCard href="" title="" desc="" link="" /> */
}
