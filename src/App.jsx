import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import storage from './utils/storage';

export default function App() {
  const [view, setView] = useState('home');
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(storage.get('cart', []));
  }, []);

  useEffect(() => {
    storage.set('cart', cart);
  }, [cart]);

  return (
    <div>
      <Header cartCount={cart.length} onNavigate={setView} />
      <main className="container mx-auto p-4">
        {view === 'home' && <h1 className="text-3xl font-bold">Welcome to Little Lemon 🍋</h1>}
        {view === 'menu' && <h2 className="text-xl">Our Menu (to be added)</h2>}
        {view === 'booking' && <h2 className="text-xl">Booking Form (to be added)</h2>}
        {view === 'order' && <h2 className="text-xl">Order Online (to be added)</h2>}
        {view === 'contact' && <h2 className="text-xl">Contact Us (to be added)</h2>}
      </main>
    </div>
  );
}