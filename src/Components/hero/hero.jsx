import logo from "../../assets/logo_anime.svg"
import hero_pic from "../../assets/img/hero_pic.png"
function Hero({ selectedCharacter }) {



  if (selectedCharacter) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center p-4 md:p-8">
        <div className="w-full max-w-7xl min-h-[500px] h-[75vh] md:h-[700px] shadow-2xl rounded-3xl bg-[radial-gradient(circle_at_center,_var(--color-purple-100),_var(--color-purple-200))] relative overflow-hidden">
          
          {/* Background GIF */}
          <img src={selectedCharacter.bg_gif} alt="hero_bg" className="w-full h-full object-cover absolute inset-0 z-0" />
          
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-purple-100),_var(--color-purple-200))] opacity-80 mix-blend-multiply z-0 pointer-events-none"></div>

          <div className="absolute inset-0 z-10 flex flex-col md:flex-row w-full h-full">

            <div className="w-full md:w-[65%] h-[50%] md:h-full flex flex-col justify-end items-start md:px-12 pointer-events-none relative z-20">
              <img src={selectedCharacter.image} alt={selectedCharacter.name} className="w-full h-[110%] md:h-full object-contain object-bottom drop-shadow-[0_0_25px_rgba(0,0,0,0.6)] origin-bottom" />
            </div>
            
           
            <div className="w-full md:w-[35%] h-[50%] md:h-full flex flex-col justify-center items-start p-8 md:p-0 md:pr-16 text-better-white z-20 relative">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-miskan drop-shadow-xl mb-4 md:mb-6">{selectedCharacter.name}</h1>
              <p className="text-base md:text-lg lg:text-xl leading-relaxed drop-shadow-md ">{selectedCharacter.description}</p>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="w-full min-h-screen flex justify-center items-center p-4 md:p-8">
        <div className="w-full max-w-6xl min-h-[500px] h-[75vh] md:h-[700px] shadow-2xl rounded-3xl bg-[radial-gradient(circle_at_center,_var(--color-purple-100),_var(--color-purple-200))] relative overflow-hidden shadow-2xl">
          <img src={hero_pic} alt="hero_pic" className="shadow-2xl w-full h-full object-cover absolute inset-0 z-0" />
          <img src={logo} alt="logo" className="w-96 md:w-96 z-10 absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 md:left-[75%]" />
        </div>
      </div>
    )
  }


}

export default Hero
