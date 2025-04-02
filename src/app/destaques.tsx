import { useRef, useState } from "react";
import Image from "next/image";

export default function DestaquesSemana() {
  const containerRef = useRef<HTMLDivElement>(null); // Referência para o contêiner
  const [currentIndex, setCurrentIndex] = useState(0); // Estado para controlar o índice atual

  const albums = [
    { src: "/album01.jpg", title: "Daily Mix" },
    { src: "/album02.jpg", title: "Lançamentos" },
    { src: "/album03.jpg", title: "Ouça BK" },
    { src: "/album04.jpg", title: "BK, VND, Pumapjl" },
    { src: "/album05.jpg", title: "Confira os destaques do mês" },
    { src: "/album06.jpg", title: "Daily Mix" },
    { src: "/album07.jpg", title: "Lançamentos" },
    { src: "/album08.jpg", title: "Ouça BK" },
  ];

  const handleScroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const itemWidth = containerRef.current.children[0]?.offsetWidth || 0;
      const scrollAmount = itemWidth * 4; // Rola para a largura de 4 itens

      if (direction === "right") {
        setCurrentIndex((prevIndex) => Math.min(prevIndex + 4, albums.length - 4));
      } else {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 4, 0));
      }

      containerRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="mb-10 flex flex-col justify-center items-center">
      <h2 className="font-semibold text-2xl text-white mb-4">Destaques da semana</h2>
      
      <div className="flex items-center">
        <button
          onClick={() => handleScroll("left")}
          className="py-2 px-4 mr-4 bg-green-400 text-white rounded-full hover:bg-green-500 transition-all duration-200"
        >
          ◀
        </button>

        <div
          ref={containerRef}
          className="flex overflow-x-auto gap-4 pb-4 scroll-smooth justify-center items-center"
        >
          {albums.slice(currentIndex, currentIndex + 4).map((album, index) => (
            <a key={index} href="#" className="bg-white/5 p-3 rounded-lg hover:bg-white/10 transition-all duration-200 overflow-hidden w-64">
              <Image className="w-full rounded" src={album.src} width={104} height={104} alt={album.title} />
              <span className="text-zinc-400 font-medium mt-2 block">{album.title}</span>
            </a>
          ))}
        </div>

        <button
          onClick={() => handleScroll("right")}
          className="py-2 px-4 ml-4 bg-green-400 text-white rounded-full hover:bg-green-500 transition-all duration-200"
        >
          ▶
        </button>
      </div>
    </div>
  );
}
