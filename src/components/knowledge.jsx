import { IconCard } from "./iconCard";

export const Knowledge = () => {
  return (
    <section className="flex justify-center pt-2 place-items-center bg-[#28536B] p-24 rounded-bl-[50%] rounded-br-[50%] rounded-[15%]">
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
