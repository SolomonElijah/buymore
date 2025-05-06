'use client';

import {
  FiLogOut,
  FiPlus,
  FiZap,
  FiBox,
  FiGift,
  FiMapPin,
} from 'react-icons/fi';
import { BsBoxSeam } from 'react-icons/bs';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  return (
    <>
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white p-6 z-40 transform transition-transform duration-300 ease-in-out
        rounded-tr-3xl rounded-br-3xl flex flex-col justify-between shadow-lg
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:relative md:shadow-none`}
      >
        <div className="overflow-y-auto flex-1">
          <h1 className="text-xl font-bold mb-6">
            Buy<span className="text-blue-600">More</span>
          </h1>

          <nav className="flex flex-col gap-4 text-gray-700 font-medium">
            <a href="#" className="flex items-center gap-3 text-sm">
              <FiZap className="text-lg" />
              Popular Products
            </a>
            <a href="#" className="flex items-center gap-3 text-sm bg-blue-600 text-white px-3 py-2 rounded-full">
              <BsBoxSeam className="text-lg" />
              Explore New
            </a>
            <a href="#" className="flex items-center gap-3 text-sm">
              <FiBox className="text-lg" />
              Clothing and Shoes
            </a>
            <a href="#" className="flex items-center gap-3 text-sm">
              <FiGift className="text-lg" />
              Gifts and Living
            </a>
            <a href="#" className="flex items-center gap-3 text-sm">
              <FiMapPin className="text-lg" />
              Inspiration
            </a>
          </nav>

          <div className="mt-8 text-sm text-gray-700">
            <p className="font-semibold mb-2">Quick actions</p>
            <button className="flex items-center gap-2 mb-2">
              <FiPlus className="text-sm" />
              Request for product
            </button>
            <button className="flex items-center gap-2">
              <FiPlus className="text-sm" />
              Add member
            </button>
          </div>

          <div className="mt-8 text-sm text-gray-700">
            <div className="flex justify-between mb-2">
              <p className="font-semibold">Last orders</p>
              <span className="text-black font-semibold text-sm">37</span>
            </div>

            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <img src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/36/9743752/1.jpg?6481" alt="user1" className="w-6 h-6 rounded-full" />
                <p className="text-xs font-medium">DKC Nike...</p>
              </div>
              <a href="#" className="text-xs text-gray-400">view order</a>
            </div>

            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <img src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/36/9743752/1.jpg?6481" alt="user2" className="w-6 h-6 rounded-full" />
                <p className="text-xs font-medium">Outerwear...</p>
              </div>
              <a href="#" className="text-xs text-gray-400">view order</a>
            </div>

            <a href="#" className="text-xs text-blue-600 font-semibold">See all</a>
          </div>
        </div>

        <button className="flex items-center gap-2 text-red-500 text-sm mt-6">
          <FiLogOut />
          Log out
        </button>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
