export const IconCard = ({src, name}) => {

  return (
      <div className="flex md:justify-between md:pt-6 flex-col md:p-5 w-12 h-14 justify-center place-items-center bg-[#6d1261] md:m-2 m-1 rounded-3xl md:w-28 md:h-44 text-[#E2C4F6] font-Poppins transition hover:scale-105">
          <img src={src} className="w-[80%]"/>
          <h1 className="hidden md:block">{name}</h1>
      </div>
  )
}

export const Knowledge = () => {
  return (
    <section className="flex justify-center flex-wrap place-items-center bg-[#160022] md:p-6 p-4 rounded-[50px]">
      <IconCard src="/html-5.png" name="HTML" />
      <IconCard src="/css-3.png" name="CSS" />
      <IconCard src="/javascript.png" name="Javascript" />
      <IconCard src="/figma.png" name="Figma" />
      <IconCard src="/react.png" name="React" />
      <IconCard src="/Github.png" name="GitHub" />
      <IconCard src="/git.png" name="Git" />
      <IconCard src="/tailwind.png" name="Tailwind" />
      <IconCard src="/vitejs.png" name="Vite" />
      <IconCard src="/vscode-icon.png" name="VSCode" />
    </section>
  );
};
