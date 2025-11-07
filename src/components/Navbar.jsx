import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-cyan-500 to-fuchsia-500"></div>
            <span className="font-semibold text-gray-900 text-lg">NebulaCore</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <a href="#solutions" className="hover:text-gray-900 transition-colors">Solutions</a>
            <a href="#platform" className="hover:text-gray-900 transition-colors">Platform</a>
            <a href="#enterprise" className="hover:text-gray-900 transition-colors">Enterprise</a>
            <a href="#resources" className="hover:text-gray-900 transition-colors">Resources</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-gray-900">Sign in</button>
            <button className="px-4 py-2 rounded-lg text-sm font-medium text-white bg-gray-900 hover:bg-black transition-colors">Book a demo</button>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100"
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#solutions" className="block px-2 py-2 rounded-md text-gray-700 hover:bg-gray-100">Solutions</a>
            <a href="#platform" className="block px-2 py-2 rounded-md text-gray-700 hover:bg-gray-100">Platform</a>
            <a href="#enterprise" className="block px-2 py-2 rounded-md text-gray-700 hover:bg-gray-100">Enterprise</a>
            <a href="#resources" className="block px-2 py-2 rounded-md text-gray-700 hover:bg-gray-100">Resources</a>
            <div className="pt-2 flex gap-2">
              <button className="flex-1 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 bg-gray-50">Sign in</button>
              <button className="flex-1 px-4 py-2 rounded-lg text-sm font-medium text-white bg-gray-900">Book a demo</button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
