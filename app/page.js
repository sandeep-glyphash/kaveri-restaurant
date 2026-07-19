'use client';
import Link from 'next/link';
import Image from 'next/image';
import { locations } from '../data/locations';

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-stone-950">
      {/* Mobile Layout - All 3 in viewport */}
      <div className="lg:hidden flex flex-col h-screen overflow-hidden">
        {/* Mobile Header */}
        <div className="flex-none py-4 px-4 bg-gradient-to-b from-stone-900 to-transparent">
          <div className="flex items-center justify-center gap-4">
            {/* Logo */}
            <Image
              src="/images/main_logo.png"
              alt="Kaveri Restaurant Logo"
              width={70}
              height={70}
              className="w-14 h-auto drop-shadow-lg flex-shrink-0"
              priority
            />
            {/* Text */}
            <div className="flex flex-col items-start">
              <h1 className="text-2xl font-serif text-white italic leading-tight">Choose Your</h1>
              <p className="text-amber-400 text-xs uppercase tracking-widest font-bold">Kaveri Experience</p>
            </div>
          </div>
        </div>

        {/* Three Outlets - Stacked Compact */}
        <div className="flex-1 flex flex-col gap-3 px-4 pb-6 overflow-y-auto">
          {Object.values(locations).map((loc, index) => (
            <Link
              href={`/${loc.slug}`}
              key={loc.slug}
              className="relative group rounded-2xl overflow-hidden shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 hover:scale-[1.02] flex-none"
              style={{
                height: 'calc((100vh - 140px) / 3.2)',
                minHeight: '180px'
              }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={loc.image}
                  alt={loc.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-stone-950/80 via-stone-950/50 to-transparent group-hover:from-stone-950/60 transition-all duration-500" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex items-center px-5">
                <div className="flex-1">
                  {/* Tagline */}
                  <span className="inline-block py-1 px-2.5 mb-2 rounded-full border border-white/30 bg-black/30 text-white/90 text-[8px] uppercase tracking-wider font-bold backdrop-blur-sm">
                    {loc.tagline}
                  </span>

                  {/* Title */}
                  <h2 className="text-2xl sm:text-3xl font-serif text-white italic mb-2 drop-shadow-lg">
                    {loc.name}
                  </h2>

                  {/* Description */}
                  <p className="text-stone-300 text-xs leading-relaxed mb-3 max-w-[200px]">
                    {loc.description}
                  </p>

                  {/* Arrow Icon */}
                  <div className="flex items-center gap-2 text-amber-400 group-hover:gap-3 transition-all">
                    <span className="text-xs font-bold uppercase tracking-wider">Explore</span>
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>

                {/* Decorative Number */}
                <div className="flex-none ml-4 opacity-20 group-hover:opacity-30 transition-opacity">
                  <span className="text-6xl font-serif italic text-white font-bold">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>

              {/* Border Accent */}
              <div className={`absolute inset-0 border-2 border-transparent group-hover:border-amber-500/30 rounded-2xl transition-colors duration-500 pointer-events-none`} />
            </Link>
          ))}
        </div>
      </div>

      {/* Desktop Layout - Premium Cards */}
      <div className="hidden lg:flex lg:flex-col h-screen w-full overflow-hidden">
        {/* Desktop Header */}
        <div className="flex-none py-6 px-8 bg-gradient-to-b from-stone-900 to-transparent">
          <div className="flex items-center justify-center gap-6 max-w-[1800px] mx-auto">
            {/* Logo */}
            <Image
              src="/images/main_logo.png"
              alt="Kaveri Restaurant Logo"
              width={100}
              height={100}
              className="w-24 h-auto drop-shadow-2xl flex-shrink-0"
              priority
            />
            {/* Text */}
            <div className="flex flex-col items-start">
              <h1 className="text-5xl font-serif text-white italic leading-tight">Choose Your</h1>
              <p className="text-amber-400 text-sm uppercase tracking-[0.4em] font-bold">Kaveri Experience</p>
            </div>
          </div>
        </div>

        {/* Three Premium Cards in Row */}
        <div className="flex-1 flex flex-row gap-6 px-8 pb-8 items-center justify-center max-w-[1800px] mx-auto w-full">
          {Object.values(locations).map((loc, index) => (
            <Link
              href={`/${loc.slug}`}
              key={loc.slug}
              className="relative group rounded-3xl overflow-hidden shadow-2xl hover:shadow-yellow-500/30 transition-all duration-700 hover:scale-105 flex-1 h-full max-h-[550px]"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={loc.image}
                  alt={loc.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-stone-950/60 via-stone-950/70 to-stone-950/95 group-hover:from-stone-950/40 group-hover:via-stone-950/60 group-hover:to-stone-950/90 transition-all duration-700" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-8">
                {/* Top Section - Decorative Number */}
                <div className="flex justify-end">
                  <span className="text-9xl font-serif italic text-white/10 group-hover:text-white/20 transition-all duration-700 font-bold leading-none">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Bottom Section - Main Content */}
                <div className="space-y-4 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {/* Tagline Badge */}
                  <span className="inline-block py-2 px-4 rounded-full border border-white/30 bg-black/40 text-white/90 text-xs uppercase tracking-wider font-bold backdrop-blur-md">
                    {loc.tagline}
                  </span>

                  {/* Title with Golden Gradient */}
                  <h2 className="text-5xl font-serif italic mb-3 drop-shadow-2xl bg-gradient-to-r from-white via-amber-200 to-amber-400 bg-clip-text text-transparent group-hover:from-amber-300 group-hover:via-amber-400 group-hover:to-amber-500 transition-all duration-500">
                    {loc.name}
                  </h2>

                  {/* Golden Divider */}
                  <div className="w-20 h-1 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 shadow-lg shadow-amber-500/50 group-hover:w-32 transition-all duration-500" />

                  {/* Description */}
                  <p className="text-stone-300 text-base leading-relaxed max-w-md opacity-90 group-hover:opacity-100 group-hover:text-white transition-all duration-500">
                    {loc.description}
                  </p>

                  {/* Explore Button */}
                  <div className="flex items-center gap-3 text-amber-400 group-hover:gap-5 transition-all duration-500 pt-4">
                    <span className="text-sm font-bold uppercase tracking-widest group-hover:text-amber-300">Explore Location</span>
                    <svg className="w-6 h-6 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Border Accent on Hover */}
              <div className="absolute inset-0 border-4 border-transparent group-hover:border-yellow-500/50 rounded-3xl transition-colors duration-700 pointer-events-none" />

              {/* Subtle Inner Glow on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/10 via-transparent to-transparent" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
