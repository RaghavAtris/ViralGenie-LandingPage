"use client";
import Navbar from "@/components/marketing/navbar";

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex flex-col items-center justify-center flex-1 px-4 py-12">
        <div className="w-full max-w-3xl rounded-xl overflow-hidden shadow-lg bg-black">
          <video
            src="/demo.mp4"
            controls
            poster="/images/dashboard.png"
            className="w-full h-auto object-cover bg-black"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </main>
    </div>
  );
} 