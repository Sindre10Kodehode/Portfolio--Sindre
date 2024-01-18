export const Header = () => {
  return (
    <header className="fixed z-50 flex justify-around w-full select-none h-28 font-Lato">
      <img
        src="/wavesOpacity.svg"
        className="absolute w-full pointer-events-none"
      />
      <nav className="absolute flex justify-between m-4 text-xl mt-7 w-80 right-64">
        <a href="#hero" className=" hover:scale-110">
          Home
        </a>
        <a href="#about" className=" hover:scale-110">
          About
        </a>
        <a href="#projects" className=" hover:scale-110">
          Projects
        </a>
        <a href="#contact" className=" hover:scale-110">
          Contact
        </a>
      </nav>
    </header>
  );
};
