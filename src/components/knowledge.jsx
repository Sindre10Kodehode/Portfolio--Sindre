import { IconCard } from "./iconCard";

export const Knowledge = () => {
  return (
    <section className="flex justify-center place-items-center">
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
