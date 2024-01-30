import { AboutMe } from "../components/AboutMe";

export const About = () => {
  return (
    <section
      className="w-full h-[130vh] flex text-[#E2C4F6] flex-row relative bg-[url(/newlow-poly-grid-haikei.svg)] justify-between"
      id="about"
    >
      <img src="/wave-haikei.svg" className="absolute z-0 w-screen" />

      <section className="flex flex-col items-center justify-center h-screen m-4 mt-24 md:flex-row md:m-16">
        <img
          src="/FB_IMG_1664373918992.jpg"
          className="z-0 h-[400px] md:h-[700px] rounded-lg"
        />
        <AboutMe />
      </section>
      <img src="/aboutend.svg" className="absolute bottom-0 w-screen" />
    </section>
  );
};
