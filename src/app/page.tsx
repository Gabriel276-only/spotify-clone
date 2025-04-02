"use client";

import {  Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Pause,  SkipBack, SkipForward, Volume2, Shuffle, Repeat, MicVocal, Expand, ListMusic  } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import DestaquesSemana from './destaques'; 


export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);


  
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        
        {/* Sidebar */}
        <aside className="w-72 bg-neutral-950 p-6 hidden md:block">
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
        <main className="max-h-screen relative flex-1 p-6 overflow-auto">
          
          {/* Banner */}
          <div className="relative w-full h-64 md:h-80 lg:h-96 flex justify-center">
            <div className="relative w-full h-64 md:h-80 lg:h-96">
              <Image 
                src="/banner.png" 
                alt="Banner" 
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="absolute top-4 left-4 flex gap-3">
              <button className="p-2 rounded-full bg-black/20 text-white hover:bg-black/40">
                <ChevronLeft size={20} />
              </button>
              <button className="p-2 rounded-full bg-black/20 text-white hover:bg-black/40">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Seção principal */}
          <div className="mt-6">
            <h1 className="font-bold text-4xl text-white">Good Afternoon</h1>

            {/* Grid de imagens */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
              {[...Array(8)].map((_, index) => (
                <a href="#" key={index} className="bg-white/10 group rounded-lg overflow-hidden flex items-center hover:bg-white/20 transition-all duration-200 hover:shadow-lg shadow-green-300">
                  <Image
                    src="/BK_Gigantes.png"
                    alt="BK Gigantes"
                    width={80}
                    height={80}
                    className="w-24 h-24"
                  />
                  <span className="m-4 text-white font-medium">Gigantes</span>
                  <button className="cursor-pointer w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                    <Play />
                  </button>
                </a>
              ))}
            </div>
          </div>

          {/* Seção de recomendações */}
          <div className="mt-10">
            <h2 className="font-semibold text-2xl text-white">Made for Gabriel Borges</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4">
              {[
                { src: "/album01.jpg", title: "Daily Mix" },
                { src: "/album02.jpg", title: "Lançamentos" },
                { src: "/album03.jpg", title: "Ouça BK" },
                { src: "/album04.jpg", title: "BK, VND, Pumapjl" },
                { src: "/album05.jpg", title: "Confira os destaques do mês" }
              ].map((album, index) => (
                <a key={index} href="#" className="bg-white/5 p-3 rounded-lg hover:bg-white/10 transition-all duration-200 group:">
                  <Image className="w-full rounded" src={album.src} width={104} height={104} alt={album.title} />
                  <span className="text-zinc-400 font-medium mt-2 block">{album.title}</span>
                  <button className="cursor-pointer w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                    <Play />
                  </button>
                </a>
              ))}
            </div>
        </div>

                <DestaquesSemana/>
          
        </main>
    
      </div>

      {/* Footer - Tocador de música */}
      <footer className="bg-neutral-800 border-t border-neutral-700 p-2 flex items-center justify-between fixed bottom-0 left-0 w-full">
        {/* Info da música */}
        <div className="flex items-center gap-3">
          <Image src="/BK_Gigantes.jpg" alt="BK Gigantes" width={56} height={56} className="w-14 h-14" />
          <div>
            <h3 className="text-white text-sm font-semibold">Gigantes</h3>
            <span className="text-zinc-400 text-xs">BK</span>
          </div>
        </div>

        {/* Controles de reprodução */}
        <div className="flex items-center gap-5">
          <button className="text-zinc-400 hover:text-white">
            <Shuffle size={20} />
          </button>
          <button className="text-zinc-400 hover:text-white">
            <SkipBack size={20} />
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black hover:scale-105 transition-all duration-200" onClick={() => setIsPlaying(!isPlaying)}>
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>
          <button className="text-zinc-400 hover:text-white">
            <SkipForward size={20} />
          </button>
          <button className="text-zinc-400 hover:text-white">
            <Repeat size={20} />
          </button>
        </div>

        {/* Controle de volume */}
        <div className="flex items-center gap-2 text-zinc-400">
          <MicVocal />
          <Volume2 size={20} />
          <ListMusic />
          <Expand />
        </div>
      </footer>
    </div>
  );
}
