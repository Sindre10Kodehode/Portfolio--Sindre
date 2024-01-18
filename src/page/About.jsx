import { AboutMe } from "../components/AboutMe";

export const About = () => {
  return (
    <section className="w-full h-[120vh] flex text-[#E2C4F6] flex-col bg-[url(/newlow-poly-grid-haikei.svg)]" id="about">
      
      <img src="/wave-haikei.svg" className="absolute z-10 w-screen" />

      <section
        className="flex flex-row items-center justify-center h-screen m-16"
      >
        <img
          src="/FB_IMG_1664373918992.jpg"
          className="z-0 h-[700px] rounded-lg"
        />
      <AboutMe/>
      
      </section>
    </section>
  );
};
