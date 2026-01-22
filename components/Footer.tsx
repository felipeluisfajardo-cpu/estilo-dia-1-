
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-32 pb-12 px-6 md:px-12 border-t border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold tracking-tighter text-navy uppercase editorial-font mb-8">Estilo Día</h2>
          <p className="text-gray-500 max-w-sm mb-8 leading-relaxed">
            La plataforma líder en inteligencia de moda y guía climática. Oráculo de tendencias para el mundo globalizado de 2026.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-navy hover:text-cobalt">Instagram</a>
            <a href="#" className="text-navy hover:text-cobalt">LinkedIn</a>
            <a href="#" className="text-navy hover:text-cobalt">Vogue Hub</a>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-8">Secciones</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><a href="#" className="hover:text-navy">Tendencias Europa</a></li>
            <li><a href="#" className="hover:text-navy">Shopping Directory</a></li>
            <li><a href="#" className="hover:text-navy">Fashion Journal</a></li>
            <li><a href="#" className="hover:text-navy">Climate Guide</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-8">Soporte</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><a href="#" className="hover:text-navy">StyleBot Support</a></li>
            <li><a href="#" className="hover:text-navy">Contacto</a></li>
            <li><a href="#" className="hover:text-navy">Privacidad</a></li>
            <li><a href="#" className="hover:text-navy">Términos 2026</a></li>
          </ul>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-100 pt-12 gap-6">
        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">© 2026 Estilo Día. Todos los derechos reservados.</p>
        <p className="text-[10px] text-navy font-bold uppercase tracking-[0.3em]">Tendencias hoy, estilo siempre.</p>
      </div>
    </footer>
  );
};

export default Footer;
