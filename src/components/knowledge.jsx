export const IconCard = ({src, name}) => {

  return (
      <div className="flex justify-between pt-6 flex-col p-5 place-items-center bg-[#6d1261] m-2 rounded-3xl w-28 h-44 text-[#E2C4F6] font-Poppins transition hover:scale-105">
          <img src={src}/>
          <h1>{name}</h1>
      </div>
  )
}

export const Knowledge = () => {
  return (
    <section className="flex justify-center place-items-center bg-[#160022] p-6 rounded-[50px]">
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
