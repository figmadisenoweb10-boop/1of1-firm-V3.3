"use client"

import { useState, useEffect } from "react"
import { Calendar, MapPin, Clock, Play, Menu as MenuIcon } from "lucide-react"
import HamburgerMenu from "./hamburger-menu"

interface EventDetailProps {
  onNavigate?: (page: string) => void
}

function CountdownTimer({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime()
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="flex items-center gap-4 md:gap-6">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full border border-amber-500/30 flex items-center justify-center">
          <Clock className="w-5 h-5 text-amber-500/70" />
        </div>
        <div className="text-xs text-white/60 leading-tight">
          FALTAN PARA<br />BABADOOK 2026
        </div>
      </div>
      <div className="flex gap-2 md:gap-6">
        <div className="text-center">
          <div className="text-xl md:text-4xl font-light text-amber-500">{String(timeLeft.days).padStart(3, '0')}</div>
          <div className="text-[8px] md:text-[10px] tracking-wider text-white/50">DÍAS</div>
        </div>
        <div className="text-center">
          <div className="text-xl md:text-4xl font-light text-amber-500">{String(timeLeft.hours).padStart(2, '0')}</div>
          <div className="text-[8px] md:text-[10px] tracking-wider text-white/50">HORAS</div>
        </div>
        <div className="text-center">
          <div className="text-xl md:text-4xl font-light text-amber-500">{String(timeLeft.minutes).padStart(2, '0')}</div>
          <div className="text-[8px] md:text-[10px] tracking-wider text-white/50">MIN</div>
        </div>
        <div className="text-center">
          <div className="text-xl md:text-4xl font-light text-amber-500">{String(timeLeft.seconds).padStart(2, '0')}</div>
          <div className="text-[8px] md:text-[10px] tracking-wider text-white/50">SEG</div>
        </div>
      </div>
    </div>
  )
}

function TicketIcon() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 10L28 10L28 22L4 22L4 10Z" />
      <path d="M8 14L12 14M8 18L16 18" />
      <circle cx="24" cy="16" r="2" />
    </svg>
  )
}

function VIPIcon() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M16 4L18 10H24L19 14L21 20L16 16L11 20L13 14L8 10H14L16 4Z" />
      <path d="M8 24H24" />
      <path d="M6 28H26" />
    </svg>
  )
}

export default function EventDetail({ onNavigate }: EventDetailProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  // Target date: October 30, 2026
  const targetDate = new Date('2026-10-30T00:00:00')

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
        currentPage="events"
      />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex flex-col justify-end pb-8">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
        
        {/* Demon Figure Overlay */}
        <div
          className="absolute right-0 top-0 bottom-0 w-1/2 bg-contain bg-right bg-no-repeat opacity-90 pointer-events-none"
          style={{
            backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260508-WA0007%20%281%29-2aOmr2Lfxb9nLW741KTLuJhzOPJR5x.jpg')`,
          }}
        />

        {/* Content */}
        <div className="relative z-10 px-4 md:px-8 pt-20">
          <div className="max-w-2xl">
            <span className="text-amber-500 text-sm tracking-[0.2em] uppercase">Signature Events</span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mt-2 mb-1">
              BABADOOK 2026
            </h1>
            <p className="text-red-500 text-lg md:text-xl tracking-wider mb-4">6TA EDICIÓN</p>
            <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-md">
              SEXTO ANIVERSARIO DE 1OF1.<br />
              SEIS AÑOS CONSTRUYENDO<br />
              LA EXPERIENCIA MÁS INMERSIVA DEL PAÍS.
            </p>

            <div className="flex flex-col gap-3 mt-6">
              <div className="flex items-center gap-3 text-white/80">
                <Calendar className="w-5 h-5 text-white/50" />
                <span className="text-sm tracking-wide">30 Y 31 DE OCTUBRE 2026</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <MapPin className="w-5 h-5 text-white/50" />
                <span className="text-sm tracking-wide">BARRANQUILLA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="px-4 md:px-8 py-6 border-y border-white/10">
        <CountdownTimer targetDate={targetDate} />
      </section>

      {/* Tickets Section */}
      <section className="px-4 md:px-8 py-10">
        {/* Stage Title */}
        <div className="flex items-center gap-4 justify-center mb-8">
          <div className="h-px bg-gradient-to-r from-transparent to-amber-500/50 flex-1 max-w-[100px]" />
          <h2 className="text-amber-500 text-sm tracking-[0.3em] uppercase">Etapa Creyentes</h2>
          <div className="h-px bg-gradient-to-l from-transparent to-amber-500/50 flex-1 max-w-[100px]" />
        </div>

        {/* Ticket Cards */}
        <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {/* Regular Ticket */}
          <div className="border border-white/20 p-6 relative">
            <div className="flex items-start gap-4 mb-4">
              <div className="text-amber-500">
                <TicketIcon />
              </div>
              <div>
                <h3 className="text-white font-semibold tracking-wide">TICKET</h3>
                <p className="text-white/50 text-xs tracking-wide">ACCESO GENERAL AL EVENTO</p>
              </div>
            </div>
            <div className="mb-4">
              <span className="text-3xl font-light text-white">$45.000</span>
              <span className="text-white/50 text-sm ml-2">COP</span>
            </div>
            <button className="w-full py-3 border border-white/30 text-white text-sm tracking-widest hover:bg-white/10 transition-colors">
              COMPRAR
            </button>
          </div>

          {/* VIP Table */}
          <div className="border border-amber-500/50 p-6 relative">
            {/* Best Seller Badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="bg-amber-500 text-black text-[10px] tracking-wider px-3 py-1 font-medium">
                MÁS VENDIDA
              </span>
            </div>
            <div className="flex items-start gap-4 mb-4">
              <div className="text-amber-500">
                <VIPIcon />
              </div>
              <div>
                <h3 className="text-white font-semibold tracking-wide">MESA VIP 10 PERSONAS</h3>
                <p className="text-white/50 text-xs tracking-wide">EXPERIENCIA VIP PARA<br />GRUPOS DE 10 PERSONAS</p>
              </div>
            </div>
            <div className="mb-1">
              <span className="text-3xl font-light text-amber-500">$500.000</span>
              <span className="text-white/50 text-sm ml-2">COP</span>
            </div>
            <p className="text-white/40 text-xs mb-4">NORMALMENTE $700K - $2M</p>
            <button className="w-full py-3 border border-amber-500 text-amber-500 text-sm tracking-widest hover:bg-amber-500 hover:text-black transition-colors">
              COMPRAR
            </button>
          </div>
        </div>

        {/* Exclusive Prices Note */}
        <div className="flex items-center justify-center gap-2 mt-6 text-white/40 text-xs tracking-wide">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="11" width="18" height="11" rx="2" />
            <path d="M7 11V7a5 5 0 0110 0v4" />
          </svg>
          <span>PRECIOS EXCLUSIVOS ETAPA CREYENTES. POR TIEMPO LIMITADO.</span>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=1200&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center px-4">
          <h2 className="text-3xl md:text-4xl font-light italic tracking-wide text-white mb-2">
            ASEGURA TU LUGAR
          </h2>
          <p className="text-white/60 text-sm tracking-wider mb-6">LOS CUPOS SON LIMITADOS.</p>
          <button className="inline-flex items-center gap-2 px-8 py-3 bg-amber-500/20 border border-amber-500 text-amber-500 tracking-widest hover:bg-amber-500 hover:text-black transition-all duration-300">
            COMPRAR ENTRADAS
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>

      {/* Aftermovie Section */}
      <section className="relative py-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto flex items-center justify-between bg-gradient-to-r from-black via-black/80 to-transparent border border-white/10 overflow-hidden">
          <div className="p-6 md:p-8">
            <span className="text-amber-500/70 text-xs tracking-[0.2em] uppercase">Revive la experiencia</span>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight mt-1 mb-3">BABADOOK</h3>
            <button className="flex items-center gap-2 text-white/80 hover:text-amber-500 transition-colors">
              <Play className="w-4 h-4" />
              <span className="text-sm tracking-wider">VER AFTERMOVIE</span>
            </button>
          </div>
          <div
            className="w-1/2 h-32 md:h-40 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=600&q=80')`,
            }}
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-4 md:px-8 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-white font-bold tracking-tight">1 OF 1 FIRM</span>
            <div className="h-4 w-px bg-white/20" />
            <div className="text-white/50 text-xs">
              <span>THIS IS NOT FOR EVERYONE.</span>
              <span className="text-amber-500 ml-2">#1UNIQUEEXPERIENCE</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            {[
              { icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z", name: "Instagram" },
              { icon: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z", name: "WhatsApp" },
              { icon: "M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z", name: "TikTok" },
              { icon: "M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z", name: "Spotify" },
            ].map((social) => (
              <a
                key={social.name}
                href="#"
                className="text-white/50 hover:text-amber-500 transition-colors"
                aria-label={social.name}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d={social.icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
