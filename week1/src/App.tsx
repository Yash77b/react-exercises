import TeamCard from './components/TeamCard'
import { Profile } from './components/Profile'

export default function App() {
  return (
    <div className="p-8 bg-slate-50 min-h-screen flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-8 text-slate-700">Welcome to React!</h1>
      
      {/* Your original Profile card */}
      <div className="mb-12">
        <Profile name="Your Name" role="Junior Developer" />
      </div>

      <h2 className="text-xl font-semibold mb-4">Our Team</h2>

      {/* Step 9: Use 'flex' and 'gap-4' to put them side-by-side */}
      <div className="flex flex-wrap gap-4 justify-center">
        <TeamCard name="Bart Simpson" role="Son" />
        <TeamCard name="Lisa Simpson" role="Daughter" />
        <TeamCard name="Homer Simpson" role="Father" />
      </div>
    </div>
  )
}