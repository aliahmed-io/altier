export default function TrustBar() {
  return (
    <section className="w-full bg-[#111111] border-y border-white/10 py-8 px-4 overflow-hidden relative z-20">
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
        
        {/* Item 1 */}
        <div className="flex items-center gap-6 group">
          <div className="text-accent">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="9"/>
              <path d="M12 7v2M12 15v2M7 12h2M15 12h2"/>
              <circle cx="12" cy="12" r="1.5"/>
              <path d="M8.5 8.5l1.5 1.5M14 14l1.5 1.5M15.5 8.5L14 10M8.5 15.5L10 14"/>
            </svg>
          </div>
          <div>
            <h3 className="text-[10px] tracking-[0.2em] uppercase text-white font-semibold mb-1 group-hover:text-accent transition-colors duration-300">
              Masterful Craftsmanship
            </h3>
            <p className="text-[11px] text-white/50">Meticulous detail in every piece</p>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-[1px] h-10 bg-white/10"></div>

        {/* Item 2 */}
        <div className="flex items-center gap-6 group">
          <div className="text-accent">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/>
              <path d="M14 20c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
              <path d="M10 8l2 6"/>
              <path d="M12 12l4-2"/>
            </svg>
          </div>
          <div>
            <h3 className="text-[10px] tracking-[0.2em] uppercase text-white font-semibold mb-1 group-hover:text-accent transition-colors duration-300">
              Exceptional Materials
            </h3>
            <p className="text-[11px] text-white/50">Sourced from the finest</p>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-[1px] h-10 bg-white/10"></div>

        {/* Item 3 */}
        <div className="flex items-center gap-6 group">
          <div className="text-accent">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 4v16"/>
              <path d="M8 8l4 4-4 4"/>
              <path d="M16 8l-4 4 4 4"/>
              <circle cx="12" cy="12" r="2"/>
            </svg>
          </div>
          <div>
            <h3 className="text-[10px] tracking-[0.2em] uppercase text-white font-semibold mb-1 group-hover:text-accent transition-colors duration-300">
              Timeless Design
            </h3>
            <p className="text-[11px] text-white/50">Created to last generations</p>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-[1px] h-10 bg-white/10"></div>

        {/* Item 4 */}
        <div className="flex items-center gap-6 group">
          <div className="text-accent">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 10c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6H9c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5"/>
              <path d="M14 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4"/>
              <path d="M12 9l2 2-2 2"/>
            </svg>
          </div>
          <div>
            <h3 className="text-[10px] tracking-[0.2em] uppercase text-white font-semibold mb-1 group-hover:text-accent transition-colors duration-300">
              Bespoke Service
            </h3>
            <p className="text-[11px] text-white/50">Tailored to your world</p>
          </div>
        </div>

      </div>
    </section>
  );
}
