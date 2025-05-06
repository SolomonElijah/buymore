'use client';

import { FiShoppingCart, FiMenu, FiX } from 'react-icons/fi';
import Image from 'next/image';

export default function Header({ toggleSidebar, isOpen }:any) {
  return (
    <>
      {/* Header */}
      <header className="bg-white shadow-sm px-4 py-4 fixed top-0 w-full z-50 md:static md:ml-2">
        <div className="flex items-center justify-between">
{/* Toggle button for mobile */}
<button
            onClick={toggleSidebar}
            className="text-2xl text-gray-700 md:hidden"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>

          {/* Orders info */}
          <div className="text-black">
            <p className="text-2xl font-semibold leading-5">37</p>
            <p className="text-sm text-gray-500 -mt-1">Orders</p>
            <p className="text-xs text-gray-400">Last 7 days</p>
          </div>

          

          {/* Right section for desktop */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex gap-3 bg-gray-100 rounded-full p-1 shadow-inner">
              <button className="px-4 py-1 text-sm bg-white rounded-full shadow font-medium">
                Dashboard
              </button>
              <button className="px-4 py-1 text-sm text-gray-600">Website</button>
            </div>

          
          </div>
          <div className="flex items-center gap-4">
              <FiShoppingCart className="text-xl" />
              <div className="flex -space-x-2">
                <Image src="/assets/avater.jpg" alt="user1" width={24} height={24} className="rounded-full border-2 border-white" />
                <Image src="/assets/avater.jpg" alt="user2" width={24} height={24} className="rounded-full border-2 border-white" />
                <div className="w-6 h-6 bg-gray-200 text-xs flex items-center justify-center rounded-full border-2 border-white">+8</div>
              </div>
              <div className="flex items-center gap-2">
                <Image src="/assets/avater.jpg" alt="ryana" width={28} height={28} className="rounded-full" />
                <span className="font-medium text-sm">Ryana</span>
              </div>
            </div>
        </div>
      </header>

     
    </>
  );
}
