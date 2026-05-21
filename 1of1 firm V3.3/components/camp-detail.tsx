"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import HamburgerMenu from "./hamburger-menu"

interface CampDetailProps {
  onNavigate?: (page: string) => void
}

export default function CampDetail({ onNavigate }: CampDetailProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  const camps = [
    {
      number: "02",
      dates: "NOVEMBER 20 - 30, 2026",
      location: "MEDELLIN, COLOMBIA",
    },
    {
      number: "03",
      dates: "JANUARY 12 - 22, 2027",
      location: "CARTAGENA, COLOMBIA",
    },
  ]

  const galleryImages = [
    "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&q=80",
    "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400&q=80",
    "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&q=80",
    "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?w=400&q=80",
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between p-4 md:p-6">
        <button onClick={() => onNavigate?.("home")}>
          <img src="/logo.png" alt="1 OF 1 FIRM" className="h-10 md:h-12 w-auto" />
        </button>
        <button
          onClick={() => setMenuOpen(true)}
          className="flex flex-col gap-1.5 p-2"
          aria-label="Open menu"
        >
          <span className="w-6 h-px bg-white" />
          <span className="w-6 h-px bg-white" />
        </button>
      </header>

      <HamburgerMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        onNavigate={onNavigate}
      />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-end">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260508-WA0014-Ct5bg9GgOF6bXHD5DINx9EVqmEWr5W.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

        {/* Hero Content */}
        <div className="relative z-10 p-6 md:p-12 pb-12 md:pb-16 w-full max-w-2xl">
          <p className="text-white/70 text-xs tracking-[0.3em] mb-4">1 OF 1 UNIVERSE</p>
          
          <h1 className="text-6xl md:text-8xl font-light tracking-[0.3em] mb-6">
            CAMP
          </h1>
          
          <p className="text-amber-500 text-sm tracking-[0.2em] mb-6">
            ARTISTS / GROWTH
          </p>
          
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-px bg-white/30" />
            <svg className="w-3 h-3 text-amber-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10L12 0Z" />
            </svg>
          </div>
          
          <p className="text-white/80 text-sm leading-relaxed mb-8">
            For emerging and<br />
            established artists.
          </p>
          
          <div className="flex items-center gap-8 text-xs tracking-[0.2em]">
            <span className="text-amber-500">CREATE.</span>
            <span className="text-amber-500">INSPIRE.</span>
            <span className="text-amber-500">EVOLVE.</span>
          </div>
        </div>
      </section>

      {/* Next Camps Section */}
      <section className="px-6 md:px-12 py-16 bg-black">
        <h2 className="text-white/60 text-xs tracking-[0.3em] mb-12">NEXT CAMPS</h2>
        
        <div className="space-y-12">
          {camps.map((camp) => (
            <div key={camp.number} className="flex items-start gap-6 border-b border-white/10 pb-8">
              <span className="text-amber-500 text-2xl md:text-3xl font-light">{camp.number}</span>
              <div className="flex-1">
                <div className="border-l-2 border-amber-500/50 pl-6">
                  <h3 className="text-2xl md:text-4xl font-light tracking-wider mb-2" style={{ fontFamily: "serif" }}>
                    {camp.dates}
                  </h3>
                  <p className="text-white/50 text-xs tracking-[0.2em]">{camp.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Apply CTA */}
        <div className="mt-16">
          <p className="text-white/60 text-xs tracking-[0.3em] mb-4">LIMITED SPOTS.</p>
          <button className="w-full border border-white/30 py-4 flex items-center justify-center gap-4 hover:border-amber-500 hover:text-amber-500 transition-all duration-300 group">
            <span className="text-sm tracking-[0.3em]">APPLY NOW</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Gallery Strip */}
      <section className="overflow-hidden">
        <div className="flex">
          {galleryImages.map((img, index) => (
            <div key={index} className="w-1/2 md:w-1/4 aspect-square flex-shrink-0">
              <img
                src={img}
                alt={`Camp gallery ${index + 1}`}
                className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 py-8 bg-black border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-white/50 text-xs tracking-[0.15em]">
            FIRST EDITION — FEBRUARY 2025
          </p>
          <div className="text-right">
            <p className="text-white/70 text-xs tracking-[0.15em]">THIS IS NOT FOR EVERYONE.</p>
            <p className="text-amber-500 text-xs tracking-[0.15em]">#1UNIQUEEXPERIENCE</p>
          </div>
        </div>
      </footer>

      {/* Back Button */}
      <button
        onClick={() => onNavigate?.("home")}
        className="fixed top-20 left-4 md:left-6 z-30 text-white/70 hover:text-amber-500 transition-colors"
        aria-label="Go back"
      >
        <ArrowLeft className="w-6 h-6" />
      </button>
    </div>
  )
}
