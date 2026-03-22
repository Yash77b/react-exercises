import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { DogGallery } from './pages/DogGallery';
import { CatGallery } from './pages/CatGallery'; // 1. මේක එකතු කරන්න

function Home() {
  return <div className="p-8 text-xl">Welcome to the Multi-Gallery App!</div>;
}

export default function App() {
  return (
    <BrowserRouter>
      <nav className="p-4 bg-zinc-800 text-white flex gap-4">
        <Link to="/" className="hover:text-blue-300">Home</Link>
        <Link to="/dogs" className="hover:text-blue-300">Dog Gallery</Link>
        <Link to="/cats" className="hover:text-blue-300">Cat Gallery</Link> {/* 2. මේ ලින්ක් එක දාන්න */}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dogs" element={<DogGallery />} />
        <Route path="/cats" element={<CatGallery />} /> {/* 3. මේ පාර (route) දාන්න */}
      </Routes>
    </BrowserRouter>
  );
}