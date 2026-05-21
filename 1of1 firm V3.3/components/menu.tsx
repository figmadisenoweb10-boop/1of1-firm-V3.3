"use client"

import { useState } from "react"
import { ChevronDown, ChevronRight, Menu as MenuIcon } from "lucide-react"
import HamburgerMenu from "./hamburger-menu"

interface MenuSectionProps {
  title: string
  subtitle: string
  backgroundImage: string
  hasGoldBorder?: boolean
}

function MenuSection({ title, subtitle, backgroundImage, hasGoldBorder = true }: MenuSectionProps) {
  return (
    <div
      className={`relative min-h-[140px] flex items-center overflow-hidden group cursor-pointer ${
        hasGoldBorder ? "border-l-2 border-amber-500" : ""
      }`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
      <div className="relative z-10 p-6 flex items-center justify-between w-full">
        <div>
          <h3 className="text-white font-light text-xl md:text-2xl tracking-wider uppercase">{title}</h3>
          <span className="text-amber-500 text-xs md:text-sm tracking-widest uppercase flex items-center gap-2 mt-1">
            {subtitle} <ChevronRight className="w-4 h-4" />
          </span>
        </div>
        <ChevronRight className="w-6 h-6 text-amber-500/50 group-hover:text-amber-500 transition-colors" />
      </div>
    </div>
  )
}

interface MenuProps {
  onNavigate?: (page: string) => void
}

export default function Menu({ onNavigate }: MenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavigate = (page: string) => {
    setIsMenuOpen(false)
    onNavigate?.(page)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 md:p-6 bg-gradient-to-b from-black/80 to-transparent">
        <img 
          src="/logo.png" 
          alt="1 OF 1 FIRM" 
          className="h-10 md:h-12 w-auto"
        />
        <button
          onClick={() => setIsMenuOpen(true)}
          className="text-white p-2 hover:text-amber-500 transition-colors"
          aria-label="Open menu"
        >
          <MenuIcon className="w-6 h-6" />
        </button>
      </header>

      {/* Hamburger Menu */}
      <HamburgerMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onNavigate={handleNavigate}
        currentPage="home"
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black" />

        <div className="relative z-10 text-center px-4">
          <h1 className="text-7xl md:text-9xl font-light tracking-wider">
            <span className="text-white">1</span>
            <span className="text-white/80 text-5xl md:text-7xl mx-2 md:mx-4">OF</span>
            <span className="text-white">1</span>
          </h1>
          <p className="text-amber-500/80 text-sm md:text-base tracking-[0.4em] mt-4">#1UNIQUEEXPERIENCE</p>

          <div className="mt-16 flex flex-col items-center">
            <div className="w-px h-12 bg-amber-500/50" />
            <p className="text-white/70 text-xs tracking-[0.3em] mt-4 uppercase">Enter the Universe</p>
            <ChevronDown className="w-5 h-5 text-white/50 mt-2 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Menu Sections */}
      <section className="relative z-10 -mt-20">
        <MenuSection
          title="SIGNATURE EVENTS"
          subtitle="DISCOVER"
          backgroundImage="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=70"
        />

        <MenuSection
          title="1 OF 1 UNIVERSE"
          subtitle="EXPLORE"
          backgroundImage="https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?w=800&q=70"
        />

        <MenuSection
          title="BUY TICKETS / BOOK VIP"
          subtitle="GET ACCESS"
          backgroundImage="https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=800&q=70"
        />

        <MenuSection
          title="CONTACT"
          subtitle="CONNECT"
          backgroundImage="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=70"
        />
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-4 text-center bg-black">
        <div className="w-12 h-px bg-amber-500 mx-auto mb-8" />
        <p className="text-white/60 text-xs tracking-[0.3em] uppercase">This is not for everyone.</p>
        <p className="text-amber-500 text-sm tracking-[0.4em] mt-2">#1UNIQUEEXPERIENCE</p>

        <button className="mt-8 px-12 py-3 border border-amber-500 text-amber-500 text-sm tracking-widest hover:bg-amber-500 hover:text-black transition-all duration-300">
          GET ACCESS
        </button>
      </section>

      {/* Bottom Bar */}
      <footer className="py-6 px-4 text-center border-t border-white/10">
        <p className="text-white/30 text-xs tracking-wider">© 2026 1 OF 1 FIRM. All rights reserved.</p>
      </footer>
    </div>
  )
}
