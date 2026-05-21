"use client"

import { useState } from "react"
import { X, ChevronRight, Clock, MapPin, Calendar, ChevronDown, Shield, List, SlidersHorizontal, Check } from "lucide-react"
import HamburgerMenu from "./hamburger-menu"

function Sparkle() {
  return (
    <svg className="w-3 h-3 text-amber-500/70" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10L12 0Z" />
    </svg>
  )
}

interface BuyTicketsDetailProps {
  onNavigate: (page: string) => void
}

interface Event {
  id: string
  name: string
  date: string
  dayOfWeek: string
  time: string
  location: string
  city: string
  price: number
  image: string
  month: string
  eventType: string
}

export default function BuyTicketsDetail({ onNavigate }: BuyTicketsDetailProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<"weekend" | "all">("weekend")
  const [selectedTickets] = useState<Record<string, number>>({})
  const [showFilters, setShowFilters] = useState(false)
  const [viewMode, setViewMode] = useState<"list" | "calendar">("list")
  
  // Filter states
  const [selectedMonth, setSelectedMonth] = useState("All Months")
  const [selectedEventTypes, setSelectedEventTypes] = useState<string[]>(["All Types"])
  const [selectedLocations, setSelectedLocations] = useState<string[]>(["All Locations"])
  const [priceRange, setPriceRange] = useState(250)
  const [sortBy, setSortBy] = useState("Date: Soonest")

  const weekendEvents: Event[] = [
    {
      id: "babadook",
      name: "BABADOOK",
      date: "24 MAY",
      dayOfWeek: "FRI",
      time: "10:00 PM - LATE",
      location: "SECRET LOCATION",
      city: "MIAMI, FL",
      price: 50.00,
      image: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=400&q=80",
      month: "May",
      eventType: "Experience"
    },
    {
      id: "luna-llena",
      name: "LUNA LLENA",
      date: "25 MAY",
      dayOfWeek: "SAT",
      time: "10:00 PM - LATE",
      location: "SECRET LOCATION",
      city: "MIAMI, FL",
      price: 60.00,
      image: "https://images.unsplash.com/photo-1532452119098-a3650b3c46d3?w=400&q=80",
      month: "May",
      eventType: "Festival"
    },
    {
      id: "la-festa",
      name: "LA FESTA",
      date: "26 MAY",
      dayOfWeek: "SUN",
      time: "10:00 PM - LATE",
      location: "SECRET LOCATION",
      city: "MIAMI, FL",
      price: 55.00,
      image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&q=80",
      month: "May",
      eventType: "Festival"
    }
  ]

  const allEvents: Event[] = [
    ...weekendEvents,
    {
      id: "eclipse",
      name: "ECLIPSE",
      date: "31 MAY",
      dayOfWeek: "FRI",
      time: "10:00 PM - LATE",
      location: "BROOKLYN WAREHOUSE",
      city: "BROOKLYN, NY",
      price: 70.00,
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&q=80",
      month: "May",
      eventType: "Concert"
    },
    {
      id: "nocturna",
      name: "NOCTURNA",
      date: "01 JUN",
      dayOfWeek: "SAT",
      time: "10:00 PM - LATE",
      location: "DOWNTOWN LA",
      city: "LOS ANGELES, CA",
      price: 65.00,
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&q=80",
      month: "June",
      eventType: "Experience"
    },
    {
      id: "oblivion",
      name: "OBLIVION",
      date: "07 JUN",
      dayOfWeek: "FRI",
      time: "10:00 PM - LATE",
      location: "SECRET LOCATION",
      city: "LAS VEGAS, NV",
      price: 80.00,
      image: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=400&q=80",
      month: "June",
      eventType: "Special Event"
    }
  ]

  const events = activeTab === "weekend" ? weekendEvents : allEvents
  const totalTickets = Object.values(selectedTickets).reduce((a, b) => a + b, 0)

  const months = ["All Months", "May", "June", "July", "August"]
  const eventTypes = [
    { name: "All Types", count: null },
    { name: "Festival", count: 6 },
    { name: "Concert", count: 9 },
    { name: "Experience", count: 4 },
    { name: "Special Event", count: 3 }
  ]
  const locations = [
    { name: "All Locations", count: null },
    { name: "Miami, FL", count: 12 },
    { name: "New York, NY", count: 4 },
    { name: "Los Angeles, CA", count: 3 },
    { name: "Las Vegas, NV", count: 2 },
    { name: "Other", count: 1 }
  ]

  const toggleEventType = (type: string) => {
    if (type === "All Types") {
      setSelectedEventTypes(["All Types"])
    } else {
      const newTypes = selectedEventTypes.filter(t => t !== "All Types")
      if (newTypes.includes(type)) {
        const filtered = newTypes.filter(t => t !== type)
        setSelectedEventTypes(filtered.length === 0 ? ["All Types"] : filtered)
      } else {
        setSelectedEventTypes([...newTypes, type])
      }
    }
  }

  const toggleLocation = (loc: string) => {
    if (loc === "All Locations") {
      setSelectedLocations(["All Locations"])
    } else {
      const newLocs = selectedLocations.filter(l => l !== "All Locations")
      if (newLocs.includes(loc)) {
        const filtered = newLocs.filter(l => l !== loc)
        setSelectedLocations(filtered.length === 0 ? ["All Locations"] : filtered)
      } else {
        setSelectedLocations([...newLocs, loc])
      }
    }
  }

  const resetFilters = () => {
    setSelectedMonth("All Months")
    setSelectedEventTypes(["All Types"])
    setSelectedLocations(["All Locations"])
    setPriceRange(250)
    setSortBy("Date: Soonest")
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between p-4 md:p-6 bg-black/80 backdrop-blur-sm">
        <button onClick={() => onNavigate("home")} className="flex items-center">
          <span className="text-2xl md:text-3xl font-bold tracking-wider text-white">10F1</span>
        </button>
        <button
          onClick={() => onNavigate("home")}
          className="text-white p-2 hover:text-amber-500 transition-colors"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>
      </header>

      {/* Main Content */}
      <main className="pt-20 pb-32 px-4 md:px-6">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-light italic tracking-[0.15em] mb-4">
            {activeTab === "weekend" ? "BUY TICKETS" : "ALL EVENTS"}
          </h1>
          <div className="flex justify-center mb-4">
            <Sparkle />
          </div>
          <p className="text-white/60 text-sm tracking-[0.2em]">
            {activeTab === "weekend" ? "SELECT AN EVENT" : "EXPLORE ALL UPCOMING EXPERIENCES"}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-8 mb-6 border-b border-white/10 max-w-3xl mx-auto">
          <button
            onClick={() => setActiveTab("weekend")}
            className={`pb-3 text-sm tracking-[0.15em] transition-colors relative ${
              activeTab === "weekend" ? "text-white" : "text-white/50 hover:text-white/70"
            }`}
          >
            WEEKEND EVENTS
            {activeTab === "weekend" && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-600" />
            )}
          </button>
          <button
            onClick={() => setActiveTab("all")}
            className={`pb-3 text-sm tracking-[0.15em] transition-colors relative ${
              activeTab === "all" ? "text-white" : "text-white/50 hover:text-white/70"
            }`}
          >
            ALL EVENTS
            {activeTab === "all" && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-600" />
            )}
          </button>
        </div>

        {activeTab === "weekend" ? (
          /* Weekend Events View */
          <div className="max-w-3xl mx-auto">
            {/* Date Selector */}
            <div className="flex justify-center mb-8">
              <button className="flex items-center gap-2 text-white/70 text-sm tracking-wider hover:text-white transition-colors">
                <Calendar className="w-4 h-4" />
                <span>24 MAY - 26 MAY 2024</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            {/* Events Label */}
            <p className="text-white/60 text-xs tracking-[0.2em] mb-4">WEEKEND EVENTS</p>

            {/* Event Cards */}
            <div className="space-y-4">
              {events.map((event) => (
                <button
                  key={event.id}
                  onClick={() => onNavigate(event.id)}
                  className="w-full bg-zinc-900/50 border border-white/10 rounded-lg p-3 flex items-center gap-4 hover:border-amber-500/30 transition-all group"
                >
                  <div className="w-24 h-24 md:w-32 md:h-28 rounded-lg overflow-hidden flex-shrink-0">
                    <img src={event.image} alt={event.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-white/50 text-xs tracking-wider mb-1">{event.dayOfWeek}, {event.date}</p>
                    <h3 className="text-xl md:text-2xl font-light italic tracking-wider mb-2">{event.name}</h3>
                    <div className="flex items-center gap-2 text-white/50 text-xs mb-1">
                      <Clock className="w-3 h-3" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/50 text-xs">
                      <MapPin className="w-3 h-3" />
                      <span>{event.location}</span>
                    </div>
                    <p className="text-white/40 text-xs mt-0.5">{event.city}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-white/50 text-xs mb-1">FROM</p>
                    <p className="text-xl md:text-2xl font-light">${event.price.toFixed(2)}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-white/30 group-hover:text-amber-500 transition-colors" />
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* All Events View with Filters */
          <div className="max-w-6xl mx-auto flex gap-6">
            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden fixed bottom-24 right-4 z-30 bg-zinc-800 border border-white/20 rounded-full p-3"
            >
              <SlidersHorizontal className="w-5 h-5" />
            </button>

            {/* Filters Sidebar */}
            <aside className={`${showFilters ? "fixed inset-0 z-50 bg-black p-6 overflow-auto" : "hidden"} lg:block lg:relative lg:w-64 flex-shrink-0`}>
              {showFilters && (
                <button onClick={() => setShowFilters(false)} className="lg:hidden absolute top-4 right-4">
                  <X className="w-6 h-6" />
                </button>
              )}
              
              <div className="border border-white/10 rounded-lg p-4 bg-zinc-900/30">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-sm tracking-[0.15em] font-medium">FILTER & SORT</h3>
                  <SlidersHorizontal className="w-4 h-4 text-white/50" />
                </div>

                {/* Date */}
                <div className="mb-6">
                  <p className="text-xs tracking-wider text-white/70 mb-2">DATE</p>
                  <button className="w-full flex items-center justify-between text-sm text-white/60 border border-white/10 rounded px-3 py-2 hover:border-white/20">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>Select date range</span>
                    </div>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>

                {/* Month */}
                <div className="mb-6">
                  <p className="text-xs tracking-wider text-white/70 mb-2">MONTH</p>
                  <div className="space-y-1">
                    {months.map((month) => (
                      <button
                        key={month}
                        onClick={() => setSelectedMonth(month)}
                        className={`block w-full text-left text-sm py-1 transition-colors ${
                          selectedMonth === month ? "text-white" : "text-white/50 hover:text-white/70"
                        }`}
                      >
                        {month}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Event Type */}
                <div className="mb-6">
                  <p className="text-xs tracking-wider text-white/70 mb-2">EVENT TYPE</p>
                  <div className="space-y-2">
                    {eventTypes.map((type) => (
                      <button
                        key={type.name}
                        onClick={() => toggleEventType(type.name)}
                        className="flex items-center justify-between w-full text-sm text-white/70 hover:text-white transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <div className={`w-4 h-4 border rounded flex items-center justify-center ${
                            selectedEventTypes.includes(type.name) ? "bg-amber-600 border-amber-600" : "border-white/30"
                          }`}>
                            {selectedEventTypes.includes(type.name) && <Check className="w-3 h-3" />}
                          </div>
                          <span>{type.name}</span>
                        </div>
                        {type.count && <span className="text-white/40">{type.count}</span>}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Location */}
                <div className="mb-6">
                  <p className="text-xs tracking-wider text-white/70 mb-2">LOCATION</p>
                  <div className="space-y-2">
                    {locations.map((loc) => (
                      <button
                        key={loc.name}
                        onClick={() => toggleLocation(loc.name)}
                        className="flex items-center justify-between w-full text-sm text-white/70 hover:text-white transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <div className={`w-4 h-4 border rounded flex items-center justify-center ${
                            selectedLocations.includes(loc.name) ? "bg-amber-600 border-amber-600" : "border-white/30"
                          }`}>
                            {selectedLocations.includes(loc.name) && <Check className="w-3 h-3" />}
                          </div>
                          <span>{loc.name}</span>
                        </div>
                        {loc.count && <span className="text-white/40">{loc.count}</span>}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <p className="text-xs tracking-wider text-white/70 mb-2">PRICE RANGE</p>
                  <input
                    type="range"
                    min="0"
                    max="250"
                    value={priceRange}
                    onChange={(e) => setPriceRange(Number(e.target.value))}
                    className="w-full accent-amber-600"
                  />
                  <div className="flex justify-between text-xs text-white/50 mt-1">
                    <span>$0</span>
                    <span>$250+</span>
                  </div>
                </div>

                {/* Sort By */}
                <div className="mb-6">
                  <p className="text-xs tracking-wider text-white/70 mb-2">SORT BY</p>
                  <button className="w-full flex items-center justify-between text-sm text-white/60 border border-white/10 rounded px-3 py-2 hover:border-white/20">
                    <span>{sortBy}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>

                {/* Reset Filters */}
                <button
                  onClick={resetFilters}
                  className="w-full border border-white/20 rounded py-2 text-sm tracking-wider text-white/70 hover:text-white hover:border-white/40 transition-colors"
                >
                  RESET FILTERS
                </button>
              </div>
            </aside>

            {/* Events List */}
            <div className="flex-1">
              {/* Header Row */}
              <div className="flex items-center justify-between mb-4">
                <p className="text-white/60 text-sm">{allEvents.length} EVENTS FOUND</p>
                <div className="flex items-center gap-2 border border-white/10 rounded overflow-hidden">
                  <button
                    onClick={() => setViewMode("list")}
                    className={`flex items-center gap-2 px-3 py-2 text-xs tracking-wider ${
                      viewMode === "list" ? "bg-zinc-800 text-white" : "text-white/50"
                    }`}
                  >
                    <List className="w-4 h-4" />
                    LIST
                  </button>
                  <button
                    onClick={() => setViewMode("calendar")}
                    className={`flex items-center gap-2 px-3 py-2 text-xs tracking-wider ${
                      viewMode === "calendar" ? "bg-zinc-800 text-white" : "text-white/50"
                    }`}
                  >
                    <Calendar className="w-4 h-4" />
                    CALENDAR
                  </button>
                </div>
              </div>

              {/* Event Cards */}
              <div className="space-y-4">
                {allEvents.map((event) => (
                  <button
                    key={event.id}
                    onClick={() => onNavigate(event.id)}
                    className="w-full bg-zinc-900/50 border border-white/10 rounded-lg p-3 flex items-center gap-4 hover:border-amber-500/30 transition-all group"
                  >
                    <div className="w-28 h-24 md:w-36 md:h-28 rounded-lg overflow-hidden flex-shrink-0">
                      <img src={event.image} alt={event.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 text-left">
                      <p className="text-white/50 text-xs tracking-wider mb-1">{event.dayOfWeek}, {event.date}</p>
                      <h3 className="text-xl md:text-2xl font-light italic tracking-wider mb-2">{event.name}</h3>
                      <div className="flex items-center gap-2 text-white/50 text-xs mb-1">
                        <Clock className="w-3 h-3" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/50 text-xs">
                        <MapPin className="w-3 h-3" />
                        <span>{event.location}</span>
                      </div>
                      <p className="text-white/40 text-xs mt-0.5">{event.city}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-white/50 text-xs mb-1">FROM</p>
                      <p className="text-xl md:text-2xl font-light">${event.price.toFixed(2)}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-white/30 group-hover:text-amber-500 transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Fixed Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-white/10 p-4 md:p-6">
        <div className="max-w-3xl mx-auto">
          <button className="w-full bg-amber-700/80 hover:bg-amber-600 text-white py-4 text-sm tracking-[0.2em] transition-colors mb-3">
            CONTINUE TO CHECKOUT ({totalTickets} TICKETS)
          </button>
          <div className="flex items-center justify-center gap-2 text-white/50 text-xs tracking-wider mb-4">
            <Shield className="w-4 h-4" />
            <span>SECURE CHECKOUT</span>
          </div>
          <div className="flex items-center justify-center gap-6 text-xs tracking-wider mb-2">
            {["INSTAGRAM", "YOUTUBE", "TIKTOK", "WHATSAPP"].map((social) => (
              <a key={social} href="#" className="text-white/50 hover:text-amber-500 transition-colors">
                {social}
              </a>
            ))}
          </div>
          <a href="mailto:contact@10f1firm.com" className="block text-center text-white/40 text-xs tracking-wider hover:text-amber-500 transition-colors">
            contact@10f1firm.com
          </a>
        </div>
      </div>

      <HamburgerMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} onNavigate={onNavigate} currentPage="buy-tickets" />
    </div>
  )
}
