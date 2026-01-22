
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 px-6 py-4 md:px-12 flex justify-between items-center">
      <Link to="/" className="text-2xl md:text-3xl font-bold tracking-tighter text-navy uppercase editorial-font">
        Estilo Día
      </Link>
      
      <nav className="hidden md:flex space-x-8 text-xs font-semibold tracking-widest uppercase text-navy">
        <Link to="/" className="hover:text-cobalt transition-colors">Inicio</Link>
        <Link to="/tendencias/europa" className="hover:text-cobalt transition-colors">Tendencias</Link>
        <Link to="/shopping" className="hover:text-cobalt transition-colors">Shopping</Link>
        <Link to="/journal" className="hover:text-cobalt transition-colors">Journal</Link>
      </nav>
      
      <div className="flex items-center space-x-4">
        <button className="text-navy">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </button>
        <button className="md:hidden text-navy">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16m-7 6h7" /></svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
