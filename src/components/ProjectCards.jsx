export const ProjectCard = ({ href, title, desc, link }) => {
  return (
    <div className="w-[500px] border-8 border-[#300449] h-[400px] rounded-[50px] flex-col bg-[#300449] relative item-center flex m-8 text-[#E2C4F6] text-center font-Poppins">
      <div className="w-full h-[170px] rounded-t-[41px] bg-white">
        <img src={href} className="w-full h-full rounded-t-[41px]"/>
      </div>
      <h1 className="p-2 text-3xl">{title}</h1>
      <p>{desc}</p>
      <a
        target="_blank"
        className="absolute bottom-2 left-2 h-14 w-14"
        href={link}
      >
        <img src="/Github.png" className="bg-gray-300 h-full w-full rounded-[50%] p-1" />
      </a>
    </div>
  );
};

export const ProjectCards = () => {
  return (
    <div className="flex flex-wrap p-10">
      <ProjectCard
        href=""
        title="Pokedex"
        desc="Som ett gruppeprosjekt lagde vi en pokedex. Dette er en index av bilder, navn og litt annen informasjon av forskjellige pokemon hentet fra en API."
        link=""
      />
      <ProjectCard
        href=""
        title="React demo"
        desc="For å vise mine ferdigheter i "
        link=""
      />
            <ProjectCard
        href=""
        title=""
        desc=""
        link=""
      />
    </div>
  );
};

{
  /* <ProjectCard href="" title="" desc="" link="" /> */
}
