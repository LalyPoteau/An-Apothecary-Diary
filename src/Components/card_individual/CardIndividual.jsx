import React from 'react';

function CardsIndividual({name, image, bg_gif, description, onSelectCharacter, selectedCharacter}) {
  const isSelected = selectedCharacter && selectedCharacter.name === name;

  const handleSelectCharacter = () => {
    onSelectCharacter({ name, image, bg_gif, description });
  };


  return (
    <div 
      onClick={handleSelectCharacter} 
      className="w-[400px] min-w-[400px] shrink-0 snap-center min-h-[500px] h-[75vh] md:h-[700px] rounded-3xl bg-[radial-gradient(circle_at_center,_var(--color-purple-100),_var(--color-purple-200))] overflow-hidden shadow-2xl relative cursor-pointer transition-all duration-300 hover:-translate-y-2"
    >
      <img 
        src={image} 
        alt={name} 
        className={`w-full h-full object-cover z-0 shadow-2xl pointer-events-none ${isSelected ? "blur-sm transition-all duration-300" : ""}`} 
      />
    </div>
  );
}

export default CardsIndividual;
