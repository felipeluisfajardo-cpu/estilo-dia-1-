
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { REGIONS } from '../constants';

const RegionTrends: React.FC = () => {
  const { regionId } = useParams();
  const region = REGIONS[regionId || 'europa'];

  if (!region) return <div>Región no encontrada</div>;

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-end">
        <img 
          src={region.image} 
          alt={region.title} 
          className="absolute inset-0 w-full h-full object-cover brightness-[0.7]"
        />
        <div className="relative z-10 p-6 md:p-12 text-white max-w-4xl">
          <span className="inline-block px-3 py-1 bg-cobalt text-[10px] font-bold tracking-widest uppercase mb-4">
            Reporte 2026: {region.name}
          </span>
          <h1 className="text-5xl md:text-7xl editorial-font mb-4">{region.title}</h1>
          <p className="text-lg font-medium tracking-wide opacity-90">{region.concept}</p>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 md:px-12 py-20 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="md:col-span-2">
            <h2 className="text-3xl mb-8 editorial-font italic">La visión de Estilo Día</h2>
            <p className="text-xl text-navy/80 leading-relaxed mb-12">
              {region.details}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-gray-50 p-8 border-l-4 border-cobalt">
                <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-4">Must-Haves de la Temporada</h4>
                <ul className="text-sm space-y-3 font-medium text-navy/70">
                  <li>— Capas técnicas</li>
                  <li>— Accesorios modulares</li>
                  <li>— Calzado inteligente</li>
                  <li>— Paleta oceánica</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-8 border-l-4 border-navy">
                <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-4">Colores Clave</h4>
                <div className="flex space-x-2">
                  <div className="w-8 h-8 rounded-full bg-[#001F3F]" title="Navy"></div>
                  <div className="w-8 h-8 rounded-full bg-[#0047AB]" title="Cobalt"></div>
                  <div className="w-8 h-8 rounded-full bg-[#E5E5E5]" title="Cloud"></div>
                  <div className="w-8 h-8 rounded-full bg-[#4682B4]" title="Steel Blue"></div>
                </div>
              </div>
            </div>

            <img src={`https://loremflickr.com/1200/600/fashion,clothing,editorial?random=${region.id}`} className="w-full h-96 object-cover rounded-xl shadow-lg mb-12" alt="Trend detail" />
          </div>

          <aside className="space-y-12">
            <div className="border-t pt-8">
              <h4 className="font-bold text-xs uppercase tracking-widest mb-6">Otras Regiones</h4>
              <nav className="flex flex-col space-y-4">
                {Object.values(REGIONS).filter(r => r.id !== region.id).map(r => (
                  <Link key={r.id} to={`/tendencias/${r.id}`} className="flex items-center group">
                    <img src={r.image} className="w-16 h-16 object-cover rounded mr-4 grayscale group-hover:grayscale-0 transition-all" alt={r.name} />
                    <div>
                      <span className="block font-bold text-sm">{r.name}</span>
                      <span className="text-[10px] text-gray-400 uppercase">{r.title}</span>
                    </div>
                  </Link>
                ))}
              </nav>
            </div>

            <div className="bg-navy p-8 text-white rounded-xl">
              <h4 className="editorial-font italic text-xl mb-4">Tip del Editor</h4>
              <p className="text-xs leading-relaxed opacity-80">
                "En este 2026, la comodidad no es opcional. El estilo reside en la capacidad de las prendas para adaptarse a entornos cambiantes."
              </p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default RegionTrends;
