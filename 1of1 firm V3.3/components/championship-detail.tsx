"use client"

import { useState, useEffect } from "react"
import { Calendar, MapPin, Clock, Play, Menu as MenuIcon } from "lucide-react"
import HamburgerMenu from "./hamburger-menu"

interface ChampionshipDetailProps {
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
    <div className="flex items-center gap-1.5 xs:gap-2 sm:gap-3 md:gap-6">
      <div className="text-center min-w-[28px] xs:min-w-[32px]">
        <div className="text-lg xs:text-xl sm:text-2xl md:text-4xl font-light text-white">{String(timeLeft.days).padStart(2, "0")}</div>
        <div className="text-[6px] xs:text-[7px] sm:text-[8px] md:text-[10px] tracking-widest text-red-500">DÍAS</div>
      </div>
      <div className="text-white/30 text-sm xs:text-base sm:text-lg md:text-2xl font-light">|</div>
      <div className="text-center min-w-[28px] xs:min-w-[32px]">
        <div className="text-lg xs:text-xl sm:text-2xl md:text-4xl font-light text-white">{String(timeLeft.hours).padStart(2, "0")}</div>
        <div className="text-[6px] xs:text-[7px] sm:text-[8px] md:text-[10px] tracking-widest text-red-500">HORAS</div>
      </div>
      <div className="text-white/30 text-sm xs:text-base sm:text-lg md:text-2xl font-light">|</div>
      <div className="text-center min-w-[28px] xs:min-w-[32px]">
        <div className="text-lg xs:text-xl sm:text-2xl md:text-4xl font-light text-white">{String(timeLeft.minutes).padStart(2, "0")}</div>
        <div className="text-[6px] xs:text-[7px] sm:text-[8px] md:text-[10px] tracking-widest text-red-500">MIN</div>
      </div>
      <div className="text-white/30 text-sm xs:text-base sm:text-lg md:text-2xl font-light">|</div>
      <div className="text-center min-w-[28px] xs:min-w-[32px]">
        <div className="text-lg xs:text-xl sm:text-2xl md:text-4xl font-light text-white">{String(timeLeft.seconds).padStart(2, "0")}</div>
        <div className="text-[6px] xs:text-[7px] sm:text-[8px] md:text-[10px] tracking-widest text-red-500">SEG</div>
      </div>
    </div>
  )
}

export default function ChampionshipDetail({ onNavigate }: ChampionshipDetailProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  // Set target date for Championship (22 days from now as shown in design)
  const targetDate = new Date()
  targetDate.setDate(targetDate.getDate() + 22)

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
          className="text-white p-2 hover:text-red-500 transition-colors"
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
        currentPage="championship"
      />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex flex-col justify-end pb-8">
        {/* Background Image - Fighter in ring */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260508-WA0017-YwMbfrkrqjyhVIH2uNgMkCyUZ9Bic3.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />

        {/* Content */}
        <div className="relative z-10 px-4 md:px-8">
          <span className="text-red-600 text-xs tracking-[0.3em] mb-2 block font-medium">SIGNATURE EVENT</span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-wide mb-4 uppercase">
            THE 1 OF 1<br />CHAMPIONSHIP
          </h1>
          
          {/* Tagline */}
          <div className="border-l-2 border-red-600 pl-4 mb-6">
            <p className="text-white/80 text-sm tracking-widest leading-relaxed">
              4 SATURDAYS.<br />
              4 FIGHTS PER NIGHT.<br />
              ONE CHAMPION.
            </p>
          </div>

          {/* Date and Location */}
          <div className="space-y-3 max-w-xs">
            <div className="flex items-center gap-3">
              <Calendar className="w-4 h-4 text-white/60" />
              <span className="text-white/80 text-sm tracking-wider">COMING SOON</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-white/60" />
              <span className="text-white/80 text-sm tracking-wider">BARRANQUILLA</span>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="px-2 sm:px-4 py-6 max-w-2xl mx-auto">
        <div className="bg-black/60 border border-white/10 rounded-lg p-3 sm:p-4 flex flex-col md:flex-row items-center gap-3 sm:gap-4">
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/20 flex items-center justify-center">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-white/60" />
            </div>
            <div>
              <span className="text-[8px] sm:text-[10px] tracking-wider text-white/60 block">FALTA PARA</span>
              <span className="text-[10px] sm:text-xs tracking-wider text-white">THE 1 OF 1</span>
              <span className="text-[10px] sm:text-xs tracking-wider text-white block">CHAMPIONSHIP</span>
            </div>
          </div>
          <div className="md:border-l md:border-white/20 md:pl-4 w-full flex justify-center md:justify-start">
            <CountdownTimer targetDate={targetDate} />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-2 sm:px-4 py-6 max-w-lg mx-auto">
        {/* Stage Label */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-6">
          <div className="h-px bg-white/20 flex-1" />
          <span className="text-white/60 text-[10px] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em]">ETAPA CREYENTES</span>
          <div className="h-px bg-white/20 flex-1" />
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-2 gap-2 sm:gap-3">
          {/* Full Pass */}
          <div className="border border-white/20 p-2 sm:p-4 text-center">
            <div className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-2 sm:mb-3 border border-red-500/50 rounded flex items-center justify-center">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-white font-medium tracking-wider text-xs sm:text-sm mb-1">FULL PASS</h3>
            <p className="text-white/50 text-[8px] sm:text-[10px] tracking-wider mb-2 sm:mb-3 leading-tight">ACCESO A LAS 4 FECHAS<br />Y TODOS LOS COMBATES</p>
            <div className="mb-2 sm:mb-4">
              <span className="text-lg sm:text-2xl font-light text-red-500">$250.000</span>
              <span className="text-red-500/60 text-[10px] sm:text-xs ml-1">COP</span>
            </div>
            <button className="w-full py-1.5 sm:py-2 border border-white/30 text-white text-[10px] sm:text-xs tracking-widest hover:bg-white/10 transition-colors">
              COMPRAR
            </button>
          </div>

          {/* Fight Pass */}
          <div className="border border-red-500/50 p-2 sm:p-4 text-center">
            <div className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-2 sm:mb-3 border border-red-500/50 rounded flex items-center justify-center">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 11V7a5 5 0 0110 0v4m-9 0h8a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2v-6a2 2 0 012-2z" />
              </svg>
            </div>
            <h3 className="text-white font-medium tracking-wider text-xs sm:text-sm mb-1">FIGHT PASS</h3>
            <p className="text-white/50 text-[8px] sm:text-[10px] tracking-wider mb-2 sm:mb-3 leading-tight">ACCESO A 1 FECHA<br />Y TODOS LOS COMBATES</p>
            <div className="mb-2 sm:mb-4">
              <span className="text-lg sm:text-2xl font-light text-red-500">$100.000</span>
              <span className="text-red-500/60 text-[10px] sm:text-xs ml-1">COP</span>
            </div>
            <button className="w-full py-1.5 sm:py-2 border border-red-500/50 text-red-500 text-[10px] sm:text-xs tracking-widest hover:bg-red-500 hover:text-white transition-colors">
              COMPRAR
            </button>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="flex items-center justify-center gap-1 sm:gap-2 mt-3 sm:mt-4 text-white/40 text-[8px] sm:text-[10px] tracking-wider px-2">
          <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0110 0v4" />
          </svg>
          <span className="text-center">PRECIOS EXCLUSIVOS ETAPA CREYENTES. POR TIEMPO LIMITADO.</span>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-2 sm:px-4 py-6">
        <div
          className="relative py-6 sm:py-8 px-3 sm:px-4 overflow-hidden rounded-lg"
          style={{
            background: "linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%)",
          }}
        >
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-white text-base sm:text-xl md:text-2xl tracking-wider font-light">LOS CAMPEONES NO NACEN,</p>
              <p className="text-red-500 text-base sm:text-xl md:text-2xl tracking-wider font-light italic">SE HACEN AQUÍ.</p>
            </div>
            <button className="px-4 sm:px-8 py-2 sm:py-3 bg-red-600 text-white text-xs sm:text-sm font-medium tracking-widest hover:bg-red-700 transition-colors flex items-center gap-2">
              ASEGURA TU LUGAR
              <svg className="w-3 h-3 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Trailer Section */}
      <section className="px-2 sm:px-4 py-6">
        <div
          className="relative py-6 sm:py-8 px-3 sm:px-4 overflow-hidden rounded-lg"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&q=80')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
          <div className="relative z-10 flex items-center justify-between">
            <div>
              <span className="text-red-500 text-[8px] sm:text-[10px] tracking-widest">REVIVE LA EXPERIENCIA</span>
              <h3 className="text-lg sm:text-2xl md:text-3xl font-bold tracking-wider mt-1 uppercase">THE 1 OF 1 CHAMPIONSHIP</h3>
              <button className="flex items-center gap-2 mt-2 sm:mt-3 text-white/80 hover:text-red-500 transition-colors">
                <Play className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-[10px] sm:text-xs tracking-widest">VER TRAILER</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-2 sm:px-4 py-4 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 border-t border-white/10">
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="text-white">
            <div className="text-sm sm:text-lg font-bold tracking-tight">
              <span className="text-red-500">1</span>
              <span className="text-[10px] sm:text-xs align-top mx-0.5">OF</span>
              <span className="text-red-500">1</span>
              <span className="text-[10px] sm:text-xs ml-1">FIRM</span>
            </div>
          </div>
          <div>
            <p className="text-white/60 text-[10px] sm:text-xs">THIS IS NOT FOR EVERYONE.</p>
            <p className="text-red-500 text-[10px] sm:text-xs tracking-wider">#1UNIQUEEXPERIENCE</p>
          </div>
        </div>
        <div className="flex items-center gap-3 sm:gap-4">
          <a href="#" className="text-white/60 hover:text-red-500 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
              <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z"/>
              <circle cx="18.406" cy="5.594" r="1.44"/>
            </svg>
          </a>
          <a href="#" className="text-white/60 hover:text-red-500 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </a>
          <a href="#" className="text-white/60 hover:text-red-500 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
            </svg>
          </a>
          <a href="#" className="text-white/60 hover:text-red-500 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
            </svg>
          </a>
        </div>
      </footer>
    </div>
  )
}
