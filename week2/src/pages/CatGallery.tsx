import React, { useState, useEffect } from 'react';

export function CatGallery() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/images/search?limit=10')
      .then((response) => response.json())
      .then((data) => setCats(data)) 
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Cat Gallery</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cats.map((cat: any) => (
          <img 
            key={cat.id} 
            src={cat.url} 
            alt="A cute cat" 
            className="rounded-xl shadow-md w-full h-64 object-cover"
          />
        ))}
      </div>
    </div>
  );
}