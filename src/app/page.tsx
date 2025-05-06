'use client';

import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import HeroSlider from '@/components/HeroSlider';
import Footer from '@/components/Footer ';
import LimitedStockDeals from '@/components/LimitedStockDeals';


const HomePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <Header
        isOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      <div className="flex min-h-screen bg-gray-50">
        {/* Sidebar */}
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

        {/* Main content */}
        <div className="flex-1 overflow-y-auto">
          <main className="p-6 space-y-6 pt-[90px] md:pt-6">
            <HeroSlider />

            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Explore</h2>
              <button className="px-4 py-2 bg-gray-200 rounded-full">
                Filters
              </button>
            </div>

            <ProductCard />
          <LimitedStockDeals />
          </main>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
