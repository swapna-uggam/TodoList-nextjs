'use client';
import React from 'react';

export default function UnderstandingPrices() {
  const sections = [
    {
      icon: '📸',
      title: 'Experience & Expertise',
      items: [
        'Over 15 years of experience in maternity and family photography.',
        '1000+ maternity shoots completed across the UK with consistent client satisfaction.',
        'Dedicated team of full-time professionals offering creative and comfortable sessions.',
        'Locations covered: London, Midlands, Scotland, Yorkshire & beyond.',
      ],
    },
    {
      icon: '🎥',
      title: 'Licenses & Equipment',
      items: [
        'High-end cameras, lenses, gimbals, and drones for flawless maternity portraits.',
        'Annual UK drone license allows cinematic outdoor shoots in parks and open spaces.',
        'All gear regularly maintained for consistent performance and safety.',
        'Creative tools to beautifully capture every angle and emotion.',
      ],
    },
    {
      icon: '🎨',
      title: 'Post-Production',
      items: [
        'In-house editing using Adobe CC and Final Cut Pro ensures top-tier quality.',
        'Warm tones, soft transitions, and emotional storytelling added to every frame.',
        'We fine-tune skin tones, lighting, and colors for a dreamy maternity glow.',
      ],
    },
    {
      icon: '🔒',
      title: 'Data Manage',
      items: [
        'Secure cloud galleries for clients in London, Midlands, and Scotland.',
        'Regular backups and privacy-focused storage to protect your memories.',
        'Fast delivery with peace of mind for every client.',
      ],
    },
    {
      icon: '🌸',
      title: 'Quality & Value',
      items: [
        'Artistic, elegant, and emotion-rich photographs crafted with care.',
        'We focus on storytelling, lighting consistency, and natural beauty.',
        'Tailored maternity packages designed for comfort, beauty, and timeless value.',
      ],
    },
    {
      icon: '🚗',
      title: 'Travel & Logistics',
      items: [
        'All pricing includes travel, fuel, and logistics across the UK.',
        'Our team arrives on time with all equipment ready and setup planned.',
        'We handle transportation, location scouting, and timing coordination.',
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-pink-50 py-12 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-20 font-sans text-gray-900">
      <div className="max-w-full mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-black mb-10 sm:mb-12 tracking-wide drop-shadow-md">
          Understanding Our Pricing
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-center text-black mb-10 max-w-3xl mx-auto font-medium">
          Transparent Breakdown of What Makes Our Maternity Photoshoots Exceptional Across the UK
        </p>

        <div className="grid grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 relative">
          {/* Vertical spine line */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-0 bottom-0 left-1/2 w-1 bg-pink-300 opacity-30 -translate-x-1/2"
          />

          {sections.map(({ icon, title, items }, idx) => (
            <article
              key={title}
              className={`
                relative bg-white rounded-lg
                p-4 sm:p-6 md:p-8
                shadow-[0_0_15px_rgba(219,39,119,0.15)]
                transition-transform duration-300
                hover:scale-[1.03]
                cursor-default
                before:absolute before:top-0 before:bottom-0 before:w-6 before:bg-gradient-to-r before:from-pink-200 before:to-transparent
                after:absolute after:top-0 after:bottom-0 after:w-6 after:bg-gradient-to-l after:from-pink-200 after:to-transparent
                ${idx === 0 ? 'before:left-0 after:hidden rounded-r-none' : ''}
                ${idx === sections.length - 1 ? 'after:right-0 before:hidden rounded-l-none' : ''}
                ${idx !== 0 && idx !== sections.length - 1 ? 'before:left-0 after:right-0' : ''}
              `}
              style={{
                boxShadow:
                  idx === 1
                    ? 'inset 0 0 12px 4px rgba(219,39,119,0.12)'
                    : undefined,
              }}
            >
              {/* Responsive header layout for mobile */}
              <header className="flex flex-col xs:flex-col sm:flex-col md:flex-row items-start md:items-center mb-4 sm:mb-6 gap-2 sm:gap-4">
                <span className="text-xl xs:text-2xl sm:text-3xl md:text-4xl">{icon}</span>
                <h2 className="text-sm xs:text-xm sm:text-2xl md:text-2xl font-semibold text-black border-b-2 sm:border-b-4 border-pink-400 pb-1">
                  {title}
                </h2>
              </header>

              <ul className="space-y-3 sm:space-y-4 list-disc list-inside text-gray-700 text-xs sm:text-base md:text-base leading-relaxed">
                {items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
