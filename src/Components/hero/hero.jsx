import logo from "../../assets/logo_anime.svg"
import hero_pic from "../../assets/img/hero_pic.png"
function Hero() {


    return (
    <div className="w-full min-h-screen flex justify-center items-center p-4 md:p-8">
      <div className="w-full max-w-6xl min-h-[500px] h-[75vh] md:h-[700px] rounded-3xl bg-[radial-gradient(circle_at_center,_var(--color-purple-100),_var(--color-purple-200))] relative overflow-hidden shadow-2xl"> 
        <img src={hero_pic} alt="hero_pic" className="w-full h-full object-cover absolute inset-0 z-0" />
        <img src={logo} alt="logo" className="w-96 md:w-96 z-10 absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 md:left-[75%]" />
      </div>
    </div>
    )
}

export default Hero
