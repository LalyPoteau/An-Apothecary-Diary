import jinshi_gif from "../../assets/gifs/jinshi.gif"
import maomao_gif from "../../assets/gifs/maomao.gif"
import maomao_card from "../../assets/maomao_chat_nouriture.png"
import jinshi_card from "../../assets/jinshi_cheuveux_au_vent.png"
import CardsIndividual from "../card_individual/CardIndividual"
function Cards() {

    let cards = [
        {
            name: "Maomao",
            image: maomao_card,
            bg_gif: maomao_gif,
            description: "Maomao (猫猫マオマオ, Maomao?) is the protagonist of The Apothecary Diaries series. She is an illegitimate member of the La Clan raised in the red-light district. One day, she got kidnapped and sold by bandits, and she suddenly found herself as a servant in the Imperial Palace of Li, where she used her sense of practicality, keen deductions, and insightful knowledge of herbs and illnesses to solve the mysterious problems within the Inner and Outer Courts."
        },
        {
            name: "Jinshi",
            image: jinshi_card,
            bg_gif: jinshi_gif,
            description: "Jinshi (壬氏ジンシ, Jinshi) is the deuteragonist of The Apothecary Diaries series. He appears to be a beautiful eunuch who was placed in charge of the Inner Court. He often requests for Maomao to solve mysteries in the Imperial Palace in exchange for rare medicines."
        },
        {
            name: "Maomao",
            image: maomao_card,
            bg_gif: maomao_gif,
            description: "Maomao (猫猫マオマオ, Maomao?) is the protagonist of The Apothecary Diaries series. She is an illegitimate member of the La Clan raised in the red-light district. One day, she got kidnapped and sold by bandits, and she suddenly found herself as a servant in the Imperial Palace of Li, where she used her sense of practicality, keen deductions, and insightful knowledge of herbs and illnesses to solve the mysterious problems within the Inner and Outer Courts."
        },
        {
            name: "Jinshi",
            image: jinshi_card,
            bg_gif: jinshi_gif,
            description: "Jinshi (壬氏ジンシ, Jinshi) is the deuteragonist of The Apothecary Diaries series. He appears to be a beautiful eunuch who was placed in charge of the Inner Court. He often requests for Maomao to solve mysteries in the Imperial Palace in exchange for rare medicines."
        },
        {
            name: "Maomao",
            image: maomao_card,
            bg_gif: maomao_gif,
            description: "Maomao (猫猫マオマオ, Maomao?) is the protagonist of The Apothecary Diaries series. She is an illegitimate member of the La Clan raised in the red-light district. One day, she got kidnapped and sold by bandits, and she suddenly found herself as a servant in the Imperial Palace of Li, where she used her sense of practicality, keen deductions, and insightful knowledge of herbs and illnesses to solve the mysterious problems within the Inner and Outer Courts."
        },
        {
            name: "Jinshi",
            image: jinshi_card,
            bg_gif: jinshi_gif,
            description: "Jinshi (壬氏ジンシ, Jinshi) is the deuteragonist of The Apothecary Diaries series. He appears to be a beautiful eunuch who was placed in charge of the Inner Court. He often requests for Maomao to solve mysteries in the Imperial Palace in exchange for rare medicines."
        },
        
    ]

    return (
       
        <div className="w-full min-h-screen gap-5 flex overflow-x-auto items-center px-10 md:px-20 py-4 md:py-8 snap-x snap-mandatory">
             {cards.map((card, index) => (
                  <CardsIndividual key={index} {...card} />
             ))}
        </div>
    )
}

export default Cards
