

export const Hero = () => {
    
    return(
    <section id="hero" className="bg-[url(/blob-scene-haikei.svg)] bg-no-repeat bg-cover z-0 w-full h-screen flex place-content-center justify-around items-center text-gray-300 font-Poppins pointer-events-none">
        <div className="select-none text-start">
            <h1 className="m-8 text-7xl">Sindre Tofte Giske</h1>
            <div className="m-8">
            <h1 className="text-4xl">Koder</h1>
            <h1 className="text-4xl">Musiker</h1>
            <h1 className="text-4xl">Kunstner</h1>
            </div>
        </div>
        <img src="/imgme.jpg" className="rounded-tr-[40%] rounded-tl-[50%] rounded-br-[50%] rounded-bl-[20%] h-96 border-spacing-6 pointer-events-none select-none"/>

        <img src="/waveHeroBot.svg" className="absolute w-full pointer-events-none"/>
    </section>
    )
}
