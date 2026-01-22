
import { NewsItem, Brand, RegionTrend } from './types';

export const FLASH_NEWS: NewsItem[] = [
  { id: '1', title: "Legado de Valentino Garavani: Homenaje en Roma", category: "HAUTE COUTURE", date: "JAN 2026" },
  { id: '2', title: "Louis Vuitton celebra 130 años del Monograma", category: "LUXURY", date: "JAN 2026" },
  { id: '3', title: "Azul Atlántico: El color que dominará las pasarelas de Milán", category: "TRENDS", date: "JAN 2026" },
  { id: '4', title: "Pandora x Bridgerton: La colección de joyas más esperada", category: "COLLECTION", date: "JAN 2026" },
];

export const BRANDS: Brand[] = [
  {
    name: "Almada Label",
    specialty: "Minimalismo Radical",
    description: "Sastrería deconstruida para el día a día.",
    image: "https://loremflickr.com/800/1000/fashion,minimalist,clothing"
  },
  {
    name: "Mashu",
    specialty: "Bolsos Sustentables",
    description: "Diseño artesanal con materiales circulares.",
    image: "https://loremflickr.com/800/1000/handbag,fashion,luxury"
  },
  {
    name: "Tory Burch",
    specialty: "Capri Blue Elegance",
    description: "El regreso de la estética Riviera Italiana.",
    image: "https://loremflickr.com/800/1000/fashion,resort,dress"
  },
  {
    name: "Zara Pre-Owned",
    specialty: "Moda Circular",
    description: "La plataforma líder de reventa de lujo asequible.",
    image: "https://loremflickr.com/800/1000/fashion,vintage,clothing"
  }
];

export const REGIONS: Record<string, RegionTrend> = {
  europa: {
    id: 'europa',
    name: "Europa",
    title: "El Nuevo Lujo Sobrio",
    concept: "Transición post-Armani y Sastrería Relajada",
    details: "En 2026, Europa abraza el 'Azul Atlántico'. La elegancia no grita; se manifiesta en cortes perfectos y materiales nobles que fluyen con el cuerpo.",
    image: "https://loremflickr.com/1200/800/fashion,paris,streetstyle"
  },
  asia: {
    id: 'asia',
    name: "Asia",
    title: "Tecnología y Maximalismo",
    concept: "Fibras Inteligentes y Bubble Pants",
    details: "Desde Seúl y Tokio, la moda se vuelve interactiva. Tejidos que cambian de color con el sol y volúmenes exagerados definen la vanguardia asiática.",
    image: "https://loremflickr.com/1200/800/fashion,tokyo,cyberpunk"
  },
  america: {
    id: 'america',
    name: "América",
    title: "Retro-Nostalgia 2016",
    concept: "2026 is the New 2016",
    details: "El regreso de los filtros vintage aplicados al streetwear. Denim de alta gama y el resurgimiento de las siluetas que marcaron una década.",
    image: "https://loremflickr.com/1200/800/fashion,newyork,denim"
  },
  escandinavia: {
    id: 'escandinavia',
    name: "Escandinavia",
    title: "Eco-Gorpcore",
    concept: "Moda Funcional Extrema",
    details: "Diseño modular para inviernos intensos. Materiales orgánicos que resisten el clima más duro sin sacrificar la estética minimalista nórdica.",
    image: "https://loremflickr.com/1200/800/fashion,nordic,winter"
  }
};
