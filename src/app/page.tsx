import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-72 bg-neutral-950 p-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-600"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-600"></div>
            <div className="w-3 h-3 rounded-full bg-green-600"></div>
          </div>

          {/* Navegação */}
          <nav className="space-y-4 mt-10">
            <a href="#" className="flex items-center gap-2 text-sm font-semibold text-white hover:text-gray-400">
              <HomeIcon size={20} />
              Home
            </a>
            <a href="#" className="flex items-center gap-2 text-sm font-semibold text-white hover:text-gray-400">
              <Search size={20} />
              Search
            </a>
            <a href="#" className="flex items-center gap-2 text-sm font-semibold text-white hover:text-gray-400">
              <Library size={20} />
              Library
            </a>
          </nav>

          {/* Playlists */}
          <nav className="border-t border-gray-800 mt-10 pt-10 flex flex-col gap-2">
            {[...Array(5)].map((_, index) => (
              <a key={index} href="#" className="text-zinc-400 hover:text-zinc-200">
                Playlist {index + 1}
              </a>
            ))}
          </nav>
        </aside>

        {/* Conteúdo principal */}
        <main className="flex-1 p-6">
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-full bg-black/20 text-white hover:bg-black/40">
              <ChevronLeft size={20} />
            </button>
            <button className="p-2 rounded-full bg-black/20 text-white hover:bg-black/40">
              <ChevronRight size={20} />
            </button>
          </div>

          <h1 className="font-bold text-4xl mt-10 text-white">Good Afternoon</h1>

          {/* Grid de imagens */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            {[...Array(6)].map((_, index) => (
              <a href="#" key={index} className="bg-white/10 group rounded-lg overflow-hidden flex items-center hover:bg-white/20 transition-all duration-200 hover:shadow-lg shadow-green-300">
                <Image
                  src="/BK_Gigantes.png"
                  alt="BK Gigantes"
                  width={80}
                  height={80}
                  className="w-24 h-24"
                />
                <span className="m-4 text-white font-medium">Gigantes</span>
                <button className=" cursor-pointer w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                  <Play />
                </button>
              </a>
            ))}
          </div>

          {/* Seção de recomendações */}
          <div>
            <h2 className="font-semibold text-2xl mt-10">Made for Gabriel Borges</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4 hover:text-zinc-100">
              {[
                { src: "/album01.jpg", title: "Daily Mix" },
                { src: "/album02.jpg", title: "Lançamentos" },
                { src: "/album03.jpg", title: "Ouça BK" },
                { src: "/album04.jpg", title: "BK, VND, Pumapjl" },
                { src: "/album05.jpg", title: "confira os destaques do mês" }
              ].map((album, index) => (
                <a key={index} href="#" className="bg-white/5 p-3 rounded hover:bg-white/10 transition-all duration-200 ">
                  <Image className="w-full" src={album.src} width={104} height={104} alt={album.title} />
                  <span className="text-zinc-400 font-medium mt-2 block  ">{album.title}</span>
                </a>
              ))}
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-neutral-800 border-t border-neutral-700 p-6 text-white text-center">
        Desenvolvido por Gabriel Borges
      </footer>
    </div>
  );
}
