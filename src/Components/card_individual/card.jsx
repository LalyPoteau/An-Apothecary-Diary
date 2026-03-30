import jinshi_gif from "../../assets/gifs/jinshi.gif"
import maomao_gif from "../../assets/gifs/maomao.gif"
import maomao_card from "../../assets/maomao_chat_nouriture.png"
import jinshi_card from "../../assets/jinshi_cheuveux_au_vent.png"
function CardsIndividual({name, image, bg_gif, description}) {



    return (
       

            <div className="w-[400px] max-w-6xl min-h-[500px] h-[75vh] md:h-[700px] rounded-3xl bg-[radial-gradient(circle_at_center,_var(--color-purple-100),_var(--color-purple-200))] overflow-hidden shadow-2xl">
                <img src={image} alt={name} className="w-full h-full object-cover z-0" />


            </div>
       
    )
}

export default CardsIndividual
