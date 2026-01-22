
import React from 'react';

const Journal: React.FC = () => {
  const posts = [
    {
      title: "Milán 2026: El triunfo de la sobriedad",
      category: "Runway Report",
      date: "JAN 12, 2026",
      image: "https://loremflickr.com/800/600/fashion,runway,milan"
    },
    {
      title: "Generación Alpha: El nuevo maximalismo",
      category: "Culture",
      date: "JAN 10, 2026",
      image: "https://loremflickr.com/800/600/fashion,youth,style"
    },
    {
      title: "Pandora x Bridgerton: Joyería para la nueva era",
      category: "Collabs",
      date: "JAN 08, 2026",
      image: "https://loremflickr.com/800/600/jewelry,fashion,luxury"
    },
    {
      title: "Azul Atlántico: Cómo llevar el color del año",
      category: "Styling Guide",
      date: "JAN 05, 2026",
      image: "https://loremflickr.com/800/600/fashion,blue,model"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-32 pb-20 px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 gap-8">
          <h1 className="text-6xl md:text-8xl editorial-font italic tracking-tighter">Fashion Journal</h1>
          <div className="flex space-x-6 text-[10px] font-bold uppercase tracking-widest text-gray-400">
            <button className="text-navy underline">Todo</button>
            <button className="hover:text-navy">Desfiles</button>
            <button className="hover:text-navy">Cultura</button>
            <button className="hover:text-navy">Styling</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {posts.map((post, i) => (
            <article key={i} className="group cursor-pointer">
              <div className="relative h-[400px] mb-8 overflow-hidden bg-gray-100">
                <img 
                  src={post.image} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000" 
                  alt={post.title} 
                />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/10 transition-colors"></div>
              </div>
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-cobalt font-bold text-[10px] uppercase tracking-widest">{post.category}</span>
                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                <span className="text-gray-400 font-bold text-[10px] uppercase tracking-widest">{post.date}</span>
              </div>
              <h2 className="text-3xl md:text-4xl editorial-font mb-4 group-hover:underline decoration-1 underline-offset-4">{post.title}</h2>
              <p className="text-gray-500 text-sm leading-relaxed max-w-lg mb-6">
                Exploramos los detalles que definieron la semana más importante del año y cómo estas tendencias llegarán a las calles en los próximos meses...
              </p>
              <button className="text-[10px] font-bold uppercase tracking-widest group-hover:text-cobalt transition-colors">Leer más →</button>
            </article>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-3xl editorial-font mb-8">Suscríbete al Hub 2026</h3>
          <p className="text-gray-500 mb-10">Recibe reportes semanales de inteligencia de moda directamente en tu bandeja de entrada.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input type="email" placeholder="email@fashion.com" className="flex-1 px-8 py-4 rounded-full border border-gray-200 focus:outline-none" />
            <button className="bg-navy text-white px-12 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-cobalt transition-colors">Unirse</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Journal;
