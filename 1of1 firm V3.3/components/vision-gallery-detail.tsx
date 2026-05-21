"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight, Menu as MenuIcon } from "lucide-react"
import HamburgerMenu from "./hamburger-menu"

interface VisionGalleryDetailProps {
  onNavigate?: (page: string) => void
}

interface Artwork {
  id: string
  number: string
  totalEditions: number
  name: string
  category: string
  type: string
  price: number
  currency: string
  available: boolean
  image: string
}

const artworks: Artwork[] = [
  {
    id: "silence-peaks",
    number: "01",
    totalEditions: 12,
    name: "SILENCE PEAKS",
    category: "LANDSCAPES",
    type: "FINE ART PHOTOGRAPHY",
    price: 249.00,
    currency: "USD",
    available: true,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80"
  },
  {
    id: "urban-reflections",
    number: "02",
    totalEditions: 12,
    name: "URBAN REFLECTIONS",
    category: "URBAN",
    type: "FINE ART PHOTOGRAPHY",
    price: 229.00,
    currency: "USD",
    available: true,
    image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=600&q=80"
  },
  {
    id: "ocean-force",
    number: "03",
    totalEditions: 12,
    name: "OCEAN FORCE",
    category: "BLACK & WHITE",
    type: "FINE ART PHOTOGRAPHY",
    price: 219.00,
    currency: "USD",
    available: true,
    image: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=600&q=80"
  },
  {
    id: "natural-abstract",
    number: "04",
    totalEditions: 12,
    name: "NATURAL ABSTRACT",
    category: "ABSTRACT",
    type: "FINE ART PHOTOGRAPHY",
    price: 199.00,
    currency: "USD",
    available: true,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
  },
  {
    id: "midnight-city",
    number: "05",
    totalEditions: 12,
    name: "MIDNIGHT CITY",
    category: "URBAN",
    type: "FINE ART PHOTOGRAPHY",
    price: 239.00,
    currency: "USD",
    available: true,
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80"
  },
  {
    id: "eternal-horizon",
    number: "06",
    totalEditions: 12,
    name: "ETERNAL HORIZON",
    category: "LANDSCAPES",
    type: "FINE ART PHOTOGRAPHY",
    price: 259.00,
    currency: "USD",
    available: true,
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80"
  }
]

const categories = ["ALL", "LANDSCAPES", "URBAN", "BLACK & WHITE", "ABSTRACT"]

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

function Sparkle() {
  return (
    <svg className="w-3 h-3 text-amber-500" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10L12 0Z" />
    </svg>
  )
}

function ArtworkCard({ artwork }: { artwork: Artwork }) {
  const whatsappMessage = encodeURIComponent(`Hi! I'm interested in purchasing "${artwork.name}" - $${artwork.price.toFixed(2)} ${artwork.currency}`)
  const whatsappLink = `https://wa.me/573000000000?text=${whatsappMessage}`

  return (
    <div className="group">
      {/* Card Header */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-white/60 text-xs tracking-wider">{artwork.number} / {artwork.totalEditions}</span>
        <span className="text-white/60 text-xs tracking-wider">{artwork.available ? "AVAILABLE" : "SOLD"}</span>
      </div>

      {/* Framed Image */}
      <div className="relative bg-neutral-900 p-4 mb-4">
        <div className="relative aspect-[4/3] overflow-hidden border-4 border-neutral-700 shadow-2xl">
          <img 
            src={artwork.image} 
            alt={artwork.name}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          />
        </div>
      </div>

      {/* Artwork Info */}
      <h3 className="text-white text-base tracking-wide font-medium mb-1">{artwork.name}</h3>
      <p className="text-white/50 text-xs tracking-wider mb-2">{artwork.type}</p>
      <p className="text-white text-sm mb-4">${artwork.price.toFixed(2)} {artwork.currency}</p>

      {/* Buy Button */}
      <a 
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 w-full py-3 bg-neutral-900 border border-neutral-700 text-white text-xs tracking-[0.15em] hover:bg-neutral-800 hover:border-amber-500/50 transition-all duration-300"
      >
        <WhatsAppIcon />
        BUY ON WHATSAPP
      </a>
    </div>
  )
}

export default function VisionGalleryDetail({ onNavigate }: VisionGalleryDetailProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState("ALL")

  const handleNavigate = (page: string) => {
    setIsMenuOpen(false)
    onNavigate?.(page)
  }

  const filteredArtworks = activeCategory === "ALL" 
    ? artworks 
    : artworks.filter(a => a.category === activeCategory)

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 md:p-6 bg-gradient-to-b from-black/80 to-transparent">
        <div className="flex flex-col">
          <span className="text-white text-lg tracking-[0.1em] font-semibold italic">VISION</span>
          <span className="text-white/80 text-xs tracking-[0.2em]">GALLERY</span>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="text-white p-2 hover:text-amber-500 transition-colors"
            aria-label="Open menu"
          >
            <MenuIcon className="w-6 h-6" />
          </button>
          <div className="border border-white/30 px-2 py-1">
            <span className="text-white/80 text-xs tracking-wider">01</span>
          </div>
        </div>
      </header>

      {/* Hamburger Menu */}
      <HamburgerMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onNavigate={handleNavigate}
        currentPage="vision-gallery"
      />

      {/* Hero Section */}
      <section className="pt-24 pb-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="text-white/60 text-xs tracking-[0.2em] block mb-4">VISION GALLERY</span>
            <h1 className="text-5xl md:text-7xl font-light tracking-tight leading-none mb-6" style={{ fontFamily: 'serif' }}>
              PHOTO<br />GALLERY
            </h1>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-px bg-white/30"></div>
              <Sparkle />
            </div>
            <p className="text-white/60 text-sm tracking-wider leading-relaxed max-w-sm">
              A CURATED EXHIBITION<br />
              OF IMAGES THAT TELL STORIES.<br />
              VISUAL ART AT ITS<br />
              FINEST EXPRESSION.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/file_0000000032ac71f5924b822deaaa6450-VsaICGp2HylVZuV9KCT9uoIsyiblhz.png"
              alt="Vision Gallery"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="px-4 md:px-8 py-6 border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-6 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-xs tracking-[0.15em] whitespace-nowrap transition-colors ${
                  activeCategory === category 
                    ? 'text-white font-medium' 
                    : 'text-white/50 hover:text-white/80'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Galleries Header */}
      <section className="px-4 md:px-8 py-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h2 className="text-white text-sm tracking-[0.15em]">FEATURED GALLERIES</h2>
          <button className="flex items-center gap-2 text-white/60 text-xs tracking-wider hover:text-white transition-colors">
            VIEW ALL
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Artworks Grid */}
      <section className="px-4 md:px-8 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredArtworks.map((artwork) => (
              <ArtworkCard key={artwork.id} artwork={artwork} />
            ))}
          </div>
        </div>
      </section>

      {/* Tagline */}
      <section className="px-4 md:px-8 py-12 text-center">
        <div className="flex items-center justify-center gap-2">
          <p className="text-white/70 text-sm tracking-[0.2em]">VISUAL ART. EMOTION. INSPIRATION.</p>
        </div>
        <div className="flex justify-center mt-2">
          <Sparkle />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-4 md:px-8 py-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">© VISION GALLERY 2026</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/50 text-xs tracking-wider hover:text-white transition-colors">TERMS</a>
            <a href="#" className="text-white/50 text-xs tracking-wider hover:text-white transition-colors">PRIVACY</a>
            <a href="#" className="text-white/50 text-xs tracking-wider hover:text-white transition-colors">FAQ</a>
            <span className="text-white/50 text-xs tracking-wider">COLOMBIA</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
