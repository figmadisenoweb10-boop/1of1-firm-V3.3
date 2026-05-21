"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import HamburgerMenu from "./hamburger-menu"

interface MaisonSwimDetailProps {
  onNavigate?: (page: string) => void
}

const products = [
  {
    id: 1,
    edition: "01 / 12",
    name: "CLASSIC SWIM SHORTS",
    color: "ONYX BLACK",
    price: 89.00,
    badge: "NEW",
    image: "https://images.unsplash.com/photo-1565693413579-8ff3fdc1b03b?w=600&q=80"
  },
  {
    id: 2,
    edition: "02 / 12",
    name: "CLASSIC SWIM SHORTS",
    color: "FOREST GREEN",
    price: 89.00,
    badge: "NEW",
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&q=80"
  },
  {
    id: 3,
    edition: "03 / 12",
    name: "CLASSIC SWIM SHORTS",
    color: "SAND BEIGE",
    price: 89.00,
    badge: "NEW",
    image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&q=80"
  },
  {
    id: 4,
    edition: "04 / 12",
    name: "TRIANGLE BIKINI",
    color: "JET BLACK",
    price: 79.00,
    badge: "NEW",
    image: "https://images.unsplash.com/photo-1586380951230-e6703d9183e4?w=600&q=80"
  }
]

const categories = ["ALL", "MEN", "WOMEN", "ACCESSORIES", "BEACH ESSENTIALS"]

function WhatsAppIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
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

export default function MaisonSwimDetail({ onNavigate }: MaisonSwimDetailProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState("ALL")

  const handleWhatsAppBuy = (product: typeof products[0]) => {
    const message = `Hi! I'm interested in purchasing the ${product.name} in ${product.color} ($${product.price.toFixed(2)} USD)`
    window.open(`https://wa.me/573001234567?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-sm">
        <div className="flex items-center justify-between p-4">
          <div className="flex flex-col leading-tight">
            <span className="text-white text-xl font-bold tracking-wider">MAISON</span>
            <span className="text-white text-sm tracking-[0.3em]">SWIM</span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="text-white p-2 hover:text-amber-500 transition-colors"
              aria-label="Open menu"
            >
              <div className="space-y-1.5">
                <div className="w-6 h-0.5 bg-current"></div>
                <div className="w-6 h-0.5 bg-current"></div>
              </div>
            </button>
            <div className="w-8 h-8 border border-white/30 rounded flex items-center justify-center text-xs">
              01
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-end pb-12 pt-24">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        
        <div className="relative z-10 px-6 max-w-lg">
          <p className="text-white/60 text-xs tracking-[0.3em] mb-4">MAISON SWIM</p>
          <h1 className="text-6xl md:text-7xl font-bold tracking-wide leading-none mb-4">
            <span className="block">SWIM</span>
            <span className="block">WEAR</span>
          </h1>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-white/40"></div>
            <Sparkle />
          </div>
          <p className="text-white/70 text-sm tracking-wide leading-relaxed">
            TIMELESS SWIMWEAR.<br />
            CRAFTED FOR THE SUN.<br />
            DESIGNED TO MAKE<br />
            A STATEMENT.
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="px-6 py-6 border-b border-white/10">
        <div className="flex gap-6 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-xs tracking-[0.15em] whitespace-nowrap transition-colors ${
                activeCategory === category 
                  ? "text-white border-b-2 border-white pb-1" 
                  : "text-white/50 hover:text-white/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Collection */}
      <section className="px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-sm tracking-[0.2em] text-white/80">FEATURED COLLECTION</h2>
          <button className="flex items-center gap-2 text-white/60 text-xs tracking-wider hover:text-amber-500 transition-colors">
            VIEW ALL
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 gap-4">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-zinc-900/50 border border-white/10 rounded-lg overflow-hidden"
            >
              {/* Product Header */}
              <div className="flex items-center justify-between px-3 py-2 text-xs text-white/50">
                <span>{product.edition}</span>
                <span className="text-green-500">{product.badge}</span>
              </div>
              
              {/* Product Image */}
              <div className="aspect-square bg-zinc-800 relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Product Info */}
              <div className="p-3">
                <h3 className="text-sm font-medium tracking-wide">{product.name}</h3>
                <p className="text-xs text-white/50 tracking-wide mt-1">{product.color}</p>
                <p className="text-sm mt-2">${product.price.toFixed(2)} USD</p>
                
                {/* Buy Button */}
                <button
                  onClick={() => handleWhatsAppBuy(product)}
                  className="w-full mt-3 flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 border border-white/10 rounded-full py-2.5 text-xs tracking-wider transition-colors"
                >
                  <WhatsAppIcon />
                  BUY ON WHATSAPP
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-white/10">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <p className="text-sm tracking-[0.3em] text-white/60">
              MADE FOR SUN. DESIGNED TO LAST.
            </p>
          </div>
          <Sparkle />
        </div>
        
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-white/40">
          <span>© MAISON SWIM 2026</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-amber-500 transition-colors">TERMS</a>
            <a href="#" className="hover:text-amber-500 transition-colors">PRIVACY</a>
            <a href="#" className="hover:text-amber-500 transition-colors">FAQ</a>
            <a href="#" className="hover:text-amber-500 transition-colors">GLOBAL</a>
          </div>
        </div>
      </footer>

      {/* Back Button */}
      <button 
        onClick={() => onNavigate?.("home")}
        className="fixed top-20 left-4 z-30 text-white/70 hover:text-amber-500 transition-colors"
      >
        <ArrowLeft className="w-6 h-6" />
      </button>

      {/* Hamburger Menu */}
      <HamburgerMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)}
        onNavigate={onNavigate}
      />
    </div>
  )
}
