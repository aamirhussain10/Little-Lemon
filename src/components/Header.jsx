import React from 'react';

export default function Header({ cartCount, onNavigate }) {
  return (
    <header className="bg-yellow-200 shadow-md">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between" aria-label="Main navigation">
        <div className="flex items-center gap-3">
          <button onClick={() => onNavigate('home')} aria-label="Go to home" className="text-2xl font-bold">
            🍋 Little Lemon
          </button>
          <ul className="hidden md:flex gap-4" role="navigation">
            <li><button onClick={() => onNavigate('menu')} className="hover:underline">Menu</button></li>
            <li><button onClick={() => onNavigate('booking')} className="hover:underline">Book a table</button></li>
            <li><button onClick={() => onNavigate('order')} className="hover:underline">Order Online</button></li>
            <li><button onClick={() => onNavigate('contact')} className="hover:underline">Contact</button></li>
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={() => onNavigate('order')} aria-label={`Open cart with ${cartCount} items`} className="relative">
            🛒
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
          <button onClick={() => onNavigate('menu')} className="md:hidden">☰</button>
        </div>
      </nav>
    </header>
  );
}