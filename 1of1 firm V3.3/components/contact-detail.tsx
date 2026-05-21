"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Instagram, MessageCircle } from "lucide-react"
import HamburgerMenu from "./hamburger-menu"

interface ContactDetailProps {
  onNavigate?: (page: string) => void
}

export default function ContactDetail({ onNavigate }: ContactDetailProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const contactCards = [
    {
      number: "01",
      title: "BOOK EVENTS",
      subtitle: "Bookings / Collaborations",
      buttonText: "WHATSAPP",
      buttonIcon: MessageCircle,
      href: "https://wa.me/573001234567",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80"
    },
    {
      number: "02",
      title: "MEDIA",
      subtitle: "Press / Content / Interviews",
      buttonText: "INSTAGRAM",
      buttonIcon: Instagram,
      href: "https://instagram.com/1of1firm",
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&q=80"
    },
    {
      number: "03",
      title: "BUSINESS",
      subtitle: "Partnerships / Proposals",
      buttonText: "EMAIL",
      buttonIcon: Mail,
      href: "mailto:contact@1of1firm.com",
      image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=600&q=80",
      showEmail: true
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between p-4 md:p-6">
        <img 
          src="/logo.png" 
          alt="1 OF 1 FIRM" 
          className="h-8 md:h-10 w-auto cursor-pointer"
          onClick={() => onNavigate?.("home")}
        />
        <div className="flex items-center gap-4">
          <button className="text-white/80 text-xs tracking-[0.2em] hover:text-amber-500 transition-colors hidden md:block">
            VIP ACCESS
          </button>
          <button
            onClick={() => setIsMenuOpen(true)}
            className="text-white p-2 hover:text-amber-500 transition-colors"
            aria-label="Open menu"
          >
            <div className="space-y-1.5">
              <div className="w-6 h-px bg-current"></div>
              <div className="w-6 h-px bg-current"></div>
            </div>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-end">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1200&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
        
        {/* Content */}
        <div className="relative z-10 w-full px-6 md:px-12 pb-12 pt-24">
          <h1 
            className="text-[4rem] md:text-[7rem] lg:text-[9rem] font-light leading-[0.85] tracking-tight text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            CONTACT
          </h1>
          <div className="w-12 h-0.5 bg-amber-500 mt-6 mb-4" />
          <p className="text-amber-500/80 text-sm md:text-base tracking-[0.2em]">
            ENTER THE CONVERSATION.
          </p>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {contactCards.map((card) => (
            <div 
              key={card.number}
              className="relative border border-amber-500/30 bg-black overflow-hidden group"
            >
              {/* Card Number */}
              <div className="absolute top-4 left-4 z-20">
                <span className="text-amber-500 text-xl md:text-2xl font-light">{card.number}</span>
              </div>

              {/* Card Image */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url('${card.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>

              {/* Card Content */}
              <div className="p-4 md:p-6 text-center">
                <h3 
                  className="text-xl md:text-2xl tracking-[0.15em] text-white mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {card.title}
                </h3>
                <div className="w-8 h-px bg-amber-500/50 mx-auto mb-3" />
                <p className="text-white/50 text-xs tracking-[0.1em] mb-6">
                  {card.subtitle}
                </p>

                {/* Button */}
                <a
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 border border-amber-500 text-amber-500 text-sm tracking-[0.2em] hover:bg-amber-500 hover:text-black transition-all duration-300"
                >
                  <card.buttonIcon className="w-4 h-4" />
                  {card.buttonText}
                </a>

                {/* Email display for business card */}
                {card.showEmail && (
                  <p className="text-white/50 text-xs tracking-[0.05em] mt-4">
                    contact@1of1firm.com
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <MapPin className="w-4 h-4 text-amber-500/70" />
          <span className="text-white/60 text-sm tracking-[0.15em]">BARRANQUILLA, COLOMBIA</span>
        </div>
        <p className="text-amber-500 text-sm tracking-[0.2em]">#1UNIQUEEXPERIENCE</p>
      </footer>

      {/* Hamburger Menu */}
      <HamburgerMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)}
        onNavigate={onNavigate}
        currentPage="contact"
      />
    </div>
  )
}
