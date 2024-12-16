import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className='max-w-dvw overflow-x-hidden'>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
