"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  Download,
  ArrowRightLeft,
  FileText,
  Mail,
  CheckCircle,
  ChevronRight,
  Minimize2,
  Maximize2,
  Phone,
  MapPin,
  Quote,
  CreditCard,
  Sun,
  Moon,
} from "lucide-react";
import {
  FaWhatsapp,
  FaCar,
  FaShuttleVan,
  FaShippingFast,
  FaInstagram,
  FaSnapchatGhost,
  FaTiktok,
} from "react-icons/fa";

const LOGO_URL =
  "https://res.cloudinary.com/dshe5kflb/image/upload/v1771844735/MAlogo_tew3ln.jpg";

const profile = {
  name: "Marvel L&A",
  fullName: "Marvel Logistics & Auto",
  role: "Premier Car Dealership",
  location: "Ghana",
  bio: "Marvel Logistics and Auto is a premier dealership offering a wide range of new, used and freshly imported vehicles. We provide unparalleled customer service and top quality vehicles, ensuring a seamless and satisfying car buying experience for every customer.",
  image:
    "https://res.cloudinary.com/dshe5kflb/image/upload/v1771849463/cprofile_ivaqyt.jpg",
  email: "marvellogisticsandautos.com",
  serviceEmail: "marvellogisticsandautos.com",
  phone2: "+234 56 163 0727",
  whatsapp: "+234 56 163 0727",
  snapchat: "@wealthymarvel",
  mission:
    "To be a leading, dynamic car dealership by providing our clients fast access to both international and local vehicle markets easily and conveniently.",
  vision:
    "To work hard to see our mission come through, while we strive to rank as the best in the automotive industry.",
  coreValues: ["Trust", "Honesty", "Reliability", "Confidentiality"],
};

const services = [
  {
    title: "New Vehicles",
    description:
      "Latest models from Mercedes, Toyota, Honda, Ford and more. Compact cars, sports, and family-friendly SUVs to suit your needs and budget.",
    image:
      "https://res.cloudinary.com/dshe5kflb/image/upload/v1771848999/IMG_5147_oyvxic.jpg ",
    icon: FaCar,
  },
  {
    title: "Used Vehicles",
    description:
      "Thoroughly inspected and reconditioned pre-owned cars, trucks and SUVs in top working condition at competitive prices.",
    image:
      "https://res.cloudinary.com/dshe5kflb/image/upload/v1771848998/IMG_5143_jheubl.jpg",
    icon: FaShuttleVan,
  },
  {
    title: "Freshly Imported",
    description:
      "Vehicles shipped directly from international markets to our dealership. Unique and exclusive options that sell quickly.",
    image:
      "https://res.cloudinary.com/dshe5kflb/image/upload/v1771848998/IMG_5146_oechio.jpg",
    icon: FaShippingFast,
  },
];

const testimonials = [
  {
    text: "I bought a 2013 Mercedes from these Awesome people! I love the car, and had a great experience buying here. I will buy my future cars here and recommend to all my family and friends.",
    name: "Kwasi Whyte",
  },
  {
    text: "I am very satisfied and would not hesitate to recommend them or buy another vehicle from them.",
    name: "Jude Johnson",
  },
  {
    text: "Excellent friendly service. Every associate went above and beyond to help me. We were treated like valued customers and not just another number or sale.",
    name: "Kobina Asare",
  },
  {
    text: "The Vehicle I purchased was flawless and very favorably priced! Am so impressed with my experience of the whole purchasing process.",
    name: "Peter Bimpong",
  },
  {
    text: "Excellent communication, Great service, very professional, I recommend their services highly.",
    name: "Bright Kofi Arthur",
  },
  {
    text: "The prices were fair and the vehicle I purchased was worth it. The process was stress free and I enjoyed the service rendered.",
    name: "Uche Nnamdi",
  },
];

// ── Theme Palettes ──
const themes = {
  dark: {
    bg: "#1A1A1A",
    bgOuter: "#111",
    card: "#222",
    cardBorder: "#333",
    text: "#ffffff",
    textSecondary: "#d4d4d4",
    textMuted: "#a3a3a3",
    accent: "#D4AF37",
    accentHover: "#e5c44a",
    gradientFrom: "#1A1A1A",
    ring: "rgba(212,175,55,0.2)",
    pill: "#333",
    btnSecondaryBg: "#2a2a2a",
    btnSecondaryHover: "#333",
    iconBadgeBg: "rgba(26,26,26,0.9)",
    dot: "#333",
  },
  light: {
    bg: "#ffffff",
    bgOuter: "#f5f5f5",
    card: "#f9f9f9",
    cardBorder: "#e5e5e5",
    text: "#1A1A1A",
    textSecondary: "#444444",
    textMuted: "#777777",
    accent: "#B8960C",
    accentHover: "#D4AF37",
    gradientFrom: "#ffffff",
    ring: "rgba(184,150,12,0.15)",
    pill: "#e5e5e5",
    btnSecondaryBg: "#f0f0f0",
    btnSecondaryHover: "#e5e5e5",
    iconBadgeBg: "rgba(255,255,255,0.9)",
    dot: "#d4d4d4",
  },
};

// ── Auto-scrolling carousel hook with active index tracking ──
function useCarousel(itemCount: number, speed = 2000) {
  const ref = useRef<HTMLDivElement>(null);
  const isPaused = useRef(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Track scroll position to update active dot
  const updateActiveIndex = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const scrollLeft = el.scrollLeft;
    const itemWidth = el.scrollWidth / itemCount;
    const idx = Math.round(scrollLeft / itemWidth);
    setActiveIndex(Math.min(idx, itemCount - 1));
  }, [itemCount]);

  // Auto-scroll
  const scroll = useCallback(() => {
    const el = ref.current;
    if (!el || isPaused.current) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (el.scrollLeft >= maxScroll - 2) {
      el.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      el.scrollBy({ left: 220, behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(scroll, speed);
    return () => clearInterval(interval);
  }, [scroll, speed]);

  // Listen for scroll events
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.addEventListener("scroll", updateActiveIndex, { passive: true });
    return () => el.removeEventListener("scroll", updateActiveIndex);
  }, [updateActiveIndex]);

  // Scroll to specific index
  const scrollTo = useCallback(
    (index: number) => {
      const el = ref.current;
      if (!el) return;
      const itemWidth = el.scrollWidth / itemCount;
      el.scrollTo({ left: itemWidth * index, behavior: "smooth" });
    },
    [itemCount],
  );

  const handlers = {
    onMouseEnter: () => {
      isPaused.current = true;
    },
    onMouseLeave: () => {
      isPaused.current = false;
    },
    onTouchStart: () => {
      isPaused.current = true;
    },
    onTouchEnd: () => {
      setTimeout(() => {
        isPaused.current = false;
      }, 2000);
    },
  };

  return { ref, handlers, activeIndex, scrollTo };
}

export default function HomePage() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isDark, setIsDark] = useState(true);
  const servicesCarousel = useCarousel(services.length, 3000);
  const testimonialsCarousel = useCarousel(testimonials.length, 4000);

  const t = isDark ? themes.dark : themes.light;

  const handleCompanyProfile = () => {
    window.open(
      "https://drive.google.com/file/d/1k00oetjYSpezi_UmOa0qPZ3r6004I3Og/view?usp=drive_link",
      "_blank",
    );
  };

  const handleEmail = () => {
    window.location.href = `mailto:${profile.email}?subject=Vehicle Inquiry - Marvel L&A`;
  };

  const handleCall = () => {
    window.location.href = `tel:${profile.phone2.replace(/\s/g, "")}`;
  };

  const handleWhatsApp = () => {
    const num = profile.whatsapp.replace(/[^0-9]/g, "");
    window.open(
      `https://wa.me/${num}?text=Hello Marvel L%26A, I'm interested in your vehicles.`,
      "_blank",
    );
  };

  const handleSaveContact = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Marvel Logistics & Auto
ORG:Marvel Logistics & Auto
TITLE:Premier Car Dealership
ADR:;;${profile.location}
NOTE:${profile.bio}
EMAIL:${profile.email}
TEL;TYPE=WORK:${profile.phone2}
TEL;TYPE=CELL:${profile.phone2}
URL:https://wa.me/${profile.whatsapp.replace(/[^0-9]/g, "")}
END:VCARD`;
    const blob = new Blob([vCardData], { type: "text/vcard" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `Marvel_Logistics_Auto.vcf`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleConnect = () => {
    window.location.href = `mailto:${profile.email}?subject=Let's Connect - Marvel L&A`;
  };

  return (
    <div
      className="min-h-screen w-full flex items-start md:items-center justify-center md:p-8 transition-colors duration-500"
      style={{ background: t.bgOuter }}
    >
      <div
        className="w-full md:max-w-[400px] md:rounded-[36px] md:shadow-2xl overflow-hidden relative min-h-screen md:min-h-0 transition-colors duration-500"
        style={{ background: t.bg, boxShadow: `0 0 0 1px ${t.ring}` }}
      >
        {/* Hero Image Section */}
        <div
          onClick={() => setIsExpanded(!isExpanded)}
          className={`
            relative w-full group cursor-pointer 
            transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]
            ${isExpanded ? "h-[85vh] md:h-[600px]" : "h-[45vh] md:h-[400px]"}
          `}
        >
          <img
            src={profile.image}
            alt="Marvel Logistics & Auto"
            className="w-full h-full object-cover object-center"
          />
          <div
            className="absolute inset-0 transition-opacity duration-700"
            style={{
              background: `linear-gradient(to top, ${t.gradientFrom}, ${t.gradientFrom}33, transparent)`,
              opacity: isExpanded ? 0.6 : 0.95,
            }}
          />

          {/* Brand Badge */}
          <div
            className={`absolute bottom-10 left-6 px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-lg transition-all duration-500 ${isExpanded ? "opacity-0 translate-y-4" : "opacity-100"}`}
            style={{ background: t.accent, color: isDark ? "#1A1A1A" : "#fff" }}
          >
            <FaCar size={10} /> PREMIER DEALERSHIP
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsDark(!isDark);
            }}
            className="absolute top-6 left-6 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 active:scale-90 z-20 backdrop-blur-md"
            style={{
              background: isDark
                ? "rgba(255,255,255,0.15)"
                : "rgba(0,0,0,0.25)",
              border: `1px solid ${isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.15)"}`,
            }}
            aria-label="Toggle theme"
          >
            <div className="relative w-5 h-5">
              <Sun
                size={20}
                className="absolute inset-0 transition-all duration-300"
                style={{
                  color: "#D4AF37",
                  opacity: isDark ? 1 : 0,
                  transform: isDark
                    ? "rotate(0deg) scale(1)"
                    : "rotate(90deg) scale(0)",
                }}
              />
              <Moon
                size={20}
                className="absolute inset-0 transition-all duration-300"
                style={{
                  color: "#fff",
                  opacity: isDark ? 0 : 1,
                  transform: isDark
                    ? "rotate(-90deg) scale(0)"
                    : "rotate(0deg) scale(1)",
                }}
              />
            </div>
          </button>

          {/* Expand/Collapse */}
          <div className="absolute top-6 right-6 bg-black/30 backdrop-blur-md p-2 rounded-full text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {isExpanded ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
          </div>

          {/* Brand overlay with logo */}
          <div
            className={`absolute bottom-6 left-6 right-6 flex items-end gap-3 transition-all duration-700 ${isExpanded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          ></div>
        </div>

        {/* Content Section */}
        <div
          className="relative -mt-8 rounded-t-[36px] px-6 pt-10 pb-12 z-10 transition-colors duration-500"
          style={{ background: t.bg }}
        >
          <div
            className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-1.5 rounded-full md:hidden"
            style={{ background: t.pill }}
          />

          {/* Name & Role with Logo */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <img
                src={LOGO_URL}
                alt="Marvel Logo"
                className="w-11 h-11 rounded-xl object-cover shadow-md"
                style={{ border: `2px solid ${t.accent}44` }}
              />
              <div>
                <h1
                  className="text-[24px] font-extrabold flex items-center gap-2 tracking-tight leading-none transition-colors duration-500"
                  style={{ color: t.text }}
                >
                  {profile.fullName}
                </h1>
                <p
                  className="text-sm mt-1 leading-snug font-semibold italic transition-colors duration-500"
                  style={{ color: t.accent }}
                >
                  {profile.role}
                </p>
              </div>
            </div>
            <div
              className="flex items-center gap-4 text-xs transition-colors duration-500"
              style={{ color: t.textMuted }}
            >
              <span className="flex items-center gap-1">
                <MapPin size={12} /> {profile.location}
              </span>
              <span className="flex items-center gap-1">
                <Phone size={12} />
                <a
                  href={`tel:${profile.phone2}`}
                  className="hover:underline text-blue-400"
                >
                  {profile.phone2}
                </a>
              </span>
            </div>
          </div>

          {/* Primary Actions */}
          <div className="flex gap-3 mb-10">
            <button
              onClick={handleSaveContact}
              className="flex-1 h-[52px] rounded-2xl font-bold text-sm flex items-center justify-center gap-2.5 active:scale-95 transition-all duration-300 shadow-lg cursor-pointer"
              style={{
                background: t.accent,
                color: isDark ? "#1A1A1A" : "#fff",
                boxShadow: `0 8px 20px ${t.accent}33`,
              }}
            >
              <Download size={18} strokeWidth={2.5} />
              Save Contact
            </button>
            <button
              onClick={handleConnect}
              className="flex-1 h-[52px] rounded-2xl font-bold text-sm flex items-center justify-center gap-2.5 active:scale-95 transition-all duration-300 cursor-pointer"
              style={{
                background: t.btnSecondaryBg,
                border: `1px solid ${t.accent}44`,
                color: t.accent,
              }}
            >
              <ArrowRightLeft size={18} strokeWidth={2.5} />
              Connect
            </button>
          </div>

          {/* About */}
          <div className="mb-10">
            <h3
              className="font-bold text-lg mb-3 italic transition-colors duration-500"
              style={{ color: t.accent }}
            >
              About Us
            </h3>
            <p
              className="text-[15px] leading-relaxed transition-colors duration-500"
              style={{ color: t.textSecondary }}
            >
              {profile.bio}
            </p>
            <p
              className="text-[15px] leading-relaxed mt-3 transition-colors duration-500"
              style={{ color: t.textSecondary }}
            >
              We pride ourselves on our core values of{" "}
              <span className="font-semibold" style={{ color: t.accent }}>
                trust
              </span>
              ,{" "}
              <span className="font-semibold" style={{ color: t.accent }}>
                honesty
              </span>
              ,{" "}
              <span className="font-semibold" style={{ color: t.accent }}>
                reliability
              </span>{" "}
              and{" "}
              <span className="font-semibold" style={{ color: t.accent }}>
                confidentiality
              </span>
              .
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="mb-10 space-y-4">
            <div
              className="rounded-2xl p-5 transition-colors duration-500"
              style={{
                background: t.card,
                border: `1px solid ${t.cardBorder}`,
              }}
            >
              <h4
                className="text-sm font-bold uppercase tracking-wider mb-2 transition-colors duration-500"
                style={{ color: t.accent }}
              >
                Our Mission
              </h4>
              <p
                className="text-[13px] leading-relaxed transition-colors duration-500"
                style={{ color: t.textSecondary }}
              >
                {profile.mission}
              </p>
            </div>
            <div
              className="rounded-2xl p-5 transition-colors duration-500"
              style={{
                background: t.card,
                border: `1px solid ${t.cardBorder}`,
              }}
            >
              <h4
                className="text-sm font-bold uppercase tracking-wider mb-2 transition-colors duration-500"
                style={{ color: t.accent }}
              >
                Our Vision
              </h4>
              <p
                className="text-[13px] leading-relaxed transition-colors duration-500"
                style={{ color: t.textSecondary }}
              >
                {profile.vision}
              </p>
            </div>
          </div>

          {/* Services Carousel */}
          <div className="relative mb-10">
            <div className="flex items-center justify-between mb-4 cursor-pointer group">
              <h3
                className="font-bold text-lg italic transition-colors duration-500"
                style={{ color: t.accent }}
              >
                Our Services
              </h3>
              <ChevronRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
                style={{ color: `${t.accent}80` }}
              />
            </div>
            <div
              ref={servicesCarousel.ref}
              {...servicesCarousel.handlers}
              className="flex overflow-x-auto gap-4 pb-4 -mx-6 px-6 scrollbar-hide snap-x snap-mandatory"
            >
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className="shrink-0 w-[200px] snap-start rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all active:scale-95 duration-200 group"
                  style={{
                    background: t.card,
                    border: `1px solid ${t.cardBorder}`,
                  }}
                >
                  <div
                    className="h-32 w-full relative overflow-hidden"
                    style={{ background: isDark ? "#111" : "#eee" }}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div
                      className="absolute top-2 right-2 backdrop-blur rounded-md p-1.5 shadow-sm"
                      style={{ background: t.iconBadgeBg }}
                    >
                      <service.icon size={14} style={{ color: t.accent }} />
                    </div>
                  </div>
                  <div className="p-4">
                    <p
                      className="text-[14px] font-bold leading-tight mb-1 transition-colors duration-500"
                      style={{ color: t.text }}
                    >
                      {service.title}
                    </p>
                    <p
                      className="text-[11px] line-clamp-2 leading-relaxed transition-colors duration-500"
                      style={{ color: t.textMuted }}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/* Interactive dots */}
            <div className="flex justify-center gap-2 mt-3">
              {services.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => servicesCarousel.scrollTo(idx)}
                  className="transition-all duration-300 rounded-full"
                  style={{
                    width: servicesCarousel.activeIndex === idx ? 24 : 6,
                    height: 6,
                    background:
                      servicesCarousel.activeIndex === idx ? t.accent : t.dot,
                  }}
                  aria-label={`Go to service ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Financing */}
          <div className="mb-10">
            <div
              className="rounded-2xl p-5 transition-colors duration-500"
              style={{
                background: `${t.accent}15`,
                border: `1px solid ${t.accent}33`,
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <CreditCard size={18} style={{ color: t.accent }} />
                <h4
                  className="text-sm font-bold uppercase tracking-wider"
                  style={{ color: t.accent }}
                >
                  Financing Available
                </h4>
              </div>
              <p
                className="text-[13px] leading-relaxed transition-colors duration-500"
                style={{ color: t.textSecondary }}
              >
                We accept a variety of financing options to make purchasing more
                affordable. We work with the best terms to find a financial
                option that fits you.
              </p>
            </div>
          </div>

          {/* Testimonials */}
          <div className="relative">
            <div className="flex items-center justify-between mb-4 cursor-pointer group">
              <h3
                className="font-bold text-lg italic transition-colors duration-500"
                style={{ color: t.accent }}
              >
                Testimonials
              </h3>
              <Quote size={18} style={{ color: `${t.accent}50` }} />
            </div>
            <div
              ref={testimonialsCarousel.ref}
              {...testimonialsCarousel.handlers}
              className="flex overflow-x-auto gap-4 pb-4 -mx-6 px-6 scrollbar-hide snap-x snap-mandatory"
            >
              {testimonials.map((item, idx) => (
                <div
                  key={idx}
                  className="shrink-0 w-[260px] snap-start rounded-2xl p-5 shadow-sm transition-colors duration-500"
                  style={{
                    background: t.card,
                    border: `1px solid ${t.cardBorder}`,
                  }}
                >
                  <Quote
                    size={16}
                    className="mb-2"
                    style={{ color: `${t.accent}66` }}
                  />
                  <p
                    className="text-[12px] leading-relaxed mb-3 italic transition-colors duration-500"
                    style={{ color: t.textSecondary }}
                  >
                    &ldquo;{item.text}&rdquo;
                  </p>
                  <p
                    className="text-[12px] font-bold"
                    style={{ color: t.accent }}
                  >
                    — {item.name}
                  </p>
                </div>
              ))}
            </div>
            {/* Interactive dots */}
            <div className="flex justify-center gap-2 mt-3">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => testimonialsCarousel.scrollTo(idx)}
                  className="transition-all duration-300 rounded-full"
                  style={{
                    width: testimonialsCarousel.activeIndex === idx ? 24 : 6,
                    height: 6,
                    background:
                      testimonialsCarousel.activeIndex === idx
                        ? t.accent
                        : t.dot,
                  }}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mb-10">
            <h3
              className="font-bold text-lg mb-3 italic transition-colors duration-500"
              style={{ color: t.accent }}
            >
              Quick Actions
            </h3>
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={handleCompanyProfile}
                className="qa-btn h-[52px] rounded-2xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors duration-300 cursor-pointer "
                style={{
                  background: t.card,
                  border: `1px solid ${t.cardBorder}`,
                  color: t.text,
                }}
              >
                <FileText size={16} style={{ color: t.accent }} />
                Profile
              </button>
              <button
                onClick={handleWhatsApp}
                className="qa-btn h-[52px] rounded-2xl text-xs font-semibold text-[#25D366] flex items-center justify-center gap-1.5 transition-colors duration-300 cursor-pointer"
                style={{ background: t.card, border: `1px solid #25D36644` }}
              >
                <FaWhatsapp size={16} />
                WhatsApp
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/marvel.la_?igsh=MThraDV3NXVmbXJuag%3D%3D&utm_source=qr",
                    "_blank",
                  )
                }
                className="qa-btn h-[52px] rounded-2xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors duration-300 cursor-pointer"
                style={{
                  background: t.card,
                  border: `1px solid #E4405F44`,
                  color: "#E4405F",
                }}
              >
                <FaInstagram size={16} />
                Instagram
              </button>
              <button
                onClick={() =>
                  window.open("https://snapchat.com/t/MYFN8VwU", "_blank")
                }
                className="qa-btn h-[52px] rounded-2xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors duration-300 cursor-pointer"
                style={{
                  background: t.card,
                  border: `1px solid #FFFC0044`,
                  color: "#FFFC00",
                }}
              >
                <FaSnapchatGhost size={16} />
                <span className="text-gray-500">Snapchat</span>
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://www.tiktok.com/@marvel.la_?is_from_webapp=1&sender_device=pc",
                    "_blank",
                  )
                }
                className="qa-btn h-[52px] rounded-2xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors duration-300 cursor-pointer"
                style={{
                  background: t.card,
                  border: `1px solid ${t.cardBorder}`,
                  color: t.text,
                }}
              >
                <FaTiktok size={16} style={{ color: "#000000" }} />
                TikTok
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
