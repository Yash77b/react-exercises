import React, { useState } from 'react';
import { Modal } from './components/Modal';

// --- Part 1: ---
const CAMPING_GEAR = [
  { id: 1, name: 'Tent', weight: 3500 },
  { id: 2, name: 'Sleeping Bag', weight: 1200 },
  { id: 3, name: 'Camping Stove', weight: 800 }
];

export default function App() {
  // --- Part 1: ---
  const [isOpen, setIsOpen] = useState(false);
  const totalWeight = CAMPING_GEAR.reduce((sum, item) => sum + item.weight, 0);

  // --- Part 2:  ---
  const [showInfo, setShowInfo] = useState(false);
  const [showOther, setShowOther] = useState(false);

  return (
    <div className="p-8 flex flex-col gap-12">
      
      {/* --- PART 1: --- */}
      <section className="border-b pb-10">
        <h2 className="text-2xl font-bold mb-4">Camping Trip Summary</h2>
        <p className="text-xl font-black text-blue-600 mb-4">
          Backpack weight: {totalWeight} g
        </p>
        <button 
          onClick={() => setIsOpen(true)} 
          className="bg-zinc-800 text-white px-4 py-2 rounded shadow hover:bg-zinc-700"
        >
          View Equipment
        </button>

        {isOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 text-black">
            <div className="bg-white p-8 rounded-xl shadow-2xl w-80">
              <h3 className="text-xl font-bold mb-4">Packed Items</h3>
              <ul className="mb-6 space-y-2">
                {CAMPING_GEAR.map(item => (
                  <li key={item.id} className="border-b pb-1 flex justify-between">
                    <span>{item.name}</span>
                    <span className="text-gray-500">{item.weight} g</span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => setIsOpen(false)} 
                className="w-full bg-gray-200 text-gray-800 font-bold py-2 rounded hover:bg-gray-300"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </section>

      {/* --- PART 2: --- */}
      <section className="text-center">
        <h1 className="text-3xl font-bold mb-8">Modaalin testaus</h1>
        <div className="flex justify-center gap-4">
          <button 
            onClick={() => setShowInfo(true)}
            className="bg-blue-700 text-white px-6 py-2 rounded font-bold hover:bg-blue-800"
          >
            Show Details
          </button>
          <button 
            onClick={() => setShowOther(true)}
            className="bg-emerald-700 text-white px-6 py-2 rounded font-bold hover:bg-emerald-800"
          >
            Show Other Info
          </button>
        </div>
      </section>

      <Modal isOpen={showInfo} onClose={() => setShowInfo(false)}>
        <h2 style={{ color: '#2563eb', fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
          First Modal
        </h2>
        <p className="text-black">This is content injected inside the modal!</p>
      </Modal>

      <Modal isOpen={showOther} onClose={() => setShowOther(false)}>
        <h2 style={{ color: '#059669', fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
          Second popup with same Modal component!!!
        </h2>
        <p className="text-black">Content changes but the Modal is the same!</p>
      </Modal>

    </div>
  );
}