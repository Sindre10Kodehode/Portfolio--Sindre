export const IconCard = ({src, name}) => {

    return (
        <div className="flex justify-between pt-6 flex-col p-5 place-items-center bg-[#6d1261] m-2 rounded-3xl w-28 h-44 text-[#E2C4F6]">
            <img src={src}/>
            <h1>{name}</h1>
        </div>
    )
}