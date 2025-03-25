"use client";

import { useState, useRef } from "react";

export default function Home() {
  const [showImages, setShowImages] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleClick = () => {
    setShowImages(true);
    if (audioRef.current) {
      audioRef.current.currentTime = 6;
      audioRef.current.volume = 0.03;
      audioRef.current.play().catch((error) => {
        console.error("Erro ao reproduzir áudio:", error);
      });
    }
  };

  const handleReset = () => {
    setShowImages(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  return (
    <main className="flex flex-col justify-center items-center min-h-screen w-full p-6 pb-40">
      <audio ref={audioRef} src="/songs/song-meme" preload="auto" />

      {!showImages ? (
        <>
          <div className="flex flex-col items-center absolute top-64 transform -translate-y-1/2">
            <div className="flex justify-center p-6 w-40 h-40 rounded-full bg-blue-500 hover:bg-blue-600 transition-colors">
              <button className="font-bold" onClick={handleClick}>
                Clique aqui
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center">
          <img
            className="w-80 h-80 object-cover rounded-2xl"
            src="/EZP5cbNWAAAhmz0.jpg"
            alt="Imagem substituta"
          />
          <div className="mt-4 flex flex-col items-center">
            <img
              className="w-40 h-40 object-cover mb-2"
              src="/meme-mike.png"
              alt="Outra imagem"
            />
            <p className="text-center max-w-md text-3xl">
              Tira a mão da minha bunda
            </p>

            <button
              className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-full font-bold hover:bg-blue-600 transition-colors"
              onClick={handleReset}
            >
              Voltar ao início
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
