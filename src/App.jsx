import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

/* -------------------- Reusable Components -------------------- */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#007A3D] shadow-lg' : 'bg-[#007A3D]'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        <Link to="/" className="text-2xl font-bold text-white tracking-wide">
          Print Craft Digital
        </Link>

        <nav className="hidden md:flex gap-8 text-sm font-medium items-center">
          <Link to="/" className="text-white hover:text-[#D4AF37] transition-colors">Home</Link>
          <Link to="/printing" className="text-white hover:text-[#D4AF37] transition-colors">Printing</Link>
          <Link to="/crafting" className="text-white hover:text-[#D4AF37] transition-colors">Crafting</Link>
          <Link to="/digital" className="text-white hover:text-[#D4AF37] transition-colors">Digital</Link>
          <Link to="/about" className="text-white hover:text-[#D4AF37] transition-colors">About</Link>
          <Link to="/contact" className="text-white hover:text-[#D4AF37] transition-colors">Contact</Link>
          <Link 
            to="/contact" 
            className="ml-4 px-6 py-2.5 bg-[#D4AF37] text-[#0A2342] rounded-lg font-semibold hover:bg-[#007A3D] hover:border-2 hover:border-[#D4AF37] hover:text-white transition-all"
          >
            Get a Quote
          </Link>
        </nav>

        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        aria-label="menu"
        onClick={() => setOpen((s) => !s)}
        className="p-2 rounded-md text-white text-2xl"
      >
        ☰
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-56 bg-[#007A3D] shadow-xl rounded-xl p-4 border border-[#D4AF37]/20">
          <Link to="/" onClick={() => setOpen(false)} className="block py-3 text-white hover:text-[#D4AF37] transition-colors">Home</Link>
          <Link to="/printing" onClick={() => setOpen(false)} className="block py-3 text-white hover:text-[#D4AF37] transition-colors">Printing</Link>
          <Link to="/crafting" onClick={() => setOpen(false)} className="block py-3 text-white hover:text-[#D4AF37] transition-colors">Crafting</Link>
          <Link to="/digital" onClick={() => setOpen(false)} className="block py-3 text-white hover:text-[#D4AF37] transition-colors">Digital</Link>
          <Link to="/about" onClick={() => setOpen(false)} className="block py-3 text-white hover:text-[#D4AF37] transition-colors">About</Link>
          <Link to="/contact" onClick={() => setOpen(false)} className="block py-3 text-white hover:text-[#D4AF37] transition-colors">Contact</Link>
        </div>
      )}
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0A2342] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12">
        <div>
          <h3 className="text-[#D4AF37] font-bold text-xl mb-4">Print Craft Digital</h3>
          <p className="text-sm leading-relaxed opacity-90">Premium printing, crafting & digital design solutions for modern Australia.</p>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4 text-[#D4AF37]">Quick Links</h4>
          <div className="space-y-2">
            <Link to="/" className="block text-sm hover:text-[#D4AF37] transition-colors">Home</Link>
            <Link to="/about" className="block text-sm hover:text-[#D4AF37] transition-colors">About</Link>
            <Link to="/gallery" className="block text-sm hover:text-[#D4AF37] transition-colors">Gallery</Link>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-[#D4AF37]">Services</h4>
          <div className="space-y-2">
            <Link to="/printing" className="block text-sm hover:text-[#D4AF37] transition-colors">Printing</Link>
            <Link to="/crafting" className="block text-sm hover:text-[#D4AF37] transition-colors">Crafting & Gifts</Link>
            <Link to="/digital" className="block text-sm hover:text-[#D4AF37] transition-colors">Digital Services</Link>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-[#D4AF37]">Contact</h4>
          <p className="text-sm mb-2">info@printcraft.com.au</p>
          <p className="text-sm mb-4">+61 3 9876 5432</p>
          <div className="flex gap-4">
            <a href="#" className="text-[#D4AF37] hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="#" className="text-[#D4AF37] hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-[#0A2342] border-t border-white/10 text-gray-400 text-sm py-6 text-center opacity-70">
        © {new Date().getFullYear()} Print Craft Digital. All rights reserved.
      </div>
    </footer>
  );
}

function SectionHeader({ title, subtitle, centered = true, goldLine = true }) {
  return (
    <div className={`max-w-7xl mx-auto px-6 mb-16 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-[#0A2342] mb-3">{title}</h2>
      {goldLine && <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mb-4"></div>}
      {subtitle && <p className="text-[#007A3D] text-lg md:text-xl mt-4 max-w-3xl mx-auto leading-relaxed">{subtitle}</p>}
    </div>
  );
}

/* Floating WhatsApp Button */
function FloatingWhatsApp({ phone = "61398765432" }) {
  const sendWhatsApp = () => {
    const message = encodeURIComponent("Hi Print Craft Digital, I want a quote for printing/gifts.");
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  return (
    <button
      onClick={sendWhatsApp}
      className="fixed right-6 bottom-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110"
      aria-label="WhatsApp"
    >
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
      </svg>
    </button>
  );
}

/* -------------------- Hero Slider -------------------- */
function HeroSlider() {
  const slides = [
    "/assets/hero-sample.jpg",
    "/assets/brochure.png",
    "/assets/gifts.jpeg",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden rounded-xl">
      <img
        src={slides[index]}
        alt="Slide"
        className="w-full h-full object-cover transition-opacity duration-700"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
        <div className="max-w-7xl mx-auto px-6 text-white">
          <p className="text-[#D4AF37] text-sm md:text-base font-semibold tracking-widest uppercase mb-4">
            Premium Print • Gifts • Digital Design
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Crafting Premium Brands<br />for Modern Australia
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl leading-relaxed opacity-90">
            From exquisite print to thoughtfully curated gifts and cutting-edge digital design — we bring your brand vision to life with elegance and precision.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link to="/contact" className="px-8 py-4 bg-[#007A3D] text-white rounded-lg font-semibold hover:bg-[#D4AF37] hover:text-[#0A2342] transition-all">
              Get Started
            </Link>
            <Link to="/about" className="px-8 py-4 bg-transparent border-2 border-[#D4AF37] text-white rounded-lg font-semibold hover:bg-[#D4AF37] hover:text-[#0A2342] transition-all">
              Learn More
            </Link>
          </div>
        </div>
      </div>

      <button onClick={prevSlide} className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 hover:bg-white text-[#0A2342] p-3 rounded-full transition-all">❮</button>
      <button onClick={nextSlide} className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 hover:bg-white text-[#0A2342] p-3 rounded-full transition-all">❯</button>

      <div className="absolute bottom-6 w-full flex justify-center gap-2">
        {slides.map((_, i) => (
          <div key={i} className={`w-3 h-3 rounded-full transition-all ${index === i ? "bg-[#D4AF37] w-8" : "bg-white/60"}`}></div>
        ))}
      </div>
    </div>
  );
}

/* -------------------- Home Page -------------------- */
function Home() {
  const printingServices = [
    "Business Cards", "Flyers & Leaflets", "Brochures & Catalogues",
    "Tickets / Event Passes", "Posters & Banners", "Books & Magazines",
    "Menu Cards", "Custom Prints (any size)"
  ];

  const craftingServices = [
    "Curated Gift Boxes", "Festive Hampers", "Employee Welcome Kits",
    "Thank-You Gifts", "Custom Mugs", "Personalized Pens",
    "Custom T-Shirts & Apparel", "Office Stationery Kits",
    "Branded Desk Accessories", "Event Goodie Bags"
  ];

  const digitalServices = [
    { title: "Brand design", desc: "logo packages, colour palettes, font pairings, brand style guides" },
    { title: "Digital stationery", desc: "business cards, email signatures, social media templates" },
    { title: "Marketing design", desc: "brochures, pitch decks, web banners, e-book layouts" },
    { title: "Website development", desc: "custom websites tailored to your brand" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#F7F2E7] pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <HeroSlider />
        </div>
      </section>

      {/* Three Service Columns */}
      <section className="bg-white py-24">
        <SectionHeader 
          title="What We Do" 
          subtitle="Three pillars of brand excellence — print, craft, and digital"
        />

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {/* Printing Card */}
          <div className="bg-[#F7F2E7] rounded-xl p-8 shadow-sm hover:shadow-lg transition-all">
            <div className="w-16 h-16 rounded-full bg-white border-2 border-[#007A3D] flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-[#007A3D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#0A2342] mb-4">Printing</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              {printingServices.map((s, i) => <li key={i}>• {s}</li>)}
            </ul>
          </div>

          {/* Crafting Card */}
          <div className="bg-white rounded-xl p-8 border-2 border-[#D4AF37] shadow-sm hover:shadow-lg transition-all">
            <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 border-2 border-[#D4AF37] flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#0A2342] mb-4">Crafting & Corporate Gifts</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              {craftingServices.map((s, i) => <li key={i}>• {s}</li>)}
            </ul>
          </div>

          {/* Digital Card */}
          <div className="bg-[#00A884] rounded-xl p-8 shadow-sm hover:shadow-lg transition-all">
            <div className="w-16 h-16 rounded-full bg-white/20 border-2 border-white flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Digital Services</h3>
            <div className="space-y-3 text-sm text-white">
              {digitalServices.map((s, i) => (
                <div key={i}>
                  <p className="font-semibold">• {s.title}</p>
                  <p className="text-white/80 text-xs ml-3">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link to="/contact" className="inline-block px-10 py-4 bg-[#007A3D] text-white rounded-lg font-semibold hover:bg-[#D4AF37] hover:text-[#0A2342] transition-all">
            Explore Services
          </Link>
        </div>
      </section>

      {/* Featured Work */}
      <section className="bg-[#F7F2E7] py-24">
        <SectionHeader 
          title="Featured Work" 
          subtitle="A glimpse of our craftsmanship across print, gifts, and digital"
        />

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            { img: `${process.env.PUBLIC_URL}/assets/business-cards1.png`, title: "Premium Business Cards", category: "Printing" },
    { img: `${process.env.PUBLIC_URL}/assets/gift1.png`, title: "Corporate Gift Boxes", category: "Crafting" },
    { img: `${process.env.PUBLIC_URL}/assets/flyers.png`, title: "Brand Identity Design", category: "Digital" },
          ].map((work, i) => (
            <div key={i} className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all">
              <img src={work.img} alt={work.title} className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-[#007A3D]/0 group-hover:bg-[#007A3D]/40 transition-all flex items-center justify-center">
                <p className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity">View Project</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                <p className="text-xs text-[#D4AF37] mb-1">{work.category}</p>
                <h4 className="text-lg font-semibold">{work.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#0A2342] py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Why Choose Print Craft Digital</h2>
          <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
          {[
            { icon: "∞", title: "End-to-End Service", desc: "From the first idea to the final handover, we handle every detail with precision and care." },
            { icon: "📜", title: "Premium Materials", desc: "We work exclusively with superior stocks, finishes, and textures chosen for elegance and longevity." },
            { icon: "⏱", title: "Fast Turnarounds", desc: "Luxury doesn't have to wait. Our refined workflows deliver beautifully crafted results on time." },
            { icon: "🎁", title: "Thoughtfully Curated Gifts", desc: "Each gift is composed with intention — elevated, refined, and designed to leave a lasting impression." }
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#D4AF37]/10 border-2 border-[#D4AF37] flex items-center justify-center text-3xl">
                {item.icon}
              </div>
              <h4 className="text-white font-semibold text-lg uppercase tracking-wide mb-3">{item.title}</h4>
              <p className="text-white/80 text-sm leading-relaxed max-w-xs mx-auto">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white py-24">
        <SectionHeader 
          title="Our Process" 
          subtitle="Four refined steps to bring your vision to life"
        />

        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting line - desktop only */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-[#D4AF37]/30" style={{ width: 'calc(100% - 160px)', left: '80px' }}></div>

            {[
              { num: "1", title: "Discover", desc: "We begin by understanding your vision, purpose, and brand needs. This is where ideas take shape and direction becomes clear." },
              { num: "2", title: "Design", desc: "Our team crafts refined concepts across print, gifting, and digital. Every detail is thoughtfully considered to elevate your brand." },
              { num: "3", title: "Refine", desc: "We collaborate with you to fine-tune and perfect the chosen direction. The result is a polished, cohesive solution that feels uniquely yours." },
              { num: "4", title: "Deliver", desc: "Your final assets are produced with care and delivered on time. Premium quality, beautifully packaged, ready to make an impact." }
            ].map((step, i) => (
              <div key={i} className="text-center relative z-10">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#007A3D] text-white flex items-center justify-center text-2xl font-bold shadow-lg">
                  {step.num}
                </div>
                <h4 className="text-xl font-bold text-[#0A2342] mb-3">{step.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="bg-[#007A3D] py-20">
        <div className="max-w-7xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to bring your brand to life?</h2>
          <div className="w-24 h-0.5 bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="text-xl mb-10 opacity-90">Let's create something unforgettable</p>
          <Link to="/contact" className="inline-block px-12 py-5 bg-[#D4AF37] text-[#0A2342] rounded-lg font-bold text-lg hover:bg-white hover:border-2 hover:border-[#007A3D] transition-all">
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}

/* -------------------- Other Pages -------------------- */
function About() {
  return (
    <div className="pt-24 min-h-screen bg-[#F7F2E7]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <SectionHeader title="About Print Craft Digital" subtitle="Quality printing & thoughtful corporate gifting" />

        <div className="mt-12 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>Print Craft Digital is a dedicated printing and corporate gifting studio focused on delivering premium products with quick turnarounds. Our team combines industry experience with modern workflows to provide reliable service for businesses and individuals alike.</p>

            <div>
              <h4 className="font-bold text-[#0A2342] text-xl mb-3">Our Promise</h4>
              <ul className="space-y-2 text-sm">
                <li>✓ High-quality materials & finishes</li>
                <li>✓ Transparent pricing & fast quotes</li>
                <li>✓ Scalable solutions for bulk orders</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-2 rounded-xl shadow-lg">
            <img src="/assets/hero-sample.jpg" alt="about" className="w-full h-96 object-cover rounded-lg" />
          </div>
        </div>

        <section className="mt-16 bg-white rounded-xl p-12 shadow-sm">
          <h3 className="text-2xl font-bold text-[#0A2342] mb-6">Our Process</h3>
          <ol className="space-y-4 text-gray-700">
            <li className="flex gap-4"><span className="font-bold text-[#D4AF37]">1.</span> Discuss requirements & recommend materials</li>
            <li className="flex gap-4"><span className="font-bold text-[#D4AF37]">2.</span> Approve designs and samples</li>
            <li className="flex gap-4"><span className="font-bold text-[#D4AF37]">3.</span> Production and quality checks</li>
            <li className="flex gap-4"><span className="font-bold text-[#D4AF37]">4.</span> Delivery or pickup</li>
          </ol>
        </section>
      </div>
    </div>
  );
}

function Printing() {
  const products = [
    { title: "Business Cards", desc: "Matte, gloss, spot UV, soft-touch options.", price: 199, img: "/assets/business-cards1.png" },
    { title: "Brochures", desc: "Tri-fold and bi-fold brochures with high-quality prints.", price: 499, img: "/assets/a3brochures.png" },
    { title: "Flyers & Leaflets", desc: "Eye-catching designs for promotions.", price: 299, img: "/assets/flyers.png" },
    { title: "Posters & Banners", desc: "Large format prints for events.", price: 699, img: "/assets/slider1.png" },
  ];

  return (
    <div className="pt-24 min-h-screen bg-[#F7F2E7]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <SectionHeader title="Printing Services" subtitle="Premium printing solutions for every need" />
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <ProductCard key={i} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Crafting() {
  const products = [
    { title: "Gift Boxes", desc: "Custom-branded gift boxes and packaging.", price: 299, img: "/assets/gift1.png" },
    { title: "Corporate Gift Packs", desc: "Bespoke corporate gifting solutions.", price: 799, img: "/assets/visiting-card.png" },
  ];

  return (
    <div className="pt-24 min-h-screen bg-[#F7F2E7]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <SectionHeader title="Crafting & Corporate Gifts" subtitle="Thoughtfully curated gifts that leave an impression" />
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <ProductCard key={i} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Digital() {
  return (
    <div className="pt-24 min-h-screen bg-[#00A884] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Digital Services</h2>
          <div className="w-16 h-0.5 bg-white mx-auto mb-4"></div>
          <p className="text-xl opacity-90">Brand design, digital stationery, marketing, and web development</p>
        </div>
      </div>
    </div>
  );
}

function Gallery() {
  const images = [
    "/assets/hero-sample.jpg",
    "/assets/brochure.png",
    "/assets/gifts.jpeg",
    "/assets/business-cards1.png",
    "/assets/flyers.png",
    "/assets/gift1.png",
  ];

  const [openImg, setOpenImg] = useState(null);

  return (
    <div className="pt-24 min-h-screen bg-[#F7F2E7]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <SectionHeader title="Gallery" subtitle="Samples of our printing & gifting work" />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, i) => (
            <button key={i} onClick={() => setOpenImg(src)} className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all group">
              <img src={src} alt={`sample-${i}`} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
            </button>
          ))}
        </div>

        {openImg && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setOpenImg(null)}>
            <div className="max-w-4xl w-full relative">
              <button onClick={() => setOpenImg(null)} className="absolute -top-4 -right-4 bg-white rounded-full p-3 text-[#0A2342] hover:bg-[#D4AF37] transition-colors">✕</button>
              <img src={openImg} alt="Gallery" className="w-full h-auto rounded-xl shadow-2xl" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "", service: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name) e.name = "Name is required";
    if (!form.email) e.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Email is invalid";
    if (!form.message) e.message = "Please mention your requirements";
    return e;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length === 0) {
      console.log("submit", form);
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="pt-24 min-h-screen bg-[#F7F2E7] flex items-center justify-center">
        <div className="max-w-2xl mx-auto p-12 bg-white rounded-xl shadow-lg text-center">
          <div className="w-20 h-20 bg-[#007A3D] rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-3xl font-bold text-[#0A2342] mb-4">Thank You!</h3>
          <p className="text-gray-600 mb-8">We received your enquiry and will get back to you shortly.</p>
          <Link to="/" className="inline-block px-8 py-3 bg-[#007A3D] text-white rounded-lg font-semibold hover:bg-[#D4AF37] hover:text-[#0A2342] transition-all">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-[#F7F2E7]">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <SectionHeader title="Contact Us" subtitle="Let's discuss your project" />

        <form onSubmit={handleSubmit} className="bg-white rounded-xl p-10 shadow-lg">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="block mb-2 text-sm font-semibold text-[#0A2342]">Name *</label>
              <input
                type="text"
                className="w-full p-3 rounded-lg border border-gray-300 focus:border-[#007A3D] focus:outline-none transition-colors"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              {errors.name && <span className="text-red-500 text-xs mt-1">{errors.name}</span>}
            </div>

            <div>
              <label className="block mb-2 text-sm font-semibold text-[#0A2342]">Email *</label>
              <input
                type="email"
                className="w-full p-3 rounded-lg border border-gray-300 focus:border-[#007A3D] focus:outline-none transition-colors"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email}</span>}
            </div>

            <div>
              <label className="block mb-2 text-sm font-semibold text-[#0A2342]">Phone</label>
              <input
                type="tel"
                className="w-full p-3 rounded-lg border border-gray-300 focus:border-[#007A3D] focus:outline-none transition-colors"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-semibold text-[#0A2342]">Service</label>
              <select
                className="w-full p-3 rounded-lg border border-gray-300 focus:border-[#007A3D] focus:outline-none transition-colors"
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
              >
                <option value="">Select Service</option>
                <option value="printing">Printing</option>
                <option value="gifting">Corporate Gifting</option>
                <option value="digital">Digital Services</option>
              </select>
            </div>
          </div>

          <div className="mt-6">
            <label className="block mb-2 text-sm font-semibold text-[#0A2342]">Message *</label>
            <textarea
              className="w-full p-3 rounded-lg border border-gray-300 focus:border-[#007A3D] focus:outline-none transition-colors"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            ></textarea>
            {errors.message && <span className="text-red-500 text-xs mt-1">{errors.message}</span>}
          </div>

          <button type="submit" className="mt-8 w-full px-8 py-4 bg-[#007A3D] text-white rounded-lg font-semibold hover:bg-[#D4AF37] hover:text-[#0A2342] transition-all">
            Submit Enquiry
          </button>
        </form>
      </div>
    </div>
  );
}

function ProductCard({ product }) {
  return (
    <div className="relative rounded-xl overflow-hidden shadow-md group bg-white hover:shadow-xl transition-all">
      <div className="h-80 w-full overflow-hidden">
        <img
          src={product.img}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#0A2342] mb-2">{product.title}</h3>
        <p className="text-sm text-gray-600 mb-4">{product.desc}</p>
        <div className="flex items-center justify-between">
          <div className="text-lg font-bold text-[#007A3D]">From ₹{product.price}</div>
          <Link
            to="/contact"
            className="px-5 py-2 bg-[#D4AF37] text-[#0A2342] rounded-lg font-semibold hover:bg-[#007A3D] hover:text-white transition-all"
          >
            Enquire
          </Link>
        </div>
      </div>
    </div>
  );
}

/* -------------------- App -------------------- */
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/printing" element={<Printing />} />
          <Route path="/crafting" element={<Crafting />} />
          <Route path="/digital" element={<Digital />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </Router>
  );
}

export default App;