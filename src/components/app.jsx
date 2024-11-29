import PlayersAddForm from "./players-add-form"
import PlayersFilter from "./players-filter"
import PlayersList from "./players-list"

const App = () => {
  return (
    <div className="h-screen w-full relative app">
      <div className="absolute inset-0 bg-black/80 z-10 blur-3xl" />
      <div className="relative z-50 grid grid-cols-2 gap-4 container max-w-6xl h-full mx-auto  pt-12">
        <div>
          < PlayersList />
        </div>  
        <div>
          <PlayersAddForm />
          <PlayersFilter />
        </div>
      </div>
    </div>
  )
}

export default App