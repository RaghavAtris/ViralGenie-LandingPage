"use client";
import Footer from "@/components/marketing/footer";
import { useRef, useState } from "react";

const demoVideos = [
  {
    src: "/demo.mp4",
    title: "Watch A Quick Platform Demo",
    poster: "/images/dashboard.png",
  },
  {
    src: "/demo.mp4",
    title: "Why ViralGenie Isn't Just Another AI Post Generator",
    poster: "/images/aicoach.png",
  },
];

export default function DemoPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState(0);

  const openModal = (idx: number) => {
    setActiveVideo(idx);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Custom Demo Navbar */}
      <header className="sticky top-0 w-full h-16 bg-background/80 backdrop-blur-sm z-50 border-b border-foreground/5">
        <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-4 relative">
          {/* Left: ViralGenie */}
          <a
            href="https://viralgenie.io"
            className="flex items-center gap-2 text-xl font-semibold text-foreground hover:text-orange-500 transition-colors"
          >
            <img src="/icons/icon.png" alt="App Icon" className="w-8" />
            <span className="hidden md:block">ViralGenie</span>
          </a>
          {/* Center: Home */}
          <a
            href="https://viralgenie.io"
            className="absolute left-1/2 -translate-x-1/2 text-base font-medium text-foreground hover:text-orange-500 transition-colors px-4 py-2 rounded"
          >
            Home
          </a>
          {/* Right: Start For Free */}
          <a href="https://app.viralgenie.io">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2 rounded-lg transition-colors">
              Start For Free
            </button>
          </a>
        </div>
      </header>
      <main className="flex flex-col items-center justify-center flex-1 px-4 py-12 w-full">
        {/* Heading */}
        <div className="max-w-2xl w-full text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">See ViralGenie in action</h1>
        </div>
        {/* Video Demo Cards */}
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {demoVideos.map((video, idx) => (
            <div
              key={idx}
              className="relative rounded-xl overflow-hidden shadow-lg bg-black group cursor-pointer aspect-[16/10] flex items-center justify-center"
              onClick={() => openModal(idx)}
            >
              <img
                src={video.poster}
                alt={video.title}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-200"
              />
              <div className="relative z-10 flex flex-col items-center justify-center">
                <div className="bg-white/80 rounded-full p-4 shadow-lg flex items-center justify-center mb-4">
                  {/* Play Icon (Bootstrap Play Circle) */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16" className="text-orange-500">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.271 5.055A.5.5 0 0 0 5.5 5.5v5a.5.5 0 0 0 .771.424l4-2.5a.5.5 0 0 0 0-.848l-4-2.5z"/>
                  </svg>
                </div>
                <span className="text-lg font-semibold text-white drop-shadow-lg text-center px-2">
                  {video.title}
                </span>
              </div>
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-200" />
            </div>
          ))}
        </div>
        {/* Video Modal */}
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
            <div className="relative bg-background rounded-xl shadow-2xl max-w-6xl w-full p-6 flex flex-col items-center">
              <button
                className="absolute top-4 right-4 text-3xl text-muted-foreground hover:text-foreground transition-colors z-10"
                onClick={closeModal}
                aria-label="Close"
              >
                &times;
              </button>
              <video
                src={demoVideos[activeVideo].src}
                controls
                autoPlay
                poster={demoVideos[activeVideo].poster}
                className="w-full h-auto rounded-lg bg-black"
                style={{ maxHeight: "80vh" }}
              >
                Your browser does not support the video tag.
              </video>
              <div className="mt-6 text-xl font-semibold text-center text-foreground">
                {demoVideos[activeVideo].title}
              </div>
            </div>
            {/* Overlay click closes modal */}
            <div className="fixed inset-0 z-40" onClick={closeModal} />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
} 