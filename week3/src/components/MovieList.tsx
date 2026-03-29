import React, { useState } from 'react';
import { useMovieStore } from '../store/useMovieStore';

export function MovieList() {
  const { movies, toggleWatched } = useMovieStore();
  const [filterType, setFilterType] = useState<'all' | 'watched' | 'unwatched'>('all');

  // Filtering Logic
  const filteredMovies = movies.filter((m) => {
    if (filterType === 'watched') return m.watched;
    if (filterType === 'unwatched') return !m.watched;
    return true; 
  });

  return (
    <div className="mt-8 p-6 bg-white rounded-xl shadow-sm border border-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-slate-800">Movie library</h2>

      {/* Filter Buttons */}
      <div className="flex gap-2 mb-6">
        <button 
          onClick={() => setFilterType('all')} 
          className={`px-4 py-1.5 rounded-full border ${filterType === 'all' ? 'bg-zinc-100 font-bold' : 'bg-white'}`}
        >
          All movies
        </button>
        <button 
          onClick={() => setFilterType('watched')} 
          className={`px-4 py-1.5 rounded-full border ${filterType === 'watched' ? 'bg-zinc-100 font-bold' : 'bg-white'}`}
        >
          Watched movies
        </button>
        <button 
          onClick={() => setFilterType('unwatched')} 
          className={`px-4 py-1.5 rounded-full border ${filterType === 'unwatched' ? 'bg-zinc-100 font-bold' : 'bg-white'}`}
        >
          Kesken
        </button>
      </div>

      {/* Movies List */}
      <div className="space-y-4">
        {filteredMovies.map((movie) => (
          <div key={movie.id} className="flex items-center justify-between border-b pb-2">
            <div className="flex items-center gap-2">
              <span className="text-gray-700">{movie.title}</span>
              <span>{movie.watched ? '✅ Watched' : '⏳ Unwatched'}</span>
            </div>
            <button 
              onClick={() => toggleWatched(movie.id)}
              className="bg-zinc-50 px-3 py-1 rounded border hover:bg-zinc-100 text-sm font-medium"
            >
              Change state
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}