import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <div 
        onClick={(e) => e.stopPropagation()} 
        className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-sm relative"
        style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '1rem', width: '400px', color: 'black' }}
      >
        <div className="mb-6">{children}</div>
        <button 
          onClick={onClose} 
          className="w-full bg-gray-200 text-gray-800 font-bold py-2 rounded hover:bg-gray-300 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
}