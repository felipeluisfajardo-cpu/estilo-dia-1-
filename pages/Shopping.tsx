
import React from 'react';
import { BRANDS } from '../constants';

const Shopping: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="pt-32 pb-20 px-6 md:px-12 bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-cobalt font-bold tracking-[0.3em] uppercase text-[10px] mb-6 block">Directorio 2026</span>
          <h1 className="text-5xl md:text-7xl editorial-font mb-8">Shopping Guide</h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Seleccionamos las marcas que definen el mercado este año. Desde el minimalismo radical hasta la economía circular.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-12 py-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {BRANDS.map((brand, i) => (
            <div key={i} className="group">
              <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-gray-100 shadow-inner">
                <img 
                  src={brand.image} 
                  alt={brand.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 text-[10px] font-bold text-navy uppercase tracking-widest">
                  Featured 2026
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2 tracking-tight">{brand.name}</h3>
              <p className="text-cobalt font-bold text-[10px] uppercase tracking-widest mb-4">{brand.specialty}</p>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">{brand.description}</p>
              <button className="w-full border border-navy py-4 text-[10px] font-bold uppercase tracking-widest hover:bg-navy hover:text-white transition-all">
                Explorar Colección
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 py-24 bg-white border-t border-gray-100">
        <div className="bg-navy rounded-3xl p-12 md:p-24 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="text-white max-w-xl">
            <h2 className="text-4xl md:text-6xl editorial-font mb-8 italic">¿Buscas algo específico?</h2>
            <p className="text-white/70 text-lg mb-8">
              Nuestro StyleBot puede ayudarte a encontrar tiendas físicas y boutiques exclusivas en cualquier latitud.
            </p>
            <button className="bg-cobalt text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-navy transition-all">
              Hablar con StyleBot
            </button>
          </div>
          <div className="w-full md:w-1/3 aspect-square bg-white/5 rounded-2xl flex items-center justify-center p-12">
            <img 
              src="https://loremflickr.com/600/600/fashion,boutique,store" 
              className="w-full h-full object-cover rounded-xl rotate-3 shadow-2xl"
              alt="Tech shopping"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shopping;
