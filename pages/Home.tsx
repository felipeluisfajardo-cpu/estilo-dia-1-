
import React from 'react';
import { Link } from 'react-router-dom';
import { FLASH_NEWS, REGIONS } from '../constants';
import WeatherWidget from '../components/WeatherWidget';

const Home: React.FC = () => {
  return (
    <main>
      {/* Flash News Banner */}
      <div className="bg-navy py-2 overflow-hidden whitespace-nowrap border-b border-navy/20">
        <div className="inline-block animate-marquee">
          {FLASH_NEWS.concat(FLASH_NEWS).map((news, i) => (
            <span key={i} className="text-white text-[10px] font-bold tracking-[0.2em] uppercase mx-12">
              <span className="text-cobalt mr-3">●</span> {news.category}: {news.title}
            </span>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://loremflickr.com/1920/1080/fashion,model,runway" 
            alt="Fashion Editorial" 
            className="w-full h-full object-cover grayscale-[0.2] brightness-[0.8]"
          />
          <div className="absolute inset-0 bg-navy/20"></div>
        </div>
        
        <div className="relative z-10 text-center px-6">
          <p className="text-white font-bold tracking-[0.4em] uppercase text-xs mb-6 drop-shadow-md">Global Fashion Hub 2026</p>
          <h1 className="text-5xl md:text-8xl text-white mb-8 leading-tight max-w-4xl mx-auto editorial-font italic drop-shadow-lg">
            Tu brújula de moda en cualquier latitud.
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Link to="/tendencias/europa" className="bg-navy text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-cobalt transition-all">
              Explorar Tendencias
            </Link>
            <Link to="/journal" className="bg-white/90 backdrop-blur-sm text-navy px-12 py-5 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-white transition-all border border-navy/10">
              Ver Journal
            </Link>
          </div>
        </div>
      </section>

      {/* Climate x Outfit Section */}
      <WeatherWidget />

      {/* Region Grid */}
      <section className="px-6 md:px-12 py-20 bg-white">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-cobalt font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">Explora el Mundo</span>
            <h2 className="text-4xl md:text-6xl editorial-font">Tendencias por Región</h2>
          </div>
          <p className="max-w-md text-gray-500 text-sm leading-relaxed">
            Reportes exclusivos desde los epicentros de estilo. Descubre cómo cada latitud interpreta el concepto de vanguardia en este 2026.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.values(REGIONS).map((region) => (
            <Link key={region.id} to={`/tendencias/${region.id}`} className="group block">
              <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-gray-100 rounded-lg">
                <img 
                  src={region.image} 
                  alt={region.name} 
                  className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              <h3 className="text-xl font-bold mb-2 uppercase tracking-tighter">{region.name}</h3>
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-3 font-semibold">{region.title}</p>
              <span className="text-[10px] font-bold text-cobalt group-hover:underline">VER REPORTE COMPLETO →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Catchy Phrase */}
      <section className="py-32 bg-navy text-white text-center px-6">
        <h2 className="text-4xl md:text-7xl italic editorial-font mb-12">"Viste la inteligencia del clima."</h2>
        <div className="w-20 h-0.5 bg-cobalt mx-auto"></div>
      </section>
    </main>
  );
};

export default Home;
