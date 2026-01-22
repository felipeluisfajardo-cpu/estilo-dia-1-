
import React, { useState } from 'react';
import { getOutfitRecommendation } from '../services/gemini';

const WeatherWidget: React.FC = () => {
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<any>(null);

  const handleRecommend = async () => {
    if (!city.trim()) return;
    setLoading(true);
    const rec = await getOutfitRecommendation(city);
    setRecommendation(rec);
    setLoading(false);
  };

  return (
    <section className="bg-gray-50 py-20 px-6 md:px-12 rounded-3xl mx-4 md:mx-12 my-20 border border-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl mb-6 editorial-font">Clima x Outfit</h2>
        <p className="text-gray-600 mb-12 max-w-lg mx-auto">
          Ingresa tu ubicación y nuestro oráculo de moda sugerirá el look perfecto basado en las tendencias globales de 2026.
        </p>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-12">
          <input 
            type="text" 
            placeholder="Ej. Londres, Ciudad de México, Tokio..." 
            className="flex-1 px-8 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cobalt/20"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button 
            onClick={handleRecommend}
            disabled={loading}
            className="bg-navy text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-cobalt transition-colors disabled:opacity-50"
          >
            {loading ? 'Analizando...' : 'Obtener Sugerencia'}
          </button>
        </div>

        {recommendation && (
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 text-left animate-in fade-in duration-700">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <span className="inline-block px-3 py-1 bg-cobalt/10 text-cobalt text-[10px] font-bold tracking-widest uppercase mb-4">
                  {recommendation.colorPalette}
                </span>
                <h3 className="text-2xl font-bold mb-4">{recommendation.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  "{recommendation.description}"
                </p>
                <ul className="space-y-2">
                  {recommendation.items.map((item: string, i: number) => (
                    <li key={i} className="flex items-center text-sm font-medium">
                      <span className="w-1.5 h-1.5 bg-cobalt rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full md:w-1/3 h-64 bg-gray-200 rounded-xl overflow-hidden relative">
                <img 
                  src={`https://loremflickr.com/600/800/fashion,outfit,model?random=${city}`} 
                  alt="Style inspiration"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default WeatherWidget;
