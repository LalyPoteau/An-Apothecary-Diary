import bowl from "../../assets/img/bowl.svg"

function Bar() {
    return (
        <div className="w-full md:w-32 flex flex-row md:flex-col-reverse md:min-h-screen justify-around items-center p-5 md:py-10 bg-gradient-to-r md:bg-gradient-to-b from-green-light to-green-medium shadow-2xl z-20 shrink-0">
               <img src={bowl} alt="bowl" className="h-16 w-16 md:h-20 md:w-20 drop-shadow-md"/>
               <h1 className="m-5 text-better-white text-3xl md:text-5xl font-miskan md:[writing-mode:vertical-rl] md:rotate-180 md:tracking-widest whitespace-nowrap">An apothecary wiki</h1>
        </div>
    )
}

export default Bar