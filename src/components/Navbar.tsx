import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Situations & Services', href: '#discover' },
    { label: 'Friction', href: '#relate' },
    { label: 'Approach', href: '#approach' },
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#17191C]/90 backdrop-blur-md border-b border-[#2B3038] py-3.5 shadow-sm'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="group flex items-center gap-3 text-[#F2F0EA] focus:outline-none focus:ring-2 focus:ring-[#3157D5] rounded-sm py-1"
          aria-label="Foundry Studio Homepage"
        >
          {/* Engineered Mark: Raw point transforming to structured coordinate module */}
          <div className="w-8 h-8 rounded-sm bg-[#1E2126] border border-[#2B3038] flex items-center justify-center relative overflow-hidden group-hover:border-[#3157D5] transition-colors">
            <span className="w-2 h-2 rounded-xs bg-[#F2F0EA] group-hover:bg-[#3157D5] transition-colors" />
            <span className="absolute top-1 right-1 w-1 h-1 bg-[#8E929A]/50" />
            <span className="absolute bottom-1 left-1 w-1 h-1 bg-[#8E929A]/50" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-display font-bold tracking-tight text-base text-[#F2F0EA]">
                FOUNDRY
              </span>
              <span className="text-[11px] font-mono tracking-widest text-[#8E929A] uppercase px-1 py-0.5 bg-[#20242A] border border-[#2B3038] rounded-xs">
                STUDIO
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#8E929A]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#F2F0EA] transition-colors py-1 focus:outline-none focus:text-[#F2F0EA]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Action */}
        <div className="hidden md:flex items-center gap-4">
          <span className="text-xs font-mono text-[#8E929A] hidden lg:inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Accepting Q2/Q3 Projects
          </span>
          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#3157D5] hover:bg-[#2546B4] text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#3157D5] focus:ring-offset-2 focus:ring-offset-[#17191C] cursor-pointer"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={onOpenContact}
            className="px-3 py-1.5 bg-[#3157D5] text-white text-xs font-semibold rounded-sm"
          >
            Let's Talk
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#8E929A] hover:text-[#F2F0EA] border border-[#2B3038] rounded-sm bg-[#1E2126] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#17191C] border-b border-[#2B3038] px-4 pt-3 pb-6 shadow-xl">
          <nav className="flex flex-col gap-3 text-sm text-[#8E929A]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#24282F] hover:text-[#F2F0EA] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-2.5 bg-[#3157D5] text-white text-xs font-semibold uppercase tracking-wider rounded-sm flex items-center justify-center gap-2"
              >
                <span>Let's Talk About Your Problem</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
