export const HeroLinks = ({className}) => {
  return (
    <div className={`absolute bottom-0 flex flex-col top-64 md:top-40 md:flex-row right-12`}>
      <a
        target="_blank"
        className={`p-2 transition hover:scale-110 ${className}`}
        href="https://www.linkedin.com/in/sindre-giske-7a21a62ab/"
      >
        <img
          src="/linkedin.png"
          className="bg-gray-300 h-14 rounded-[50%] mr-5 p-1"
        />
      </a>
      <a
        target="_blank"
        className={`p-2 transition hover:scale-110 ${className}`}
        href="https://github.com/Sindre10Kodehode"
      >
        <img src="/Github.png" className="bg-gray-300 h-14 rounded-[50%] p-1" />
      </a>
    </div>
  );
};
