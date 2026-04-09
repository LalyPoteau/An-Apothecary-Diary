
import CardsIndividual from "../card_individual/CardIndividual"
import { cards } from "../../data/data"
function Cards({ onSelectCharacter, selectedCharacter }) {

   

    return (
       
        <div className="w-full min-h-screen gap-5 flex overflow-x-auto items-center px-10 md:px-20 py-4 md:py-8 snap-x snap-mandatory">
             {cards.map((card, index) => (
                  <CardsIndividual key={index} {...card} onSelectCharacter={onSelectCharacter} selectedCharacter={selectedCharacter} />
             ))}
        </div>
    )
}

export default Cards
