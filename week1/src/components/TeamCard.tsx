import { useState } from 'react'

// Step 3 & 4: Define what data the card needs
interface CardProps {
  name: string;
  role: string;
}

export default function TeamCard({ name, role }: CardProps) {
  // Step 5: Add the "votes" state
  const [votes, setVotes] = useState(0);

  return (
    // Step 6 & 7: Style with Tailwind
    <div className="bg-white border border-blue-200 rounded-lg p-4 shadow-md text-center w-48">
      <h3 className="font-bold text-lg">{name}</h3>
      <p className="text-gray-600 text-sm mb-4">{role}</p>
      
      <button 
        onClick={() => setVotes(votes + 1)}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full transition-colors"
      >
        Vote ({votes})
      </button>
    </div>
  )
}