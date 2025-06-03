import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://gist.githubusercontent.com/calvez/56bec47cb9c97d9999574adc65ef5368/raw/51f01cb2a160748d87dd40eae7d3785272a87355/all.json')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Hiba a lekérdezés során:', error);
      });
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white text-gray-900">
  <h1 className="text-4xl font-extrabold mb-8 border-b-4 border-teal-600 pb-2">
    Műalkotások listája
  </h1>
  <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
    {data.map((item, index) => (
      <div key={index} className="bg-gray-50 rounded-lg shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <img
          src={`https://picsum.photos/seed/${item.alkotasAzonosito}/400/250`}
          alt={item.megjelenitendoNev}
          className="w-full object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2 text-teal-600">{item.megjelenitendoNev}</h2>
          <p className="text-gray-700"><span className="font-semibold">Név:</span> {item.nev}</p>
          <p className="text-gray-700"><span className="font-semibold">Alkotás azonosító:</span> {item.alkotasAzonosito}</p>
          <p className="text-gray-700"><span className="font-semibold">Kezdeti időpont:</span> {item.keletkezesKezdoIdopontjaInt}</p>
          <p className="text-gray-700"><span className="font-semibold">Típus:</span> {item.tipus}</p>
        </div>
      </div>
    ))}
  </div>
</div>
  );
};

export default HomePage;
