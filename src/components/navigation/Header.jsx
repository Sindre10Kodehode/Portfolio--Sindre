
export const Header = () => {
 
 return(
    <header className="fixed z-30 flex justify-around w-full h-28 font-Lato">
    <img src="/wavesOpacity.svg" className="absolute w-full pointer-events-none -z-10"/>
    <nav className="absolute flex justify-between m-4 text-xl mt-7 w-80 right-64">
        <a href="#hero" className="">Home</a>
        <a href="#about" className="">About</a>
        <a href="#projects" className="">Projects</a>
        <a href="#contact" className="">Contact</a>
    </nav>
    </header>
    )
}
