import Hero from "./Components/hero/hero"
import floral_pattern from "./assets/img/floral_pattern.png"
import Bar from "./Components/bar/bar"
import Cards from "./Components/cards/cards"

function App() {

  return (
    <div className="relative min-h-screen bg-[radial-gradient(circle_at_center,_var(--color-green-dark-100),_var(--color-green-dark-200))]">

      <div 
        className="absolute inset-0 bg-repeat opacity-30 pointer-events-none"
        style={{ backgroundImage: `url(${floral_pattern})` }}
      />
      

      <div className="relative z-10 flex flex-col md:flex-row min-h-screen">
        <Bar />
        <div className="flex flex-col w-full flex-1">
          <Hero />
          <Cards />
        </div>
      </div>
    </div>
  )
}

export default App
