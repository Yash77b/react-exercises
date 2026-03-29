import { AppleBasket } from "./components/AppleBasket"
import { AppleButton } from "./components/AppleButton"
import { MovieList } from "./components/MovieList" 

function App() {
  return (
    <div className="p-8 max-w-2xl mx-auto">
      {/* Week 3 Part 1 */}
      <AppleButton />
      <AppleBasket />

      {/* Week 3 Part 2: Assignment */}
      <MovieList />
    </div>
  )
}

export default App