export const AboutMe = () => {
  const Pstyle = ({ children }) => {
    return <p className="p-2 text-2xl">{children}</p>;
  };
  return (
    <div className=" w-[500px] p-4 font-Lato">
      <h1 className="p-2 text-4xl">Hvem er jeg?</h1>
      <Pstyle>Hele livet mitt har jeg vært fascinert og forelsket i Vitenskap og Kunst. Jeg konkluderte etterhvert at koding og programmering er den ultimate kunstformen, og har begge føtter godt plantet i vitenskap. Derfor er dette naturligvis perfekt for meg.</Pstyle>
      <Pstyle>Jeg elsker å lære nye ting og jeg blomstrer med utfordringer. Jeg ønsker å være med å skape noe som kan være til nytte for folk.</Pstyle>
      <Pstyle>Med mine mange og lange erfaringer fra aktivt arbeid i musikkindustrien er jeg godt rutinert i å lære nye ting. Få ting er vært å gjøre om man får det til på første forsøk. jeg lever på forbedringspotensiale. </Pstyle>
    </div>
  );
};
