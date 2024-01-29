export const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-[url(/blob-scene-haikei.svg)] bg-no-repeat bg-cover z-50 w-full h-screen flex place-content-center justify-around items-center text-gray-300 font-Poppins flex-col md:flex-row"
    >
      <div className="relative mt-12 select-none text-start">
        <h1 className="m-8 text-7xl">Sindre Tofte Giske</h1>
        <div className="m-8">
          <h1 className="text-4xl">Koder</h1>
          <h1 className="text-4xl">Musiker</h1>
          <h1 className="text-4xl">Kunstner</h1>
        </div>
      
      <div className="absolute bottom-0 flex flex-col top-64 md:flex-row right-12">
        <a
          target="_blank"
          className="p-2 transition hover:scale-110"
          href="https://www.linkedin.com/in/sindre-giske-7a21a62ab/"
        >
          <img
            src="/linkedin.png"
            className="bg-gray-300 h-14 rounded-[50%] mr-5 p-1"
          />
        </a>
        <a
          target="_blank"
          className="p-2 transition hover:scale-110"
          href="https://github.com/Sindre10Kodehode"
        >
          <img
            src="/Github.png"
            className="bg-gray-300 h-14 rounded-[50%] p-1"
          />
        </a>
      </div>
      </div>
      <img
        src="/imgme.jpg"
        className="rounded-tr-[40%] rounded-tl-[50%] rounded-br-[50%] rounded-bl-[20%] w-80 md:w-96 border-spacing-6 pointer-events-none select-none"
      />
      <img
        src="/waveHeroBot.svg"
        className="absolute w-full pointer-events-none -bottom-5 md:bottom-0"
      />
    </section>
  );
};
