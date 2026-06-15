"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#111111] text-white/50 py-16 px-8 border-t border-white/10">
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between gap-16 md:gap-8 mb-16">
        
        {/* Logo and Copyright */}
        <div className="w-full md:w-1/4 flex flex-col justify-between">
          <div className="flex flex-col mb-12 md:mb-0">
            <div className="font-heading text-xl tracking-widest uppercase flex items-center gap-4 text-white">
              {/* Custom Brand Logo */}
              <div className="flex items-center justify-center text-white">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 4h8" />
                  <path d="M6 20h12" />
                  <path d="M12 4v16" />
                  <path d="M8 4c2 6 2 10 -2 16" />
                  <path d="M16 4c-2 6 -2 10 2 16" />
                  <path d="M8 14h8" />
                </svg>
              </div>
              <span>Obsidian</span>
            </div>
            <span className="text-[8px] tracking-[0.3em] text-white/40 mt-1 ml-10">Atelier</span>
          </div>
          <p className="text-[10px] hidden md:block">
            © 2026 Obsidian Atelier. All rights reserved.
          </p>
        </div>

        {/* Links Columns */}
        <div className="w-full md:w-2/4 grid grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-[10px] tracking-[0.2em] uppercase text-white mb-6">Collections</h4>
            <ul className="flex flex-col gap-4 text-xs font-light">
              <li><Link href="#" className="hover:text-accent transition-colors">All Collections</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">New In</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Limited Editions</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] tracking-[0.2em] uppercase text-white mb-6">Company</h4>
            <ul className="flex flex-col gap-4 text-xs font-light">
              <li><Link href="#" className="hover:text-accent transition-colors">Our World</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Craftsmanship</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Sustainability</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] tracking-[0.2em] uppercase text-white mb-6">Support</h4>
            <ul className="flex flex-col gap-4 text-xs font-light">
              <li><Link href="#" className="hover:text-accent transition-colors">FAQs</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Care & Maintenance</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        {/* Social */}
        <div className="w-full md:w-1/4 flex flex-col justify-between items-start md:items-end">
          <div>
            <h4 className="text-[10px] tracking-[0.2em] uppercase text-white mb-6 md:text-right">Follow Us</h4>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-dark transition-all duration-300">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-dark transition-all duration-300">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2-2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" aria-label="Pinterest" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-dark transition-all duration-300">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.168 0 7.41 2.967 7.41 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.366 18.619 0 12.017 0z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="flex items-center gap-6 text-[10px] md:hidden mt-8">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms & Conditions</Link>
          </div>
        </div>
        
      </div>
      
      <div className="max-w-[1600px] mx-auto border-t border-white/10 pt-8 flex justify-between items-center text-[10px]">
        <p className="md:hidden">© 2026 Obsidian Atelier. All rights reserved.</p>
        <div className="hidden md:flex items-center gap-6">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
}
