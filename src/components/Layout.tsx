import { Link, Outlet } from 'react-router-dom';
import { Menu, X, Instagram, Mail } from 'lucide-react';
import { useState } from 'react';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans text-blue-800 bg-blue-50">
      <header className="fixed w-full bg-blue-50/90 backdrop-blur-sm z-50 border-b border-blue-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="font-serif text-2xl tracking-wider text-blue-900">
                YOGA WITH ME
              </Link>
            </div>
            
            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-8 items-center">
              <Link to="/who-am-i" className="text-blue-600 hover:text-blue-900 transition-colors uppercase text-sm tracking-widest">Who Am I</Link>
              <Link to="/yoga" className="text-blue-600 hover:text-blue-900 transition-colors uppercase text-sm tracking-widest">Yoga</Link>
              <Link to="/community" className="text-blue-600 hover:text-blue-900 transition-colors uppercase text-sm tracking-widest">Community</Link>
              <Link to="/contact" className="px-5 py-2 bg-blue-800 text-blue-50 rounded-full hover:bg-blue-700 transition-colors uppercase text-xs tracking-widest">Contact Me</Link>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-blue-600 hover:text-blue-900 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-blue-50 border-b border-blue-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
              <Link 
                to="/who-am-i" 
                className="block px-3 py-2 text-blue-600 hover:text-blue-900 uppercase text-sm tracking-widest"
                onClick={() => setIsMenuOpen(false)}
              >
                Who Am I
              </Link>
              <Link 
                to="/yoga" 
                className="block px-3 py-2 text-blue-600 hover:text-blue-900 uppercase text-sm tracking-widest"
                onClick={() => setIsMenuOpen(false)}
              >
                Yoga
              </Link>
              <Link 
                to="/community" 
                className="block px-3 py-2 text-blue-600 hover:text-blue-900 uppercase text-sm tracking-widest"
                onClick={() => setIsMenuOpen(false)}
              >
                Community
              </Link>
              <Link 
                to="/contact" 
                className="block px-3 py-2 text-blue-600 hover:text-blue-900 uppercase text-sm tracking-widest"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Me
              </Link>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow pt-20">
        <Outlet />
      </main>

      <footer className="bg-blue-900 text-blue-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-blue-100 font-serif text-lg mb-4">YOGA WITH ME</h3>
            <p className="text-sm leading-relaxed max-w-xs">
              A space for evolving, sharing, and connecting through the practice of yoga and mindful living.
            </p>
          </div>
          <div>
            <h4 className="text-blue-100 uppercase text-xs tracking-widest mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/who-am-i" className="hover:text-blue-100 transition-colors">Who Am I</Link></li>
              <li><Link to="/yoga" className="hover:text-blue-100 transition-colors">Yoga Knowledge</Link></li>
              <li><Link to="/community" className="hover:text-blue-100 transition-colors">Community</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-blue-100 uppercase text-xs tracking-widest mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-100 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-blue-100 transition-colors"><Mail size={20} /></a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-blue-800 text-xs text-center">
          &copy; {new Date().getFullYear()} Yoga With Me. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
