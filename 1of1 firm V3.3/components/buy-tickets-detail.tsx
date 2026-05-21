"use client"

import { useState } from "react"
import { X, Clock, MapPin, Calendar, Users, ExternalLink } from "lucide-react"
import HamburgerMenu from "./hamburger-menu"

interface BuyTicketsDetailProps {
  onNavigate: (page: string) => void
}

interface WeekendEvent {
  id: string
  dayLabel: string
  dayLabelColor: string
  title: string
  subtitle: string
  subtitleStyle: "script" | "italic"
  description: string[]
  time: string
  date: string
  venue: string
  location: string
  ageRestriction: string
  ageNote: string
  buttonText: string
  buttonStyle: "outline" | "filled"
  image: string
}

export default function BuyTicketsDetail({ onNavigate }: BuyTicketsDetailProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  const weekendEvents: WeekendEvent[] = [
    {
      id: "animal-night",
      dayLabel: "VIERNES",
      dayLabelColor: "bg-amber-500",
      title: "ANIMAL",
      subtitle: "Night",
      subtitleStyle: "script",
      description: ["LA EXPERIENCIA", "QUE NUNCA OLVIDAS"],
      time: "9:00 PM",
      date: "VIERNES 16 DE MAYO",
      venue: "DISCOLO NIGHT CLUB",
      location: "BARRANQUILLA",
      ageRestriction: "+14",
      ageNote: "MÁS SALVAJE. +14 SIN ALCOHOL",
      buttonText: "COMPRAR",
      buttonStyle: "outline",
      image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&q=80"
    },
    {
      id: "animal-vip",
      dayLabel: "SÁBADO",
      dayLabelColor: "bg-amber-600",
      title: "ANIMAL",
      subtitle: "VIP",
      subtitleStyle: "italic",
      description: ["VIVE EL FIN DE SEMANA", "COMO NUNCA"],
      time: "9:00 PM",
      date: "SÁBADO 17 DE MAYO",
      venue: "DISCOLO NIGHT CLUB",
      location: "BARRANQUILLA",
      ageRestriction: "+14",
      ageNote: "MÁS SALVAJE. +14 SIN ALCOHOL",
      buttonText: "COMPRAR",
      buttonStyle: "outline",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=80"
    },
    {
      id: "animal-aftermovie",
      dayLabel: "DOMINGO",
      dayLabelColor: "bg-amber-700",
      title: "ANIMAL",
      subtitle: "Aftermovie",
      subtitleStyle: "script",
      description: ["REVIVE LA EXPERIENCIA", "COMO SI ESTUVIERAS AHÍ"],
      time: "8:00 PM",
      date: "DOMINGO 18 DE MAYO",
      venue: "DISCOLO NIGHT CLUB",
      location: "BARRANQUILLA",
      ageRestriction: "+14",
      ageNote: "MÁS SALVAJE. +14 SIN ALCOHOL",
      buttonText: "VER MÁS",
      buttonStyle: "filled",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80"
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between p-4 md:p-6">
        <button onClick={() => onNavigate("home")} className="flex items-center">
          <img 
            src="/logo.png" 
            alt="1 OF 1 FIRM" 
            className="h-10 md:h-12 w-auto"
          />
        </button>
        <button
          onClick={() => setMenuOpen(true)}
          className="text-white p-2 hover:text-amber-500 transition-colors"
          aria-label="Menu"
        >
          <div className="space-y-1.5">
            <div className="w-6 h-0.5 bg-current"></div>
            <div className="w-6 h-0.5 bg-current"></div>
          </div>
        </button>
      </header>

      {/* Hero Section with Background */}
      <div className="relative pt-20">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1200&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black" />

        {/* Content */}
        <div className="relative z-10 px-4 md:px-8 py-8 md:py-12">
          {/* Main Title */}
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none">
              <span className="block bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent">
                WEEKEND
              </span>
              <span className="block bg-gradient-to-r from-amber-500 via-amber-300 to-amber-500 bg-clip-text text-transparent mt-2">
                EVENTS
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-center text-white/60 text-sm md:text-base tracking-[0.15em] mb-8 max-w-md mx-auto">
            EXPERIENCIAS QUE MARCAN<br />TU FIN DE SEMANA.
          </p>

          {/* Event Info */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-8 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-amber-500" />
              <span className="tracking-wider">VIERNES 16 Y<br className="md:hidden" /> SÁBADO 17 DE MAYO</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-500" />
              <span className="tracking-wider">DISCOLO NIGHT CLUB<br />BARRANQUILLA</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full border border-amber-500/50 flex items-center justify-center text-xs font-bold text-amber-500">
                +14
              </div>
              <span className="tracking-wider text-xs text-white/60">MÁS SALVAJE.<br />+14 SIN ALCOHOL</span>
            </div>
          </div>
        </div>
      </div>

      {/* Event Cards */}
      <main className="px-4 md:px-8 pb-8 space-y-4">
        {weekendEvents.map((event) => (
          <div
            key={event.id}
            className="bg-zinc-900/60 border border-white/10 rounded-xl overflow-hidden"
          >
            <div className="flex flex-col md:flex-row">
              {/* Left Content */}
              <div className="p-4 md:p-6 flex-1">
                {/* Day Badge */}
                <div className="inline-block mb-3">
                  <span className={`${event.dayLabelColor} text-black text-xs font-bold px-2 py-1 rounded tracking-wider`}>
                    {event.dayLabel}
                  </span>
                  {event.id === "animal-aftermovie" && (
                    <span className="ml-2 bg-amber-700 text-black text-xs font-bold px-2 py-1 rounded tracking-wider">
                      AFTERMOVIE
                    </span>
                  )}
                </div>

                {/* Title */}
                <div className="mb-3">
                  <h2 className="text-3xl md:text-4xl font-bold tracking-wider text-white">
                    ANIMAL
                  </h2>
                  <span className={`text-2xl md:text-3xl ${event.subtitleStyle === "script" ? "font-serif italic" : "italic font-light"} text-amber-500`}>
                    {event.subtitle}
                  </span>
                </div>

                {/* Description */}
                <div className="text-white/60 text-sm tracking-wider mb-4">
                  {event.description.map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>

                {/* Event Info: Date, Venue, Location, Age */}
                <div className="flex flex-wrap items-center gap-3 mb-4 text-xs text-white/60">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-amber-500/70" />
                    <span className="tracking-wider">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-500/70" />
                    <span className="tracking-wider">{event.venue}, {event.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full border border-amber-500/50 flex items-center justify-center text-[10px] font-bold text-amber-500">
                      {event.ageRestriction}
                    </span>
                    <span className="tracking-wider text-white/50">{event.ageNote}</span>
                  </div>
                </div>

                {/* Time and Button */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-white/70">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm tracking-wider">{event.time}</span>
                  </div>
                  <button
                    onClick={() => onNavigate(event.id)}
                    className={`px-6 py-2 text-sm tracking-[0.15em] transition-all ${
                      event.buttonStyle === "filled"
                        ? "bg-gradient-to-r from-amber-600 to-amber-500 text-black font-medium hover:from-amber-500 hover:to-amber-400"
                        : "border border-amber-500 text-amber-500"
                    }`}
                  >
                    {event.buttonText}
                  </button>
                </div>
              </div>

              {/* Right Image */}
              <div className="md:w-1/2 h-48 md:h-auto relative">
                <img
                  src={event.image}
                  alt={`${event.title} ${event.subtitle}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/80 via-transparent to-transparent md:bg-gradient-to-r md:from-zinc-900 md:via-transparent md:to-transparent" />
              </div>
            </div>
          </div>
        ))}

        {/* VIP Table Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {/* VIP Table Card */}
          <div className="bg-zinc-900/60 border border-white/10 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg border border-amber-500/30 flex items-center justify-center">
                <Users className="w-6 h-6 text-amber-500/70" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold tracking-wider mb-1">MESA VIP 10 PERSONAS</h3>
                <p className="text-white/50 text-sm tracking-wider mb-3">EXPERIENCIA VIP PARA GRUPOS</p>
                <div className="mb-3">
                  <span className="text-3xl font-light text-white">$500.000</span>
                  <span className="text-white/50 text-sm ml-2">COP</span>
                </div>
                <p className="text-white/40 text-xs tracking-wider mb-4">NORMALMENTE $700K - $2M</p>
                <button
                  onClick={() => onNavigate("vip-table")}
                  className="w-full bg-gradient-to-r from-amber-600 to-amber-500 text-black font-medium py-3 text-sm tracking-[0.15em] hover:from-amber-500 hover:to-amber-400 transition-all"
                >
                  COMPRAR
                </button>
              </div>
            </div>
          </div>

          {/* Limited Spots CTA */}
          <div 
            className="bg-zinc-900/60 border border-white/10 rounded-xl p-6 flex flex-col items-center justify-center text-center relative overflow-hidden"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&q=80')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-black/70" />
            <div className="relative z-10">
              <p className="text-xl md:text-2xl font-light italic tracking-wider text-white/80 mb-4">
                LOS CUPOS SON LIMITADOS.
              </p>
              <button
                onClick={() => onNavigate("buy-tickets")}
                className="inline-flex items-center gap-2 border-2 border-amber-500 text-amber-500 px-6 py-3 text-sm tracking-[0.15em] font-bold hover:bg-amber-500 hover:text-black transition-all"
              >
                COMPRAR ENTRADAS
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 px-4 md:px-8 py-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Left - Aftermovie Link */}
            <div className="flex items-center gap-4">
              <div>
                <p className="text-amber-500 text-xs tracking-wider">REVIVE LA EXPERIENCIA</p>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold tracking-wider">ANIMAL</span>
                  <button className="flex items-center gap-1 text-white/50 text-xs hover:text-amber-500 transition-colors">
                    <span className="w-0 h-0 border-l-4 border-l-white/50 border-y-2 border-y-transparent"></span>
                    VER AFTERMOVIE
                  </button>
                </div>
              </div>
            </div>

            {/* Center - Tagline */}
            <div className="text-center">
              <p className="text-white/50 text-xs tracking-[0.15em]">THIS IS NOT FOR EVERYONE.</p>
              <p className="text-amber-500 text-sm tracking-wider font-medium">#1UNIQUEEXPERIENCE</p>
            </div>

            {/* Right - Logo and Social */}
            <div className="flex items-center gap-6">
              <span className="text-lg font-bold tracking-wider">1 OF 1 FIRM</span>
              <div className="flex items-center gap-4">
                <a href="#" className="text-white/60 hover:text-amber-500 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="text-white/60 hover:text-amber-500 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
                <a href="#" className="text-white/60 hover:text-amber-500 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                  </svg>
                </a>
                <a href="#" className="text-white/60 hover:text-amber-500 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <HamburgerMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} onNavigate={onNavigate} currentPage="buy-tickets" />
    </div>
  )
}
