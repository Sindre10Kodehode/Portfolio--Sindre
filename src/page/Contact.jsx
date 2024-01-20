export const Contact = () => {
    const Pstyle = ({ children }) => {
        return <p className="p-2 text-2xl">{children}</p>;
      };

    return (
        <section id="contact" className="h-[40vh] flex flex-row justify-center items-center font-Lato bg-[#160022] text-[#E2C4F6]">
            <div className="p-2 text-end">
            <Pstyle>Navn</Pstyle>
            <Pstyle>Epost</Pstyle>
            <Pstyle>Postkode</Pstyle>
            </div>
            <vl className=" h-[20vh] w-1 bg-[#E2C4F6]"/>
            <div className="p-2">
            <Pstyle>Sindre Tofte Giske</Pstyle>
            <Pstyle>Sindre10Kodehode@gmail.com</Pstyle>
            <Pstyle>3936, Porsgrunn</Pstyle>
            </div>

        </section>
    )
}
